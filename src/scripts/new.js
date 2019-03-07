const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token = hash.access_token;

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = '80c3cf7bdf244f508df3080b2acd8696';
const redirectUri = 'http://localhost:8080/';
const scopes = [
  'user-top-read'
];

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
}

var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(_token);


const getArtist = function() {

const timeFrame = document.querySelector('#input1').value;
const artistNum = document.querySelector('#input2').value;

spotifyApi.getMyTopArtists({time_range: timeFrame, limit: artistNum})
.then(function (data) {
  return data.items
}).then(dataItems => {
  console.log(dataItems)
})}













//good code.
// .then(function (newD) {
//   let spot = []
//   for (let i = 0; i < newD.length; i++) {
//     let dog = newD[i].name
//     spot.push(dog)
//   }
//   const list = document.createElement('ol');
//   for (let i = 0; i < spot.length; i++) {
//     let item = document.createElement('li');
//     item.appendChild(document.createTextNode(spot[i]));
//     list.appendChild(item);
//   }
//   document.querySelector('#container').appendChild(list);

// }), (function (err) {
//   console.error(err);
// });
// }


let button = document.getElementById("button1")


function handleClick(event) {
  getArtist();
}   


button.addEventListener('click', handleClick)

