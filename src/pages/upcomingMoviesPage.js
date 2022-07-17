import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'; 
import Spinner from '../components/spinner';
import AddPlayListIcon from "../components/cardIcons/addPlaylist";



const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  const favourites = movies.filter(m => m.favourite)
  const { data, error, isLoading, isError } = useQuery('movie', getUpcomingMovies)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  useEffect(() => {getUpcomingMovies().then(movies => {setMovies(movies);});}, []);
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  

  return (
    
    <PageTemplate
      title='Up and Coming Movies'
      movies={movies} 
      action={(movie) => {
        return <AddPlayListIcon movie={movie} />
      }}
      
      
      />
      
  );
};
export default UpcomingMoviesPage;  