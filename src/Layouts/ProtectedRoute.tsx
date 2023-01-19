import { useNavigate, Outlet, redirect, Navigate } from "react-router";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
interface ProtectedRouteProps {
  redirectPath?: string;
}

export const ProtectedRoute = ({
  redirectPath = "/signin",
}: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  if (!user) {
    navigate(redirectPath);
  }

  return <Outlet />;
};
