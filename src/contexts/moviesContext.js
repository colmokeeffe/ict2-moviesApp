import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} ) 
  const [favourites, setFavourites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToFavourites = (movie) => {
    if(!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  }

  const addMustWatch = (movie) => {
    if(!mustWatch.includes(movie.id)) {
      let newMustWatch = [...mustWatch, movie.id];
      setMustWatch(newMustWatch);
      console.log(`must watch state variable array: ${mustWatch}`)
    }
  };

  return (
    <MoviesContext.Provider
      value={{favourites, addToFavourites, removeFromFavourites, addReview, addMustWatch}}>
        {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;