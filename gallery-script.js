const img = document.getElementById("gallery-img");
const desc = document.getElementById("gallery-desc");
const bLeft = document.getElementById("go-left");
const bRight = document.getElementById("go-right");

const bilder = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
];

const descriptions = [
    "Das ist die Kurzbeschreibung zu Bild 1", 
    "Das ist die Kurzbeschreibung zu Bild 2", 
    "Das ist die Kurzbeschreibung zu Bild 3", 
    "Das ist die Kurzbeschreibung zu Bild 4", 
    "Das ist die Kurzbeschreibung zu Bild 5", 
    "Das ist die Kurzbeschreibung zu Bild 6", 
    "Das ist die Kurzbeschreibung zu Bild 7", 
    "Das ist die Kurzbeschreibung zu Bild 8", 
    "Das ist die Kurzbeschreibung zu Bild 9", 
    "Das ist die Kurzbeschreibung zu Bild 10", 
    "Das ist die Kurzbeschreibung zu Bild 11", 
    "Das ist die Kurzbeschreibung zu Bild 12"
];

let index = 0;
update();


bLeft.addEventListener("click", function() {
    index = (index - 1 + bilder.length) % bilder.length;
    update();
});


bRight.addEventListener("click", function() {
    index = (index +1) % bilder.length;
    update();
});


function update() {
    img.src = bilder[index];
    desc.textContent = descriptions[index];
}