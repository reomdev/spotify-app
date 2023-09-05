import { useCallback, useRef, useState } from "react";
import CardArtist from "../../components/CardArtist/cardArtist";
import { searchQuery } from "../../api";
import "./home.scss";

const RenderArtists = ({ artists }) => {
  return artists.map((artist) => (
    <CardArtist key={artist.id} artist={artist} />
  ));
};

const Home = () => {
  const [artist, setArtist] = useState([]);
  const [show, setShow] = useState(false);
  const inputSearch = useRef("Simon");

  const search = useCallback(async () => {
    const resultSearch = await searchQuery(inputSearch.current.value);
    setArtist(resultSearch.artists);
    setShow(true);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-2">
            <div className="Home">
              <h1 className="Home--title mt-5">
                Busca tus <span className="secondary-color">artistas</span>
              </h1>
              <h6 className="Home--subtitle">
                Encuentra tus artistas favoritos gracias a nuestro buscador y
                guarda tus álbumes favoritos
              </h6>
            </div>
            <div className="Home--search">
              <input
                type="search"
                className="form-control"
                placeholder="Nombre del artista.."
                ref={inputSearch}
              />
              <button
                className="btn"
                onClick={() => {
                  search();
                }}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        {artist.items?.length > 0 ? (
          <div className="Home--list">
            <h6>
              Mostrando {!artist.offset ? 1 : artist.offset} resultados de{" "}
              {artist.total}
            </h6>
            <br />
            <div className="Home--list-artist">
              {show && <RenderArtists artists={artist.items} />}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
