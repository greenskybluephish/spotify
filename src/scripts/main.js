const mainCont = document.querySelector('#container')

//goood stuff
const createArtistList = () =>
   getArtists().then(data => {
      const dataList = data.items;
      const list = document.createElement('ol');
      list.classList.add('original')
      dataList.forEach(index => {
         let item = document.createElement('figure');
         let caption = document.createElement('figcaption');
         caption.appendChild(document.createTextNode(index.name));
         const imKaya = new Image();
         imKaya.src = (index.images[2].url);
         item.appendChild(caption);
         item.appendChild(imKaya);
         list.appendChild(item);
         mainCont.appendChild(list);
         return mainCont
      })
});










//good
const button = document.querySelector("#button1")

function handleClick(event) {
   createArtistList();
}

button.addEventListener('click', handleClick)
//good
