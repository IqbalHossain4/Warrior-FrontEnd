import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Share/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Lottie from "lottie-react";
import loginLottie from "../../assets/Lottie/animation_lmi33i3d.json";

const SignUpCompo = ({ role }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const userRole = role;
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [handleImage, setHandleImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const name = data.name;
    const image = handleImage;
    const formData = new FormData();
    formData.append("image", image);
    const URL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_imgApi
    }`;
    fetch(URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const img_url = imageData.data.display_url;

        createUser(data.email, data.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log(user);
            updateUserProfile(name, img_url)
              .then(() => {
                const saveUser = {
                  name: data.name,
                  email: data.email.toLowerCase(),
                  company: userRole == "mentor" && data.company,
                  role: userRole == "mentor" ? "isMentor" : null,
                };
                fetch("http://localhost:5000/users", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Signed Up",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate(from, { replace: true });
                    }
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      });
  };

  return (
    <div>
      <div className="hero min-h-screen pt-12 text-black bg-color">
        <div className="hero-content flex-col items-start justify-between gap-24 lg:flex-row-reverse">
          <div className="md:w-1/2 w-full mx-auto md:mb-0 mb-12 text-center lg:text-left">
            {userRole != "mentor" ? (
              <h1 className="text-4xl text-gray-400 font-bold mb-8">
                Signup as{" "}
                <span className="text-[#FFDD00]">Participant</span>
              </h1>
            ) : (
              <h1 className="text-4xl text-gray-400 font-bold mb-8">
                Signup as <span className="text-[#D50B81]">Mentor</span>
              </h1>
            )}

            <Lottie animationData={loginLottie} loop={true} />
          </div>
          <div
            className={`md:w-1/2 w-full mx-auto card  shadow-2xl bg-slate-900 text-white  ${
              userRole != "mentor" ? "h-[700px]" : "h-[800px]"
            } contentBox`}
          >
            <div className="form-inner">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="content">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="input input-bordered text-black"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-600 ">Name is required</span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Your Image</span>
                    </label>
                    <input
                      {...register("image", { required: true })}
                      type="file"
                      placeholder="Your Image"
                      name="image"
                      onChange={(e) => setHandleImage(e.target.files[0])}
                      className="file-input file-input-bordered w-full"
                      accept="image/*"
                    />
                    {errors?.image?.type === "required" && (
                      <span className="text-red-600">Image is required</span>
                    )}
                  </div>

                  {userRole == "mentor" && (
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">
                          Company Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        className="input input-bordered text-black"
                        {...register("company", { required: true })}
                      />
                      {errors.company && (
                        <span className="text-red-600 ">
                          Company Name is required
                        </span>
                      )}
                    </div>
                  )}

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      className="input input-bordered text-black"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-600">Email is required</span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered text-black"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                      })}
                    />
                    {errors.password?.type === "required" && (
                      <span className="text-red-600">Password is required</span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-600">
                        Password must be at least 6 digit long.
                      </span>
                    )}
                    {errors.password?.type === "maxLength" && (
                      <span className="text-red-600">
                        Password can not be more than 20 digit.
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-600">
                        Password must have 1 uppercase, 1lowercase & 1 number
                      </span>
                    )}
                    <label className="label">
                      <a
                        href="#"
                        className="label-text-alt link link-hover text-white"
                      >
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-warning text-white"
                      type="submit"
                      value="Sign Up"
                    />
                  </div>
                  <>
                    <p className="m-4">
                      Already have an account?{" "}
                      <Link to="/login">
                        <span className="text-blue-500">Please login</span>
                      </Link>
                    </p>
                    <SocialLogin />
                  </>
                </div>
              </form>
              <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default SignUpCompo;
