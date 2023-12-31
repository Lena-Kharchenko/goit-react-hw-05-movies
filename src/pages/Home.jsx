import { useState, useEffect, Suspense } from 'react';
import { fetchTrendingMovies } from 'ApiService/ApiService';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.log('error', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  if (!movies.length) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <Suspense>
      <h1>Trending today</h1>
      <div>
        <MovieList movies={movies} />
      </div>
    </Suspense>
  );
};

export default Home;
