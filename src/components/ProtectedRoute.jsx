import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    // If user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the child components (protected component)
  return children;
};

export default ProtectedRoute;
