import React from 'react'

function MovieReviews(props) {
  return(
    <div className="review-list">
      {props.reviews.map((review, i) =>{
        <li key={i} className="review">
        <h4>{review.display_title}</h4>
        <h4>{review.headline}</h4>
        </li>
      })}
    </div>
  )
}

export default MovieReviews
