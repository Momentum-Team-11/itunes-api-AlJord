const url = 'https://proxy-itunes-api.glitch.me/search?term=Paul+McCartney&limit=10.'


const searchInput = document.querySelector('#input')
console.log(searchInput)
const formAll = document.querySelector('#form')



formAll.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('submit')

    
    

    fetch(url)
.then(function(response) {
    console.log(response)
    return response.json()

})
.then(function(data) {
    console.log(data)



document.querySelector('.musicCard').innerHTML +=`<img src=${data.results[0].artworkUrl100}/>`


document.querySelector('#audio').innerHTML +=`<audio controls src='${data.results[0].previewUrl}'/>`




// for (let i = 0; i < card.length; i++) {
//     document.querySelector('#musicCard').innerHTML 
// }





})



})






