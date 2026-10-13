const img = document.getElementById("bg-image");

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

let index = 0;

img.src = bilder[0];


setInterval(() => {
    index = (index + 1) % bilder.length;

    img.src = bilder[index];
}, 5000);