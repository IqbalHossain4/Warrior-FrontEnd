import React, { useEffect, useState } from "react";

const useHakaton = () => {
  const [hakatons, setHakatons] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://warrior-beta.vercel.app/hackathon")
      .then((res) => res.json())
      .then((data) => {
        setHakatons(data);
        setLoading(false);
      });
  }, []);

  return [hakatons, loading];
};

export default useHakaton;
