getAddresses().then(artistData => {
  let spot = []
  for (let i = 0; i < artistData.length; i++) {
    let dog = newD[i].name
    spot.push(dog)
  }
  const list = document.createElement('ol');
  for (let i = 0; i < spot.length; i++) {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(spot[i]));
    list.appendChild(item);
  }
  document.querySelector('#container').appendChild(list);

}), (function (err) {
  console.error(err);
});
}

getArtist()

// let button = document.getElementById("button1")


// function handleClick(event) {
//   getArtist();
// }   


// button.addEventListener('click', handleClick)