import React from "react";

export default function Review({ review, refreshReviews }) {
  // const gameChanger = true;

  // if (finished === false) {
  //   gameChanger = true;
  // } else {
  //   gameChanger = false;
  // }

  const markReviewFinished = async () => {
    try {
      await fetch("/.netlify/functions/reviews", {
        method: "PUT",
        body: JSON.stringify({ ...review, finished: true }),
      });
      refreshReviews();
    } catch (err) {
      console.error(err);
    }
  };
  const deleteReview = async () => {
    try {
      fetch("/.netlify/functions/reviews", {
        method: "DELETE",
        body: JSON.stringify({ id: review.id }),
      });
      refreshReviews();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="list-group-item">
      <h6 className="list-group-item-heading mb-2">{review.name}</h6>
      <p className="list-group-item mb-2">Author(s): {review.author}</p>
      <p className="list-group-item">Key Learnings: {review.learnings}</p>
      <p>
        Tags:{" "}
        {review.tags &&
          review.tags.map((tag) => (
            <span className="badge bg-primary me-2">{tag}</span>
          ))}
      </p>
      {!review.finished && (
        <button
          className="btn btn-sm btn-success mb-2"
          onClick={markReviewFinished}
        >
          Completed Reading
        </button>
      )}
      <button
        className="btn btn-sm btn-danger mx-2 mb-2"
        onClick={deleteReview}
      >
        Delete
      </button>
    </div>
  );
}
