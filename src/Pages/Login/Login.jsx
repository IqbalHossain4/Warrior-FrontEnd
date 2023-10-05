import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginLottie from "../../assets/Lottie/animation_lmi33i3d.json";
import SocialLogin from "../Share/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="hero min-h-screen pt-12 bg-color">
        <div className="hero-content flex-col items-start justify-between gap-24 md:flex-row">
          <div className="md:w-1/2 w-full mx-auto md:mb-0 mb-12 text-center lg:text-left">
            <h1 className="text-4xl text-gray-400 font-bold mb-8">Login</h1>
            <Lottie animationData={loginLottie} loop={true} />
          </div>

          <div className="md:w-1/2 w-full mx-auto card shadow-2xl text-white bg-slate-900 h-[550px]  contentBox">
            <div className="form-inner">
              <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
                <div className="content">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <input
                      type="email"
                      className="input input-bordered "
                      name="email"
                      placeholder="email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Password</span>
                    </label>

                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered "
                      {...register("password", { required: true })}
                    />

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
                      value="Login"
                    />
                  </div>
                  <p className="m-4">
                    New Here?{" "}
                    <Link to="/signUp">
                      <span className="text-blue-500">Create an account</span>
                    </Link>
                  </p>
                  <SocialLogin />
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
    </>
  );
};

export default Login;
