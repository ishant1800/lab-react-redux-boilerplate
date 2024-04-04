import React, { useState } from "react";

function LikeDislikeActions() {
  const [likeCount, setLikeCount] = useState(0);

  const incrementLikes = () => {
    setLikeCount(likeCount + 1);
  };

  const decrementLikes = () => {
    if (likeCount > 0) {
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <div>
      <h1>{likeCount}</h1>
      <button onClick={incrementLikes}>Like</button>
      <button onClick={decrementLikes} disabled={likeCount === 0}>
        Dislike
      </button>
    </div>
  );
}

export default LikeDislikeActions;
