

function doesFlightFitTwoMovies( movieLengths, flightLength){

  const moviesAlreadySeen = new Set();
  
  for(let i=0; i<movieLengths.length; i++){
    const secondMovieLength = flightLength - movieLengths[i];

    if (moviesAlreadySeen.has(secondMovieLength)){
      return true
    } else {
      moviesAlreadySeen.add(movieLengths[i]);
    }
  }
  return false
}

const flightLength = 150;
const movieLengths = [120,90,80, 70];

console.log(doesFlightFitTwoMovies(flightLength, movieLengths))
