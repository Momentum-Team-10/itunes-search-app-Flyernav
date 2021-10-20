const art = document.getElementsByClassName("search")
console.log("search")

document.getElementById("submit").addEventListener("click", (e));

function e() { 
    fetch ('https://proxy-itunes-api.glitch.me/')
    .then(response => response.json())
    .then(data => console.log(data));
}

document.getElementById('submit').onclick = function(e)
{
    location.href = document.getElementById('artist').value;
};