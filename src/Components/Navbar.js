import '../App.css';
import logo from '../Images/logo.jpg';

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light  fixed-top">
      <div className="container">
        <button type="button" className="navbar-brand">
          <img src={logo} height="40px" alt="logo" />
        </button>

        <div id="navbarText">
          <ul className="navbar-nav me-auto mb-2 ">
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                Home
              </span>
            </li>
            <li className="nav-item">
              <ModalLink />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const ModalLink = () => {
  return (
    <span
      className="nav-link aboutLink"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      About
    </span>
  );
};

export default Navbar;
