import "./header.scss";
import logout from "../../assets/icons/logout.svg";
import spotifyApp from "../../assets/logo/spotify_app.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HeaderLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logoutApp = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <a className="navbar-brand">
          <img src={spotifyApp} className="img-fluid Header--logo" alt="logo" />
          {/* <img
            src={spotifyApp}
            className="img-fluid d-block d-sm-block d-md-none"
            alt="logo"
          /> */}
        </a>
        <div className="Header--options">
          <Link to="/home">
            <h6 className={location.pathname === "/home" ? "active" : ""}>
              Buscar
            </h6>
          </Link>
          <Link to="/albums">
            <h6 className={location.pathname === "/albums" ? "active" : ""}>
              Mis álbumes
            </h6>
          </Link>
          <span>|</span>
          <img
            src={logout}
            onClick={() => {
              logoutApp();
            }}
            className="img-fluid"
            alt="logout"
          />
        </div>
      </div>
    </>
  );
};

const HeaderLogout = () => {
  return (
    <>
      <div className="container">
        <a className="navbar-brand">
          <img src={spotifyApp} className="img-fluid Header--logo" alt="logo" />
        </a>
      </div>
    </>
  );
};

const Header = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        {location.pathname == "/" ? <HeaderLogout /> : <HeaderLogin />}
      </nav>
    </>
  );
};

export default Header;
