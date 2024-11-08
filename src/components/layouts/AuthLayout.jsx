import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className='wrapper'>
      <section className='login-content'>
        <Outlet />
      </section>
      <Toaster position='top-right' />
    </div>
  );
};
export default AuthLayout;
