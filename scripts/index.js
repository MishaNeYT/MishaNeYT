const cards = document.querySelectorAll(".cards");
const arrowLeft = document.querySelectorAll(".arrow-left");
const arrowRight = document.querySelectorAll(".arrow-right");

const cardWidth = document.querySelector(".card").offsetWidth + 350;

arrowLeft.forEach(button => {
    button.addEventListener('click', function () {
        cards.forEach(card => {
            card.scrollLeft -= cardWidth;
        });
    });
});

arrowRight.forEach(button => {
    button.addEventListener('click', function () {
        cards.forEach(card => {
            card.scrollLeft += cardWidth;
        });
    });
});
