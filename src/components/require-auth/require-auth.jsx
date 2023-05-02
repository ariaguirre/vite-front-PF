// import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // const {userCredentials} = useSelector((state)=> state.currentUser);
  const user = false;
  if( user ){
    return <Navigate to="/auth" />
  }
  return children;
}

export default RequireAuth;
