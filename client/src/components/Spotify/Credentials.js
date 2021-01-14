const Credentials = () => {


    const client_id = "017a12b1f67741a48d49f1860b9d32fd";
    const client_secret = "0b468a31a00f4ac3993afee311172a6e";
    const redirect_uri = "https%3A%2F%2Flocalhost%3A3000%2Fcallback%2F"
    const encodedClient = "MDE3YTEyYjFmNjc3NDFhNDhkNDlmMTg2MGI5ZDMyZmQ6MGI0NjhhMzFhMDBmNGFjMzk5M2FmZWUzMTExNzJhNmU="
    const getAuthorizationUrl = "https://accounts.spotify.com/authorize?client_id=017a12b1f67741a48d49f1860b9d32fd&scopes=playlist-read-private&response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback%2F"
    const myurl = "https://localhost:3000/callback/";
    // https://levelup.gitconnected.com/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6

    axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret),
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      .then(res => {setToken(res.data.access_token)})

    return {
        ClientId: '4d986b54e81e4b81a5b38ede0df25e07',
        ClientSecret: '48439780be1740d8ab5695657d0aa413'

        

    }
}

export { Credentials };