var ham = document.getElementById("ham");
var nav = document.getElementById("nav");
var litem = document.getElementById("list-item");
var move = document.getElementById("move");
var card = document.getElementsByClassName(".card");
var clip = document.getElementsByClassName("clip-btn");
var cardBody = document.getElementsByClassName("card-body");
var featCard = document.getElementById("card");
var screenSize = window.innerHeight;
var typeTxt = ["Effectively", "Efficiently", "Hassle Free"];
var typeDelay = 200;
var eraseDelay = 100;
var newTxtDelay = 2000;
var txtArrayIndex = 0;
var chrIndex = 0;
var typeTxtSpan = document.getElementById("type-txt");
window.addEventListener('load', type);
ham.addEventListener("click", function () {
    ham.classList.toggle("close");
    litem.classList.toggle('block');
});
var colors = ['#D32F2F', '#FF4081', '#FF5252', '#9C27B0', '#673AB7', '#3F51B5', '#536DFE', '#448AFF', '#03A9F4'];
window.addEventListener('scroll', function () {
    var catPos = cardBody[0].getBoundingClientRect().top;
    var featPos = featCard.getBoundingClientRect().top;
    if (featPos + 200 < screenSize) {
        featCard.classList.add('show');
    }
    for (var i = 0; i < cardBody.length; i++) {
        if (catPos + 200 < screenSize) {
            cardBody[i].classList.add('show');
            clip[i].style.background = colors[i] + "CC";
        }
    }
});
(function () {
    var heart = String.fromCodePoint(0x2764);
    var str = "Designed and Developed with " + heart + " by Nishant";
    console.log("%c Event%cR! ", 'color: #536DFE; background-color: #000; font-size: 20px;', 'color: #FF5252; background-color: #000; font-size: 20px;');
    console.log("%c " + str + " ", 'color: #FF5252; background-color: #000; font-size: 20px; font-family: serif;');
})();
function type() {
    if (chrIndex < typeTxt[txtArrayIndex].length) {
        typeTxtSpan.textContent += typeTxt[txtArrayIndex].charAt(chrIndex);
        chrIndex++;
        setTimeout(type, typeDelay);
    }
    else {
        setTimeout(erase, newTxtDelay);
    }
}
function erase() {
    if (chrIndex > 0) {
        typeTxtSpan.textContent = typeTxt[txtArrayIndex].substring(0, chrIndex - 1);
        chrIndex--;
        setTimeout(erase, eraseDelay);
    }
    else {
        txtArrayIndex++;
        if (txtArrayIndex >= typeTxt.length) {
            txtArrayIndex = 0;
        }
        setTimeout(type, typeDelay + 1000);
    }
}
