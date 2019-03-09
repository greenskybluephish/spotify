//uses token, gets lists of artist from API

//JS for query data
const getArtists = () => {
const artOrTrack = document.querySelector("#artTrack").value;
const timeRange = document.querySelector("#timeRangeInput").value;
const artistNumber = document.querySelector("#artistNumberInput").value;

  return fetch(`https://api.spotify.com/v1/me/top/${artOrTrack}?time_range=${timeRange}&limit=${artistNumber}`, {
 headers: {
   Accept: "application/json",
   Authorization: `Bearer ${_token}`,
   "Content-Type": "application/json"
 }
}).then(res => res.json()
)}



//get database and new artists

// const getArtists50 = () => {
//    return fetch("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50", {
//   headers: {
//     Accept: "application/json",
//     Authorization: `Bearer ${_token}`,
//     "Content-Type": "application/json"
//   }
// }).then(res => res.json()
// )}

// const getDBA = () => 
//   fetch("http://localhost:8088/items")
//   .then(function(response) {
//     return response.json();
//   })
  
// getDBA()

// get spotify data and post to json server!!
const getArtists50 = () => {
   return fetch("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50", {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${_token}`,
    "Content-Type": "application/json"
  }
}).then(res => res.json()
).then(list => {
  dataList = list.items
   return fetch("https://5caf3a04-8a90-4465-b6d7-a97a071429e4.mock.pstmn.io/spotify", {
     method: "POST",
     body: JSON.stringify(dataList),
     headers: {
       "Content-Type": "application/json"
     }
   })
   .then(response => response.json())
 })
}

getArtists50();