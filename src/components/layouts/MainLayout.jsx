import { Container, Row } from "react-bootstrap";
import Aside from "../ui/Aside";
import Header from "../ui/Header";
import Navbar from "../ui/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider";

const MainLayout = () => {
  const { auth } = useAuth();

  return auth ? (
    <>
      <Aside />
      <main className='main-content'>
        <div className='position-relative iq-banner'>
          <Navbar />
          <Header />
        </div>
        <Container className='content-inner mt-n5 py-0' fluid>
          <Row>
            <Outlet />
          </Row>
        </Container>
        <Toaster position='top-right' />
      </main>
    </>
  ) : (
    <Navigate to='/login' />
  );
};
export default MainLayout;
