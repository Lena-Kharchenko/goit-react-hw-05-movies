import Search from 'components/Search/Search';
import { useEffect, useState, useCallback, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { fetchMovieSearch } from 'ApiService/ApiService';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const { movieId } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleSearchSubmit = useCallback(
    async query => {
      try {
        const results = await fetchMovieSearch(query);
        setSearchResults(results);
        searchParams.set('query', query);
        navigate(`/movies?${searchParams.toString()}`);
      } catch (error) {
        console.log('error', error);
        setSearchResults([]);
      }
    },
    [navigate, searchParams]
  );

  useEffect(() => {
    const fetchMovies = async () => {
      if (!movieId) return;
      try {
        const results = await fetchMovieSearch(movieId);
        setSearchResults(results);
      } catch (error) {
        console.log('error', error);
        setSearchResults([]);
      }
    };

    fetchMovies();
  }, [movieId]);

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      handleSearchSubmit(query);
    }
  }, [searchParams, handleSearchSubmit]);

  return (
    <Suspense>
      <div>
        <Search onSubmit={handleSearchSubmit} />
        <MovieList movies={searchResults} />
      </div>
    </Suspense>
  );
};

export default Movies;
