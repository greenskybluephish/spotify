const getArtists = () => {
   return fetch("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50", {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${_token}`,
    "Content-Type": "application/json"
  }
}).then(res => res.json()
).then(list => {
   return fetch("http://localhost:8088/items", {
     method: "POST",
     body: JSON.stringify(list),
     headers: {
       "Content-Type": "application/json"
     }
   })
   .then(response => response.json())
 })
}

getArtists();