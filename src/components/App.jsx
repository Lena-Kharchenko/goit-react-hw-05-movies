import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/:moviId" element={<MovieDetails />} />
        <Route path="/:moviId/cast" element={<Cast />} />
        <Route path="/:moviId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
