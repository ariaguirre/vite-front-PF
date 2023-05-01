import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const user = true;
  if(!user){
    return <Navigate to="/auth" />
  }
  return children;
}

export default RequireAuth;
