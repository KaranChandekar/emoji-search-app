import '../App.css';
import logo from '../Images/logo.jpg';

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
        <div className="container">
          <button className="navbar-brand" href="#">
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
                <span
                  className="nav-link aboutLink"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  About
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal div */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header ">
              <h5 className="modal-title " id="exampleModalLabel">
                Emoji Search App
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              In this emoji search app, you can search any emoji which is
              available. There is an another feature in this app where you can
              simply copy an emoji of your choice to your clipboard.
              <h4 className="pt-3">Developed with ❤️ by Karan Chandekar.</h4>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
