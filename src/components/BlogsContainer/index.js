import React from "react";

import "./BlogsContainer.css";

import SingleBlogPost from "./SingleBlogPost";
import SinglePostSkeleton from "../skeleton/SinglePostSkeleton";

const BlogsContainer = ({ Blogs }) => {
  const allBlogs = Blogs?.map((blog) => {
    return <SingleBlogPost key={blog._id} data={blog} />;
  });

  const skeletonBlogs = [...Array(8).keys()].map((c) => {
    // I am giving the count as a key here. because i won't change.
    return <SinglePostSkeleton key={c} />;
  });


  return (
    <div className="BlogsContainer">{!!Blogs ? allBlogs : skeletonBlogs}</div>
  );
};

export default BlogsContainer;
