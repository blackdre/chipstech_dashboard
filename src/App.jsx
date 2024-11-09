import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/auth/Login";
import "./App.css";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
