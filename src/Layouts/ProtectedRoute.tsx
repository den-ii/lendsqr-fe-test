import { useNavigate, Outlet, redirect, Navigate } from "react-router";
import { LoginContext } from "../context/LoginContext";
import { useContext, useEffect } from "react";
interface ProtectedRouteProps {
  redirectPath?: string;
}

export const ProtectedRoute = ({
  redirectPath = "/signin",
}: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (!user && user !== "true") {
      navigate(redirectPath);
    }
  });

  return <Outlet />;
};
