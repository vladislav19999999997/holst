let phrases = [
    { text: 'Love is', image: '/img/3.png' },
    { text: 'Love is', image: '/img/2.png' },
    { text: 'Dream art', image: '/img/1.png' },
    { text: 'Pop art', image: '/img/4.png' }
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.header__item-navigation-right');
let phrase = document.querySelector('.header__item-navigation-text');
let advice = document.querySelector('.advice');
let image = document.querySelector('.header__item-image img');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text)
    smoothly(image, 'src', randomElement.image)

    // if (randomElement.text.length > 40) {
    //   advice.style.fontSize = '33px';
    // } else {
    //   advice.style.fontSize = '42px';
    // }
});
for (i = 0; i <= 2; i = i +1){
    smoothly(phrase, 'textContent', phrases[i].text); 
    smoothly(image, 'src', phrases[i].image); 
}