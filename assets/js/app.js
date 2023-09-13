let body = document.querySelector("body")
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let bgcolors = 0xFFFFFF;
let bgred = document.getElementsByClassName("bgred");

startbtn.addEventListener("click", function () {
    startbtn.classList.add("disable");
    startbtn.classList.remove("cursor");
    stopbtn.classList.remove("disable");
    stopbtn.classList.add("cursor");
})

stopbtn.addEventListener("click", function () {
    startbtn.classList.remove("disable");
    startbtn.classList.add("cursor");
    stopbtn.classList.add("disable");
    body.classList.remove("bgred");
})

startbtn.addEventListener("click", function () {
    body.classList.add("bgred");
})

function color() {
    let randomnumber = Math.floor(Math.random() * bgcolors).toString(16);
    let randomcolor = "#" + randomnumber.padStart(6, 0).toUpperCase();
    return randomcolor;
}

let interval;

startbtn.addEventListener("click", function startcolor() {
    if (!interval) {
        interval = setInterval(function () { document.body.style.background = color(); }, 1000);
    }
});
stopbtn.addEventListener("click", function stopcolor() {
    clearInterval(interval);
    interval = false;
});


