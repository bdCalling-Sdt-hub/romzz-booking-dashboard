import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useGetProfileQuery } from "../redux/apislices/AuthSlices";

const PrivateRoute = ({ children }) => {
  const location = useLocation(); 
  const {data:profile , isFetching ,isLoading ,isError} = useGetProfileQuery() 
  console.log(profile);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError || !profile?.data) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (profile?.data?.role === "ADMIN" || profile?.data?.role === "SUPER-ADMIN") {
    return children; 
  }


  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
