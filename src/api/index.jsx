const searchQuery = async (query) => {
  try {
    const params = new URLSearchParams({
      q: query,
      type: "artist",
      limit: 4,
      offset: 0,
      include_external: "audio",
    });

    const url = `${import.meta.env.VITE_API_SPOTIFY}/search?${params}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    if (!response.ok) {
      throw new Error(`An error as ocurred ${response.message}`);
    }

    return await response.json();
  } catch (error) {
    if (error.toString().search("token expired") !== -1) {
      window.location.href = "/";
    }
  }
};

const getArtistById = async (id) => {
  try {
    const url = `${import.meta.env.VITE_API_SPOTIFY}/artists/${id}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`An error as ocurred : ${data.error.message}`);
    }

    return data;
  } catch (error) {
    if (error.toString().search("token expired") !== -1) {
      window.location.href = "/";
    }
  }
};

const getAlbumsOfArtist = async (id) => {
  try {
    const url = `${import.meta.env.VITE_API_SPOTIFY}/artists/${id}/albums`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`An error as ocurred : ${data.error.message}`);
    }

    return data;
  } catch (error) {
    if (error.toString().search("token expired") !== -1) {
      window.location.href = "/";
    }
  }
};

export { searchQuery, getArtistById, getAlbumsOfArtist };
