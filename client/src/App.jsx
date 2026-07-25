import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { ToastifyContainer } from "./components/toast/ToastifyContainer";
import About from "./components/About";
import { useAuth } from "./context/AuthContext";
import RequireAuth from "./components/auth/RequireAuth";

const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <ToastifyContainer />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />

        <Route element={<RequireAuth {...{ isAuthenticated }} />} path="/">
          <Route element={<Layout />}>
            <Route element={<Home />} index />
            <Route element={<About />} path="about" />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
