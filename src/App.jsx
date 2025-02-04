import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/auth/Login";
import "./App.css";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Categories from "./pages/Categories";
import BrandForm from "./pages/BrandForm";
import ProductForm from "./pages/ProductForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/add-product' element={<ProductForm />} />
          <Route path='/products' element={<Products />} />
          <Route path='/single-product/:id' element={<SingleProduct />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/brand-form' element={<BrandForm />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
