import React from "react";

const PostsCard = ({ post }) => {
  const { userId, title, body } = post;
  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h1>{userId}</h1>
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PostsCard;
