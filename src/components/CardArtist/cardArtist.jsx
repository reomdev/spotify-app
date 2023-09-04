import { Link } from "react-router-dom";
import "./cardArtist.scss";
// import artist from "../../assets/img/a2.svg";

const CardArtist = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.id}`}>
      <div className="card Card--artist">
        <div className="card-body pb-0">
          <img
            src={artist.images[0].url}
            className="card-img-top"
            alt="artist"
          />
          <h4 className="fw-bold mt-3">{artist.name}</h4>
          <p>Followers: {artist.followers.total}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardArtist;
