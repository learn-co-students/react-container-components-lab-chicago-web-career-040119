// Code MovieReviews Here

import React from "react"

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div className="review-list">
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>

     </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div>{reviews.map(Review)}</div>
  )
}

export default MovieReviews
