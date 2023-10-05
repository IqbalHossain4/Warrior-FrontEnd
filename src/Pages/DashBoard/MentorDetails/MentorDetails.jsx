import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MentorDetails = () => {
  const [mentors, setMentor] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:5000/user").then((response) => {
      setMentor(response.data);
    });
  }, [reload]);
  const isMentors = mentors.filter((mentor) => mentor.isMentor === true);
  console.log(isMentors);
  // delete user
  const handleDeleteMentor = (id) => {
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
        axios.delete(`http://localhost:5000/users/${id}`).then((response) => {
          // Handle the response data here
          if (response.data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            setReload(!reload);
          }
        });
      }
    });
  };

  return (
    <div>
      {isMentors.length === 0 ? (
        <p className="text-4xl font-bold">Currently no mentors available</p>
      ) : (
        <>
          <h3 className="text-center font-semibold text-4xl my-4">
            Mentor Details
          </h3>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {isMentors.map((mentor, i) => (
                  <tr key={mentor._id}>
                    <th>{i + 1}</th>
                    <td>{mentor?.name}</td>
                    <td>{mentor?.email}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => handleDeleteMentor(mentor?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MentorDetails;
