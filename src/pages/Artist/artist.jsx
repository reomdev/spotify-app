import check from "../../assets/icons/check.svg";
import "./artist.scss";
import CardAlbum from "../../components/CardAlbum/cardAlbum";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArtistById, getAlbumsOfArtist } from "../../api";
import { useSelector } from "react-redux";

const Artist = () => {
  const params = useParams();

  const albumsFav = useSelector((state) => state.favorite.value);

  const [artist, setArtist] = useState();
  const [albums, setAlbums] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    getArtist(params.id);
    getAlbums(params.id);
  });

  const getArtist = async (id) => {
    const artist = await getArtistById(id);
    setArtist(artist);
  };

  const getAlbums = async (id) => {
    const albums = await getAlbumsOfArtist(id);
    albums.items = albums.items.map((album) => {
      return albumsFav.find((value) => value.id === album.id)
        ? { ...album, favorite: true }
        : { ...album, favorite: false };
    });
    setAlbums(albums);
    setShow(true);
  };

  const RenderAlbums = (albums) => {
    return (
      <div className="Artist--albums">
        {albums.albums.items.map((album) => (
          <CardAlbum key={album.id} album={album}></CardAlbum>
        ))}
      </div>
    );
  };

  return (
    <>
      {artist ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="Artist">
                <img
                  src={artist.images[0].url}
                  className="img-fluid Artist--img"
                  alt="artist"
                />
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="Artist--check">
                <img src={check} className="img-fluid" alt="check" />
                <h6>Artista verificado</h6>
              </div>
              <h1 className="fw-bold mt-3 Artist--name">{artist.name}</h1>
              <br />
              <h6 className="fw-semibold">
                Followers: {artist.followers.total}
              </h6>
              <h6 className="fw-semibold">
                Oyentes mensuales: {Math.floor(artist.followers.total / 80)}
              </h6>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <h6 className="Artist--title-albums">
                Guarda tus álbumes favoritos de {artist.name}
              </h6>
            </div>
          </div>
          {show && <RenderAlbums albums={albums} />}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Artist;
