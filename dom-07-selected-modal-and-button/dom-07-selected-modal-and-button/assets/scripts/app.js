const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const backDrop = document.getElementById('backdrop')

const cancleButton = addMovieModal.querySelector('.btn--passive')
const addButton = addMovieModal.querySelector('.btn--success')
const userInputs = document.getElementsByTagName('input')

const movies=[]
const toggleMovieCard = () => {
    addMovieModal.classList.toggle('visible')
    toogleBackdrop()
}

const toogleBackdrop = () => {
    backDrop.classList.toggle('visible')
}
const cancleActveModel = () => {
    toggleMovieCard()
    clearUserInputs()
}

const clearUserInputs = () => {
    for (let userInput of userInputs) {
        userInput.value = ''
    }
}
const addMovieButton = () => {
let titleValue = userInputs[0].value
let imageValue = userInputs[1].value
let ratingValue = userInputs[2].value

if (titleValue.trim===''|| imageValue.trim() ===''||ratingValue.trim() === ''|| (rating <1 || rating >5)) {
    alert("Enter all values")
    return
}
const movieItem = {
title: titleValue,
image: imageValue,
rating: ratingValue
};
movies.push(movieItem)
console.log(movies)
clearUserInputs()
toggleMovieCard()
}
 startAddMovieButton.addEventListener('click', toggleMovieCard)
 backDrop.addEventListener('click', toggleMovieCard)
 cancleButton.addEventListener('click', cancleActveModel)
 addButton.addEventListener('click', addMovieButton)