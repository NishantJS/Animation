const ham = document.getElementById("ham");
const nav = document.getElementById("nav");
const litem = document.getElementById("list-item");
const move = document.getElementById("move");
const card = document.getElementsByClassName(".card");
const clip = document.getElementsByClassName("clip-btn");
const cardBody = document.getElementsByClassName("card-body");
const featCard = document.getElementById("card");
const screenSize = window.innerHeight;

const typeTxt = ["Effectively", "Efficiently", "Hassle Free"];
const typeDelay = 200;
const eraseDelay = 100;
const newTxtDelay = 2000;
let txtArrayIndex = 0;
let chrIndex = 0;
const typeTxtSpan = document.getElementById("type-txt");

window.addEventListener('load', type);

ham.addEventListener("click", () => {
    ham.classList.toggle("close");
    litem.classList.toggle('block');
});

var colors = ['#D32F2F', '#FF4081', '#FF5252', '#9C27B0', '#673AB7', '#3F51B5', '#536DFE', '#448AFF', '#03A9F4'];


window.addEventListener('scroll', () => {
    let catPos = cardBody[0].getBoundingClientRect().top;
    let featPos = featCard.getBoundingClientRect().top;

    if (featPos + 200 < screenSize) {
        featCard.classList.add('show');
    }
    for (let i = 0; i < cardBody.length; i++) {
        if (catPos + 200 < screenSize) {
            cardBody[i].classList.add('show');
            clip[i].style.background = colors[i] + "CC";
        }
    }

});


(() => {
    const heart = String.fromCodePoint(0x2764);
    const str = `Designed and Developed with ${heart} by Nishant`;
    console.log(`%c Event%cR! `, 'color: #536DFE; background-color: #000; font-size: 20px;', 'color: #FF5252; background-color: #000; font-size: 20px;')
    console.log(`%c ${str} `, 'color: #FF5252; background-color: #000; font-size: 20px; font-family: serif;');
})();

function type() {
    if (chrIndex < typeTxt[txtArrayIndex].length) {
        typeTxtSpan.textContent += typeTxt[txtArrayIndex].charAt(chrIndex);
        chrIndex++;
        setTimeout(type, typeDelay);
    } else {
        setTimeout(erase, newTxtDelay);
    }
}

function erase() {
    if (chrIndex > 0) {
        typeTxtSpan.textContent = typeTxt[txtArrayIndex].substring(0, chrIndex - 1);
        chrIndex--;
        setTimeout(erase, eraseDelay);
    } else {
        txtArrayIndex++;
        if (txtArrayIndex >= typeTxt.length) {
            txtArrayIndex = 0;
        }
        setTimeout(type, typeDelay + 1000);
    }
}