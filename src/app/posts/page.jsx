import React from "react";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getPosts2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  } catch (error) {
    throw new Error("Data is not fetched properly");
  } finally {
  }
};

const getPosts3 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Data is not fetching");
  }
  return res.json();
};

const PostsPage = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  const posts = await getPosts();
  const posts2 = await getPosts2();
  const posts3 = await getPosts3();
  return (
    <div>
      <h2>Total Post:{posts.length}</h2>
      <h3>Total Post:{posts2.length}</h3>
      <h4>Total post:{posts3.length}</h4>
    </div>
  );
};

export default PostsPage;
