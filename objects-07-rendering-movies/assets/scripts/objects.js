const addBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')
const movies =[]


const renderMovie = (filter = '') => {
  const movieList = document.getElementById('movie-list')
  if (movies.length ==0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
movieList.innerHTML = ''
console.log(movies)
const filteredMovie = !filter ? movies : movies.filter(movie=> movie.info.title.includes(filter));
console.log("filteredMovie ", filteredMovie)
filteredMovie.forEach((movie)=> {
  const movieLi = document.createElement('li');
  let text = movie.info.title + "_";
  for (key in movie.info) {
      if(key != 'title') {
          text = text + `${key} : ${movie.info[key]}`
      }
  }
  movieLi.textContent = text;
  movieList.append(movieLi);

});
}
const addMovieHandler = () => {
const title = document.getElementById('title').value;
const extraName = document.getElementById('extra-name').value
const extraValue = document.getElementById('extra-value').value

if (title.trim() ===''|| extraName.trim() === '' || extraValue.trim() === '') {
  alert("Please enter all inputs");
  return;
}
const movieName = {
  info: {
    title,
    [extraName]: extraValue
  },
  id : Math.random()
}
movies.push(movieName);
renderMovie();
};

const searchMovieHandler = () => {
    const filter = document.getElementById('filter-title').value
    renderMovie(filter);
};

addBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler)