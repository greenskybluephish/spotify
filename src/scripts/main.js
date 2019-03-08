const mainCont = document.querySelector('#container')

//goood stuff
const createArtistList = () =>
   getArtists().then(data => {
      const dataList = data.items;
      const list = document.createElement('ol');
      list.classList.add('original')
      dataList.forEach(index => {
         let item = document.createElement('li');
         item.appendChild(document.createTextNode(index.name));
         list.appendChild(item);
         mainCont.appendChild(list);
         return mainCont
      })
});
// const array1 = []
// const newData = () =>
//    getArtists50().then(data => {
//       const dataList = data.items;
//       dataList.forEach(index => {
//          array1.push(index.name);
//       })});


// const array2 = []
// const oldData = () => 
//    getDBA().then(data => {
//     data.forEach(element => {
//       array2.push(element.name)
//     })});

// oldData();
// newData();
 


// array1.forEach(checker(array1))

//good
const button = document.querySelector("#button1")

function handleClick(event) {
   createArtistList();
}

button.addEventListener('click', handleClick)
//good