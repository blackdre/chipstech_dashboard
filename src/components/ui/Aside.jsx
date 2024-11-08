import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  FaArrowRight,
  FaRectangleList,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { BiSolidUserAccount } from "react-icons/bi";
import { BsCreditCard2BackFill, BsFilePdfFill } from "react-icons/bs";

const Aside = () => {
  const { appName, logo } = useContext(AppContext);

  return (
    <aside className='sidebar sidebar-default sidebar-light sidebar-base navs-rounded-all '>
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
                tabindex='-1'>
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
              <a
                className='nav-link'
                data-bs-toggle='collapse'
                href='#sidebar-special'
                role='button'
                aria-expanded='false'
                aria-controls='sidebar-special'>
                <i className='icon'>
                  <BiSolidUserAccount />
                </i>
                <span className='item-name'>Client Management</span>
                <i className='right-icon'>
                  <FaArrowRight />
                </i>
              </a>
              <ul
                className='sub-nav collapse'
                id='sidebar-special'
                data-bs-parent='#sidebar-menu'>
                <Nav.Item className='nav-item'>
                  <Link className='nav-link ' to={"clients"}>
                    <i className='icon'>
                      <FaUsers />
                    </i>
                    <i className='sidenav-mini-icon'> C </i>
                    <span className='item-name'>Clients</span>
                  </Link>
                </Nav.Item>
                <li className='nav-item'>
                  <Nav.Link
                    className='nav-link '
                    href='../dashboard/special-pages/billing.html'>
                    <i className='icon'>
                      <BsCreditCard2BackFill />
                    </i>
                    <i className='sidenav-mini-icon'> B </i>
                    <span className='item-name'>Billing</span>
                  </Nav.Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link ' to={"/add-new-client"}>
                    <i className='icon'>
                      <FaUserPlus />
                    </i>
                    <i className='sidenav-mini-icon'> B </i>
                    <span className='item-name'>Add New Client</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link ' to={"policies"}>
                <i className='icon'>
                  <BsFilePdfFill />
                </i>
                <span className='item-name'>Policies</span>
              </Link>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                data-bs-toggle='collapse'
                href='#sidebar-auth'
                role='button'
                aria-expanded='false'
                aria-controls='sidebar-user'>
                <i className='icon'>
                  <svg
                    className='icon-20'
                    width='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      opacity='0.4'
                      d='M12.0865 22C11.9627 22 11.8388 21.9716 11.7271 21.9137L8.12599 20.0496C7.10415 19.5201 6.30481 18.9259 5.68063 18.2336C4.31449 16.7195 3.5544 14.776 3.54232 12.7599L3.50004 6.12426C3.495 5.35842 3.98931 4.67103 4.72826 4.41215L11.3405 2.10679C11.7331 1.96656 12.1711 1.9646 12.5707 2.09992L19.2081 4.32684C19.9511 4.57493 20.4535 5.25742 20.4575 6.02228L20.4998 12.6628C20.5129 14.676 19.779 16.6274 18.434 18.1581C17.8168 18.8602 17.0245 19.4632 16.0128 20.0025L12.4439 21.9088C12.3331 21.9686 12.2103 21.999 12.0865 22Z'
                      fill='currentColor'></path>
                    <path
                      d='M11.3194 14.3209C11.1261 14.3219 10.9328 14.2523 10.7838 14.1091L8.86695 12.2656C8.57097 11.9793 8.56795 11.5145 8.86091 11.2262C9.15387 10.9369 9.63207 10.934 9.92906 11.2193L11.3083 12.5451L14.6758 9.22479C14.9698 8.93552 15.448 8.93258 15.744 9.21793C16.041 9.50426 16.044 9.97004 15.751 10.2574L11.8519 14.1022C11.7049 14.2474 11.5127 14.3199 11.3194 14.3209Z'
                      fill='currentColor'></path>
                  </svg>
                </i>
                <span className='item-name'>Authentication</span>
                <i className='right-icon'>
                  <svg
                    className='icon-18'
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </i>
              </a>
              <ul
                className='sub-nav collapse'
                id='sidebar-auth'
                data-bs-parent='#sidebar-menu'>
                <li className='nav-item'>
                  <a className='nav-link' href='../dashboard/auth/sign-in.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <i className='sidenav-mini-icon'> L </i>
                    <span className='item-name'>Login</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='../dashboard/auth/sign-up.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <i className='sidenav-mini-icon'> R </i>
                    <span className='item-name'>Register</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='../dashboard/auth/confirm-mail.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <i className='sidenav-mini-icon'> C </i>
                    <span className='item-name'>Confirm Mail</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='../dashboard/auth/lock-screen.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <i className='sidenav-mini-icon'> L </i>
                    <span className='item-name'>Lock Screen</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='../dashboard/auth/recoverpw.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <i className='sidenav-mini-icon'> R </i>
                    <span className='item-name'>Recover password</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                data-bs-toggle='collapse'
                href='#sidebar-user'
                role='button'
                aria-expanded='false'
                aria-controls='sidebar-user'>
                <i className='icon'>
                  <svg
                    className='icon-20'
                    width='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z'
                      fill='currentColor'></path>
                    <path
                      opacity='0.4'
                      d='M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z'
                      fill='currentColor'></path>
                    <path
                      opacity='0.4'
                      d='M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z'
                      fill='currentColor'></path>
                    <path
                      d='M22.8094 14.817C22.5086 14.1722 21.7824 13.73 20.6783 13.513C20.1572 13.3851 18.747 13.205 17.4352 13.2293C17.4155 13.232 17.4048 13.2455 17.403 13.2545C17.4003 13.2671 17.4057 13.2887 17.4316 13.3022C18.0378 13.6039 20.3811 14.916 20.0865 17.6834C20.074 17.8032 20.1698 17.9068 20.2888 17.8888C20.8655 17.8059 22.3492 17.4853 22.8094 16.4866C23.0637 15.9589 23.0637 15.3456 22.8094 14.817Z'
                      fill='currentColor'></path>
                    <path
                      opacity='0.4'
                      d='M7.04459 4.77973C6.81626 4.7329 6.58077 4.70679 6.33543 4.70679C4.07901 4.70679 2.30701 6.84201 2.9123 9.21947C3.31882 10.8216 4.79355 11.8851 6.43661 11.8419C6.60136 11.8374 6.76343 11.8221 6.92013 11.7951C7.03384 11.7753 7.09115 11.6465 7.02668 11.551C6.3999 10.6234 6.04263 9.50765 6.04263 8.30991C6.04263 7.05904 6.43303 5.89462 7.11085 4.93913C7.13234 4.90941 7.14845 4.86348 7.12696 4.82926C7.10906 4.80135 7.07593 4.78694 7.04459 4.77973Z'
                      fill='currentColor'></path>
                    <path
                      d='M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z'
                      fill='currentColor'></path>
                  </svg>
                </i>
                <span className='item-name'>Users</span>
                <i className='right-icon'>
                  <svg
                    className='icon-18'
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </i>
              </a>
              <ul
                className='sub-nav collapse'
                id='sidebar-user'
                data-bs-parent='#sidebar-menu'>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    href='../dashboard/app/user-profile.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <i className='sidenav-mini-icon'> U </i>
                    <span className='item-name'>User Profile</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    href='../dashboard/app/user-add.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <i className='sidenav-mini-icon'> A </i>
                    <span className='item-name'>Add User</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    href='../dashboard/app/user-list.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <i className='sidenav-mini-icon'> U </i>
                    <span className='item-name'>User List</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                data-bs-toggle='collapse'
                href='#utilities-error'
                role='button'
                aria-expanded='false'
                aria-controls='utilities-error'>
                <i className='icon'>
                  <svg
                    className='icon-20'
                    width='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      opacity='0.4'
                      d='M11.9912 18.6215L5.49945 21.864C5.00921 22.1302 4.39768 21.9525 4.12348 21.4643C4.0434 21.3108 4.00106 21.1402 4 20.9668V13.7087C4 14.4283 4.40573 14.8725 5.47299 15.37L11.9912 18.6215Z'
                      fill='currentColor'></path>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M8.89526 2H15.0695C17.7773 2 19.9735 3.06605 20 5.79337V20.9668C19.9989 21.1374 19.9565 21.3051 19.8765 21.4554C19.7479 21.7007 19.5259 21.8827 19.2615 21.9598C18.997 22.0368 18.7128 22.0023 18.4741 21.8641L11.9912 18.6215L5.47299 15.3701C4.40573 14.8726 4 14.4284 4 13.7088V5.79337C4 3.06605 6.19625 2 8.89526 2ZM8.22492 9.62227H15.7486C16.1822 9.62227 16.5336 9.26828 16.5336 8.83162C16.5336 8.39495 16.1822 8.04096 15.7486 8.04096H8.22492C7.79137 8.04096 7.43991 8.39495 7.43991 8.83162C7.43991 9.26828 7.79137 9.62227 8.22492 9.62227Z'
                      fill='currentColor'></path>
                  </svg>
                </i>
                <span className='item-name'>Utilities</span>
                <i className='right-icon'>
                  <svg
                    className='icon-18'
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </i>
              </a>
              <ul
                className='sub-nav collapse'
                id='utilities-error'
                data-bs-parent='#sidebar-menu'>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    href='../dashboard/errors/error404.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <span className='item-name'>Error 404</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    href='../dashboard/errors/error500.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <span className='item-name'>Error 500</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    href='../dashboard/errors/maintenance.html'>
                    <i className='icon'>
                      <svg
                        className='icon-10'
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        viewBox='0 0 24 24'
                        fill='currentColor'>
                        <g>
                          <circle
                            cx='12'
                            cy='12'
                            r='8'
                            fill='currentColor'></circle>
                        </g>
                      </svg>
                    </i>
                    <span className='item-name'>Maintenance</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link ' href='../dashboard/admin.html'>
                <i className='icon'>
                  <svg
                    className='icon-20'
                    width='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M7.7688 8.71387H16.2312C18.5886 8.71387 20.5 10.5831 20.5 12.8885V17.8254C20.5 20.1308 18.5886 22 16.2312 22H7.7688C5.41136 22 3.5 20.1308 3.5 17.8254V12.8885C3.5 10.5831 5.41136 8.71387 7.7688 8.71387ZM11.9949 17.3295C12.4928 17.3295 12.8891 16.9419 12.8891 16.455V14.2489C12.8891 13.772 12.4928 13.3844 11.9949 13.3844C11.5072 13.3844 11.1109 13.772 11.1109 14.2489V16.455C11.1109 16.9419 11.5072 17.3295 11.9949 17.3295Z'
                      fill='currentColor'></path>
                    <path
                      opacity='0.4'
                      d='M17.523 7.39595V8.86667C17.1673 8.7673 16.7913 8.71761 16.4052 8.71761H15.7447V7.39595C15.7447 5.37868 14.0681 3.73903 12.0053 3.73903C9.94257 3.73903 8.26594 5.36874 8.25578 7.37608V8.71761H7.60545C7.20916 8.71761 6.83319 8.7673 6.47754 8.87661V7.39595C6.4877 4.41476 8.95692 2 11.985 2C15.0537 2 17.523 4.41476 17.523 7.39595Z'
                      fill='currentColor'></path>
                  </svg>
                </i>
                <span className='item-name'>Admin</span>
              </a>
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
