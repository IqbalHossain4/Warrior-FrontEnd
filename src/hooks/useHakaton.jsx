import React, { useEffect, useState } from "react";

const useHakaton = () => {
  const [hakatons, setHakatons] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/hackathons")
      .then((res) => res.json())
      .then((data) => {
        setHakatons(data);
        setLoading(false);
      });
  }, []);

  return [hakatons, loading];
};

export default useHakaton;
