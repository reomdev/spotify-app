import { useDispatch } from "react-redux";
import reproductor from "../../assets/icons/reproductor.svg";
import "./cardAlbum.scss";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/reducers/favoriteSlice";

const ButtonFavorite = ({ dispatch, album }) => {
  const addFav = () => {
    dispatch(addFavorite(album));
  };

  return (
    <button className="btn btn-primary" onClick={addFav}>
      + Add Album
    </button>
  );
};

const ButtonDeleteFavorite = ({ dispatch, album }) => {
  const rmvFavorite = () => {
    dispatch(removeFavorite(album));
  };

  return (
    <button className="btn btn-danger" onClick={rmvFavorite}>
      - Remove album
    </button>
  );
};

const CardAlbum = ({ album }) => {
  const dispatch = useDispatch();

  return (
    <div className="card Card--album">
      <div className="card-body">
        <img src={album.images[0].url} className="card-img-top" alt="album" />
        <h3 className="fw-bold mt-3">{album.name}</h3>
        <p>Publicado : {album.release_date}</p>
        <ButtonFavorite dispatch={dispatch} album={album} />
        <ButtonDeleteFavorite dispatch={dispatch} album={album} />
      </div>
    </div>
  );
};

export default CardAlbum;
