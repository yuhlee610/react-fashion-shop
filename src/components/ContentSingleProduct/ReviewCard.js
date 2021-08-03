import React from 'react'

function ReviewCard({
    heading,
    dateAndAuthor,
    body,
    stars
}) {
    return (
        <div className="review-card">
            <div className="stars">
                <Rating stars={stars} />
            </div>
            <div className="heading">
                {heading}
            </div>
            <div className="date">
                {dateAndAuthor}
            </div>
            <div className="body">
                {body}
            </div>
        </div>
    )
}

export default ReviewCard
