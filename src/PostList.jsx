import React from "react";

const PostList = ({ posts, isLoading }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {posts.length === 0 ? (
        <p>No result found</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #5AB2FF",
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "#CAF4FF",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            className="postcard"
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;