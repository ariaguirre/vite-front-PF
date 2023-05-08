import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const response = useSelector((state)=> state.currentUser.userCredentials);
  
  if( !response  ){
    return <Navigate to="/auth" />
  }
  return children;
}

export default RequireAuth;
