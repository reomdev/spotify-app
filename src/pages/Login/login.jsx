import ArrowExternal from "../../assets/img/arrow_external.svg";
import ArrowRight from "../../assets/icons/arrow_right.svg";
import { loginSpotify } from "../../services/services";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./login.scss";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const access_token = location.hash.split("access_token=")[1];
      localStorage.setItem("access_token", access_token);
      window.hash = "";
      navigate("/home", { replace: true });
    }
  }, [location.hash, navigate]);

  return (
    <>
      <div className="Login-container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img
              src={ArrowExternal}
              className="img-fluid Login--img"
              alt="arrow_external"
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="Login--container-text">
              <h1 className="Login--title">
                Disfruta de la
                <span className="secondary-color"> mejor música</span>
              </h1>
              <br />
              <h6>Accede a tu cuenta para guardar tus albumes favoritos.</h6>
              <br />
              <br />
              <div className="Login--link">
                <h6 onClick={() => loginSpotify()}>Log in con Spotify</h6>
                <img src={ArrowRight} className="img-fluid" alt="arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
