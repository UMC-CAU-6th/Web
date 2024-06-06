import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default LogoutPage;
