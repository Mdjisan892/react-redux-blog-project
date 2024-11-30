/* eslint-disable react/prop-types */
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const ProtectedRouts = ({isAllowed , children}) => {
  const { user } = useAuth0();

  return user && isAllowed  ? <div>{children}</div> : <Navigate to={"/"} />;
};

export default ProtectedRouts;