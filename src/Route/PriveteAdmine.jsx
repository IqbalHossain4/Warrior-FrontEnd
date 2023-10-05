import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import PreLoader from "../components/PreLoader/PreLoader";

const PriveteAdmine = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <PreLoader></PreLoader>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PriveteAdmine;
