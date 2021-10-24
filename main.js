const art = document.getElementsByClassName("search")
console.log("search")
const musicList = document.getElementById("musicList")
let searchText = document.getElementById("artist")
const url = 'https://proxy-itunes-api.glitch.me/search?media=music&entity=song&term='
const form = document.querySelector("#search-form")

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(searchText.value)
    listSongs(searchText)
    form.reset()
})

            function listSongs(data) {
                fetch(url + searchText.value)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                    })
                }
            
            listSongs()