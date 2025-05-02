import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import Movie from "./Pages/Movie";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminHome from "./components/AdminDashboard/AdminHome";
import MovieManager from "./components/AdminDashboard/MovieManager";

//9e286438 OMDB api key
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/movies/:id" element={<Movie />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="movies" element={<MovieManager />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
