import React from "react";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
const useMentor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isMentor, isLoading: isMentorLoading } = useQuery({
    queryKey: ["isMentor", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/mentor/${user.email}`);
      return res.data.mentor;
    },
  });
  return [isMentor, isMentorLoading];
};

export default useMentor;
