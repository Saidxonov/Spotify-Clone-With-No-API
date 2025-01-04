const getToken = async () => {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          import.meta.env.VITE_CLIENT_ID +
            ":" +
            import.meta.env.VITE_CLIENT_SECRET
        )}`,
      },
      body: "grant_type=client_credentials",
    });

    const auth = await response.json();
    localStorage.setItem("token", `${auth.token_type} ${auth.access_token}`);
  } catch (err) {
    console.log(err);
  }
};

export { getToken };
