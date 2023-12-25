const bar = document.getElementById('bar');

const nav = document.getElementById('navbar');
const back = document.getElementById("back");

bar.addEventListener('click', () => {
    console.log("Clicked!");
    nav.style.right = "0";
    back.style.display = "block";
})

back.addEventListener('click', () => {
    console.log("Back!");
    nav.style.right = "-300px";
    back.style.display = "none";
})



