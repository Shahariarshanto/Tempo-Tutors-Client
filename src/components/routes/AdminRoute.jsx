/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import useAxios from "../../../hooks/useAxios";
import { AuthContext } from "../Providers/AuthProvider";


const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
   const location = useLocation();
  

  

  // use axios secure with react query
  const { data: isAdmin } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await useAxios.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
 



  if (loading ) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
