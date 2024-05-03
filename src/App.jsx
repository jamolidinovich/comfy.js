import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import { useEffect, useState } from "react";
import HeadphonesMain from "./pages/HeadphonesMain";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Shop from "./pages/Shop";
import Shop2 from "./pages/Shop2";
import Wireles from "./pages/Wireles";
// import Speakers2 from "./pages/Speakers2";
import ZxSpeaker from "./pages/ZxSpeaker";
// import Salom from "./pages/Salom";
function App() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  function ProtectedRoute({ children }) {
    const isAuthenticated = token ? true : false;
    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }, [isAuthenticated, navigate]);
    return isAuthenticated ? children : null;
  }
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* <Route path="/salom" element={<Salom></Salom>}></Route> */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphones"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Headphones></Headphones>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/headphonesMain"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <HeadphonesMain></HeadphonesMain>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Speakers"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Speakers></Speakers>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Speakers2"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              {/* <Speakers2></Speakers2> */}
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Speakers2"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <ZxSpeaker></ZxSpeaker>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Earphones"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Earphones></Earphones>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Shop"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Shop></Shop>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Shop2"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Shop2></Shop2>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Wireles"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Wireles></Wireles>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
