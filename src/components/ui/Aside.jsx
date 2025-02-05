import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FaArrowRight, FaRectangleList } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { BsBadgeTmFill, BsCartPlusFill, BsTable } from "react-icons/bs";

const Aside = () => {
  const { appName, logo } = useContext(AppContext);

  return (
    <aside className='sidebar sidebar-transparent sidebar-light sidebar-base navs-rounded-all '>
      <div className='sidebar-header d-flex align-items-center justify-content-start'>
        <Link to={"/dashboard"} className='navbar-brand'>
          {/* <!--Logo start--> */}
          <div className='logo-main'>
            <div className='logo-normal'>
              <img src={logo} alt='logo' className='icon-40' />
            </div>
            <div className='logo-mini'>
              <img src={logo} alt='logo' className='icon-40' />
            </div>
          </div>
          {/* <!--logo End--> */}

          <h4 className='logo-title'>{appName}</h4>
        </Link>
        <div
          className='sidebar-toggle'
          data-toggle='sidebar'
          data-active='true'>
          <i className='icon p-2'>
            <FaArrowRight />
          </i>
        </div>
      </div>
      <div className='sidebar-body pt-0 data-scrollbar'>
        <div className='sidebar-list'>
          {/* <!-- Sidebar Menu Start --> */}
          <ul className='navbar-nav iq-main-menu' id='sidebar-menu'>
            <li className='nav-item static-item'>
              <Link
                className='nav-link static-item disabled'
                href='#'
                tabIndex='-1'>
                <span className='default-icon'>Home</span>
                <span className='mini-icon'>-</span>
              </Link>
            </li>
            <Nav.Item className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to={"/dashboard"}>
                <i className='icon'>
                  <FaRectangleList />
                </i>
                <span className='item-name'>Dashboard</span>
              </Link>
            </Nav.Item>
            <li>
              <hr className='hr-horizontal' />
            </li>
            <Nav.Item className='nav-item static-item'>
              <Nav.Link
                className='nav-link static-item disabled'
                to={"#"}
                tabIndex='-1'>
                <span className='default-icon'>Pages</span>
                <span className='mini-icon'>-</span>
              </Nav.Link>
            </Nav.Item>
            <li className='nav-item'>
              <Link className='nav-link ' to={"products"}>
                <i className='icon'>
                  <BsCartPlusFill />
                </i>
                <span className='item-name'>Products</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link ' to={"categories"}>
                <i className='icon'>
                  <BsTable />
                </i>
                <span className='item-name'>Categories</span>
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link ' to={"brands"}>
                <i className='icon'>
                  <BsBadgeTmFill />
                </i>
                <span className='item-name'>Brands</span>
              </Link>
            </li>

            <li>
              <hr className='hr-horizontal' />
            </li>
          </ul>
          {/* <!-- Sidebar Menu End --> */}
        </div>
      </div>
      <div className='sidebar-footer'></div>
    </aside>
  );
};
export default Aside;
