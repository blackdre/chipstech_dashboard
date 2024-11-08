import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { AppContext } from "../../context/AppContext";
import SideImage from "../../components/auth/SideImage";
import Input from "../../components/form/Input";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, user } = useAuth();
  const { appName, logo } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        toast.error("Please fill in the fields"); // Show error toast
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) toast.error(error.message); // Show error toast if login fails
      if (user && session) navigate("/dashboard"); // Navigate to dashboard if login is successful
    } catch (error) {
      toast.error("Email or Password Incorrect"); // Show error toast on catch
    }
    setLoading(false);
  };

  return (
    <Row className='m-0 align-items-center bg-white vh-100'>
      <Col md={6}>
        <Row className='justify-content-center'>
          <Col md={10}>
            <Card className='card-transparent shadow-none d-flex justify-content-center mb-0 auth-card border-0 '>
              <div className='card-body z-3 px-md-0 px-lg-4'>
                <Link
                  to='/'
                  className='navbar-brand d-flex align-items-center mb-3'>
                  {/* <!--Logo start--> */}
                  <div className='logo-main'>
                    <div className='logo-normal'>
                      <img className='icon-40' src={logo} alt='logo' />
                    </div>
                    <div className='logo-mini'>
                      <img className='icon-40' src={logo} alt='logo' />
                    </div>
                  </div>
                  {/* <!--logo End--> */}

                  <h4 className='logo-title ms-3'>{appName}</h4>
                </Link>
                <h2 className='mb-2 text-center'>Sign In</h2>
                <p className='text-center'>Login to stay connected.</p>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Input
                      label='Email'
                      type='email'
                      placeholder='Email'
                      ref={emailRef}
                    />
                    <Input
                      label='Password'
                      type='password'
                      placeholder='Password'
                      ref={passwordRef}
                    />
                    <Col lg={12} className='d-flex justify-content-between'>
                      <div className='form-check mb-3'>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='customCheck1'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='customCheck1'>
                          Remember Me
                        </label>
                      </div>
                      <Link to='reset-password'>Forgot Password?</Link>
                    </Col>
                  </Row>
                  <div className='d-flex justify-content-center'>
                    <Button type='submit' className='btn btn-primary'>
                      Sign In
                    </Button>
                  </div>
                  <p className='mt-3 text-center'>
                    Don’t have an account?{" "}
                    <Link to='/register' className='text-underline'>
                      Click here to sign up.
                    </Link>
                  </p>
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
        <div className='sign-bg'>
          <svg
            width='280'
            height='230'
            viewBox='0 0 431 398'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g opacity='0.05'>
              <rect
                x='-157.085'
                y='193.773'
                width='543'
                height='77.5714'
                rx='38.7857'
                transform='rotate(-45 -157.085 193.773)'
                fill='#3B8AFF'
              />
              <rect
                x='7.46875'
                y='358.327'
                width='543'
                height='77.5714'
                rx='38.7857'
                transform='rotate(-45 7.46875 358.327)'
                fill='#3B8AFF'
              />
              <rect
                x='61.9355'
                y='138.545'
                width='310.286'
                height='77.5714'
                rx='38.7857'
                transform='rotate(45 61.9355 138.545)'
                fill='#3B8AFF'
              />
              <rect
                x='62.3154'
                y='-190.173'
                width='543'
                height='77.5714'
                rx='38.7857'
                transform='rotate(45 62.3154 -190.173)'
                fill='#3B8AFF'
              />
            </g>
          </svg>
        </div>
      </Col>
      <SideImage />
    </Row>
  );
};
export default Login;
