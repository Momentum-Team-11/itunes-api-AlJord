const url = 'https://itunes.apple.com/search?term='

const searchInput = document.querySelector('#input')

searchInput.addEventListener('submit', function (event) {
    event.preventDefault()
    

})

fetch(url)
.then(function(response) {
    console.log(response)
    return response.json()

})
.then(function(data) {
    
})





