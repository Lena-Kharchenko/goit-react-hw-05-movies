import React, { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'ApiService/ApiService';
import {
  ReviewsContainer,
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await fetchMovieReviews(movieId);
      setReviews(reviews);
    };
    fetchReviews();
  }, [movieId]);

  return (
    <Suspense>
      <ReviewsContainer>
        {reviews.length > 0 ? (
          <ReviewList>
            {reviews.map(review => (
              <ReviewItem key={review.id}>
                <ReviewAuthor>Author: {review.author}</ReviewAuthor>
                <ReviewContent>{review.content}</ReviewContent>
              </ReviewItem>
            ))}
          </ReviewList>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ReviewsContainer>
    </Suspense>
  );
};

export default Reviews;
