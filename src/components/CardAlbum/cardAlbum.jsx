import { useDispatch } from "react-redux";
// import reproductor from "../../assets/icons/reproductor.svg";
import "./cardAlbum.scss";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/reducers/favoriteSlice";
import { useState } from "react";

const ButtonFavorite = ({ dispatch, album, setFavorite }) => {
  const addFav = () => {
    album.favorite = true;
    setFavorite(true);
    dispatch(addFavorite(album));
  };

  return (
    <button className="btn btn-primary" onClick={addFav}>
      + Add Album
    </button>
  );
};

const ButtonDeleteFavorite = ({ dispatch, album, setFavorite }) => {
  const rmvFavorite = () => {
    // console.log(album.favorite);
    // album.favorite = !album.favorite;
    setFavorite(false);
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
  const [favorite, setFavorite] = useState(album.favorite);

  return (
    <div className="card Card--album">
      <div className="card-body">
        <img src={album.images[0].url} className="card-img-top" alt="album" />
        <h3 className="fw-bold mt-3">
          {album.name} - {album.favorite}
        </h3>
        <p>Publicado : {album.release_date}</p>
        {/* {!album.favorite ? (
          <ButtonFavorite dispatch={dispatch} album={album} />
        ) : (
          <ButtonDeleteFavorite dispatch={dispatch} album={album} />
        )} */}
        {!favorite && (
          <ButtonFavorite
            dispatch={dispatch}
            album={album}
            setFavorite={setFavorite}
          />
        )}
        {favorite && (
          <ButtonDeleteFavorite
            dispatch={dispatch}
            album={album}
            setFavorite={setFavorite}
          />
        )}
      </div>
    </div>
  );
};

export default CardAlbum;
