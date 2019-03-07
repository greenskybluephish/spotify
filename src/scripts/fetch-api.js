// const token = 'BQAja6iituYe-dpFrBqPxlcUhcZtHGeuw-W69YWHm3hWNbpFR-im0ecNxvBtAVML76WclJsjnA6-VFqjpETuZOLTM6szzwOoKYhFydY9tV3ouwNDftv_nPYZLrZuPA-ssT8cVZ6CLK29AzS7pRbDa8FIWRhGfONgK0F-UBLo2tAZlw';
const getArtists = () => {
   return fetch("https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50", {
  headers: {
    Accept: "application/json",
    Authorization: "Bearer BQCyLDr1R5QmFWbNw_NACEaElD-ZcVsN6qErdqERRvcnvJraf-QkqLjgCadyoKxtkfMUPwbuUoy9jIJXaNFgyc2ZqxFYLpebwsJyIioiLgsA6Dp0JGl-s0YZjRqTbJ9EsOXQnr8IXBplFjqT0e0xrRY3-pDhV2cUtKv_tbSXbMhdcNaZ52EOkWNmA7U2qBi_L2NonBU9v9TkvThqD1CDoZFYXjyZC_ehcZtzL2a8",
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