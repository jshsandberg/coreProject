useEffect(() => {
   
    getHash();
    getUserId();

    }, [])

useEffect(() => {

    axios({
        url: "https://api.spotify.com/v1/me/top/artists", 
        method: "get",
        headers: {
          'Authorization': "Bearer " + token
        }
      })
      .then(res => console.log(res))

}, [token]);

const getHash = async () => {

    const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            }
        return initial;
    }, {});
    window.location.hash = "";
    setToken(hash.access_token)
}

const getUserId = async () => {

    let _token = localStorage.getItem("auth-token");
        if (_token === null) {
            setModalShow(true);
        } else {
            const decoded = jwt.verify(_token, "secret");  
            try {
              const newUser = await API.getUserbyId(decoded.id);
              setUser(newUser.data)
            } catch(err) {
              console.log(err)
              }
        }
}
