const url = 'https://itunes.apple.com/search?term=jack+johnson&limit=10.'

const searchButt = document.querySelector('#searchButt')
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






})



})






