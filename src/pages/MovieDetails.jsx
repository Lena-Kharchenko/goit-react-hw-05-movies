import { Suspense } from 'react';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'ApiService/ApiService';
import Loader from 'components/Loader/Loader';
import {
  MovieDetailsContainer,
  MovieImage,
  MovieInfoContainer,
  MovieScore,
  MovieOverview,
  AditionalInfoContainer,
  AditionalInfoContainerLi,
  AditionalInfoLink,
} from '.././components/MovieDetails/MovieDetails.styled';

const defaultImage =
  'https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log('error', error);
        setMovie(null);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movie) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <GoBackBtn location={locationRef.current} />
      <div>
        <MovieDetailsContainer>
          <MovieImage
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
          />
          <MovieInfoContainer>
            <h1>
              {movie.title}({movie.release_date.slice(0, 4)})
            </h1>
            <MovieScore>
              User score: {(movie.vote_average * 10).toFixed(0)}%
            </MovieScore>
            <h2>Overview</h2>
            <MovieOverview>{movie.overview}</MovieOverview>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </MovieInfoContainer>
        </MovieDetailsContainer>
      </div>

      <AditionalInfoContainer>
        <h2>Additional information</h2>
        <ul>
          <AditionalInfoContainerLi>
            <AditionalInfoLink to="cast">Cast</AditionalInfoLink>
          </AditionalInfoContainerLi>

          <AditionalInfoContainerLi>
            <AditionalInfoLink to="reviews">Reviews</AditionalInfoLink>
          </AditionalInfoContainerLi>
        </ul>
      </AditionalInfoContainer>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
