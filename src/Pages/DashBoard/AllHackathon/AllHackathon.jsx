import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";

const AllHackathon = () => {
  const [reload, setReload] = useState(false);
  const [hackathons, setHackathons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/hackathon").then((response) => {
      setHackathons(response.data);
    });
  }, [reload]);
  return (
    <>
      <h3 className="text-center text-3xl my-4 font-bold">ALL HACKATHONS</h3>
      <div className="md:grid md:grid-cols-4 gap-4 overflow-y-scroll max-h-full">
        {hackathons.map((hackathon) => (
          <Card
            key={hackathon._id}
            hackathon={hackathon}
            reload={reload}
            setReload={setReload}
          />
        ))}
      </div>
    </>
  );
};

export default AllHackathon;
