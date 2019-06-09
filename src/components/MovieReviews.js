// Code MovieReviews Here

import React from 'react'

const MovieReviews = ({reviews}) => {
return(
  <div className="review-list">
    {reviews.map(review =>
      <div class="review">
      <p>{review.author}</p>
      </div>
    )}
    </div>
)
}

export default MovieReviews
