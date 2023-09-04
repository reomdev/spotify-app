function generateRandomString(length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier) {
  function base64encode(string) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  return base64encode(digest);
}

const loginSpotify = () => {
  const codeVerifier = generateRandomString(128);

  generateCodeChallenge(codeVerifier).then((codeChallenge) => {
    localStorage.setItem("code_verifier", codeVerifier);

    let args = new URLSearchParams({
      response_type: "token",
      client_id: import.meta.env.VITE_CLIENT_ID_SPOTIFY,
      scope: "user-read-private user-read-email",
      redirect_uri: "http://localhost:5173",
      state: generateRandomString(16),
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
    });

    window.location = `${import.meta.env.VITE_URL_AUTHORIZE}?${args}`;
  });
};

export { generateRandomString, generateCodeChallenge, loginSpotify };
