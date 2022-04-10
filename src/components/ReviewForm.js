import React, { useState } from "react";
import Tags from "./Tags";

export default function ReviewForm({ reviewAdded }) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [learnings, setLearnings] = useState("");
  const [tags, setTags] = useState([]);
  const [count, setCount] = useState(0);

  const resetForm = () => {
    setName("");
    setAuthor("");
    setLearnings("");
    setCount(count + 1);
  };

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      await fetch("/.netlify/functions/reviews", {
        method: "POST",
        body: JSON.stringify({ name, author, learnings, tags }),
      });

      resetForm();
      reviewAdded();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <div className="card-header">Add a new review:</div>
      <div className="card-body">
        <form className="" onSubmit={submitReview}>
          <div className="form-group">
            <label htmlFor="name">What did I read?</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Who is(are) the author(s)?</label>
            <input
              type="text"
              name="author"
              value={author}
              className="form-control"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="floatingTextarea2">Learnings</label>
            <textarea
              type="text"
              name="learnings"
              value={learnings}
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              onChange={(e) => setLearnings(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <p>Tags</p>
            <Tags tagsUpdated={setTags} key={count} />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
