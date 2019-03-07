fetch('http://localhost:8088/items')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.parse(myJson));
  });

