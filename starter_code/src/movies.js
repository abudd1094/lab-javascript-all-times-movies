/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    var nbOfHours = 0
    var nbOfMinutes = 0
    var splitValues = movie.duration.split(" ")
    if (splitValues.length === 2) {
      nbOfHours = parseInt(splitValues[0])
      nbOfMinutes = parseInt(splitValues[1])
    }
    else if (splitValues[0].includes('min')) {
      nbOfMinutes = parseInt(splitValues[0])
    }
    else if (splitValues[0].includes('h')) {
      nbOfHours = parseInt(splitValues[0])
    }

    

    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: nbOfHours*60 + nbOfMinutes,
      genre: movie.genre,
      rate: movie.rate,
    }
  })
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  return parseFloat((((movies.map(x => parseFloat(x.rate))).reduce((total, num) => total + num))/movies.length).toFixed(2));
}


// Get the average of Drama Movies
function dramaMoviesRate (movies) {
  return parseFloat((((movies.filter(x => x.genre.includes('Drama')).map(x => parseFloat(x.rate))).reduce((total, num) => total + num))/movies.length).toFixed(2));
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
