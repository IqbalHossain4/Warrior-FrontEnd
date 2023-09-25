import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  console.log(students);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    axios.get("https://warrior-beta.vercel.app/user").then((response) => {
      setStudents(response.data);
    });
  }, [reload]);
  const isStudent = students.filter(
    (student) => student.isParticipant === true
  );

  // delete user
  const handleDeleteStudent = (id) => {
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
          .delete(`https://warrior-beta.vercel.app/users/${id}`)
          .then((response) => {
            // Handle the response data here
            if (response.data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              setReload(!reload)
            }
          });
      }
    });
  };

  return (
    <div>
      {isStudent.length === 0 ? (
        <p className="text-4xl font-bold">Currently no students available</p>
      ) : (
      <>
      <h3 className="text-center font-semibold text-4xl my-4">Student Details</h3>
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
              {isStudent.map((student, i) => (
                <tr key={student._id}>
                  <th>{i + 1}</th>
                  <td>{student?.name}</td>
                  <td>{student?.email}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => handleDeleteStudent(student?._id)}
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

export default StudentDetails;
