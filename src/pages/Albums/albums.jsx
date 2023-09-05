import { useSelector } from "react-redux";
import CardAlbum from "../../components/CardAlbum/cardAlbum";
import "./albums.scss";

const Albums = () => {
  const albums = useSelector((state) => state.favorite.value);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-2">
            <div className="Albums">
              <h1 className="Albums--title mt-5">
                Mis albumes <span className="secondary-color">guardados</span>
              </h1>
              <h6 className="Albums--subtitle">
                Disfruta de tu música a un solo click y descubre que discos has
                guardado dentro de “mis álbumes”
              </h6>
            </div>
          </div>
          <div className="col-md-12">
            <div className="Albums--list-albums">
              {albums.map((album) => (
                <CardAlbum key={album.id} album={album} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Albums;
