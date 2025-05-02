import React, { useEffect } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  console.log("AdminDashboard component rendering");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth") === "true";
    console.log("Admin authentication check:", isAdmin);
    if (!isAdmin) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>ROI Movies</h2>
          <p>Admin Panel</p>
        </div>
        <nav className="admin-nav">
          <Link
            to="/admin/dashboard"
            className={location.pathname === "/admin/dashboard" ? "active" : ""}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/dashboard/movies"
            className={
              location.pathname === "/admin/dashboard/movies" ? "active" : ""
            }
          >
            Manage Movies
          </Link>
        </nav>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <h1>
            {location.pathname === "/admin/dashboard" && "Dashboard"}
            {location.pathname === "/admin/dashboard/movies" &&
              "Movie Management"}
            {location.pathname.includes("/admin/dashboard/movies/") &&
              "Movie Details"}
          </h1>
        </div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
