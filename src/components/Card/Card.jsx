import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const Card = ({hackathon, reload, setReload}) => {
console.log(hackathon);
const {_id, banner, description, title, publisher} = hackathon;
const handleDelete =(id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`https://warrior-beta.vercel.app/hackathon/${id}`)
            .then((response) => {
              // Handle the response data here
              if (response.data.deletedCount > 0) {
                Swal.fire("Deleted!", "User has been deleted.", "success");
                setReload(!reload)
              }
            });
        }
      });
}
  return (
    <>
      <div className="card  shadow-2xl">
        <figure>
          <img
            src={banner}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h5 className="font-semibold">{publisher?.name}</h5>
          <p>{description}</p>
          <div className="card-actions justify-end">
          <button
                      className="btn"
                      onClick={() => handleDelete(_id)}
                    >
                      Delete
                    </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
