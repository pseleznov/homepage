function flip(flipElement) {
    flipElement.style.transform = 'rotateY(180deg)';
}

function flipBack(flipElement) {
    flipElement.style.transform = '';
}

const flipElement = document.getElementById('flip');
const spiderIconElement = document.getElementById('spider-button');
const spiderImageElement = document.getElementById('spider');

spiderIconElement.addEventListener('click', () => flip(flipElement));
spiderImageElement.addEventListener('click', () => flipBack(flipElement));


