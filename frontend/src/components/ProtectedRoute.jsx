import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { verifyToken } from "../utils/api";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setIsValid(false);
        return;
      }
      try {
        const data = await verifyToken(token);

        setIsValid(data.valid);
      } catch (err) {
        console.error(err);
        setIsValid(false);
      }
    };
    verify();
  }, [token]);

  if (isValid === null) {
    return <div>Loading...</div>;
  }

  return isValid ? children : <Navigate to="/" />;
};

export { ProtectedRoute };
