import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import PreLoader from "../components/PreLoader/PreLoader";
import useMentor from "../hooks/useMentor";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

const PriveteMentor = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isMentor, isMentorLoading] = useMentor();
  const location = useLocation();

  if (loading || isMentorLoading) {
    return <PreLoader></PreLoader>;
  }
  if (user && isMentor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PriveteMentor;
