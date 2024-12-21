import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create Context
export const BlogContext = createContext();

// Blog Provider to wrap around components that need the context
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [oneBlog, setOneBlog] = useState(null);  // Initialize as null if expecting an object

  // Fetch all blogs (componentDidMount equivalent)
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/Blog/AllBlogs");
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []); 

  
  const fetchOneBlog = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/Blog/getOneBlog/${id}`);
      setOneBlog(response.data.existedBlog);
    } catch (error) {
      console.error("Error fetching the blog:", error);
    }
  };

  useEffect(() => {
    if (oneBlog?.id) {
      fetchOneBlog(oneBlog.id);
    }
  }, [oneBlog?.id]); 

 
  const deleteBlog = (id) => {
    axios
      .delete(`http://localhost:3000/api/Blog/delete/${id}`)
      .then(() => {
        console.log("Blog Deleted Successfully");
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id)); 
      })
      .catch((err) => {
        console.error("Error deleting the blog:", err);
      });
  };

  // Like/unlike a blog
  const toggleLike = (id) => {
    setBlogs(
      blogs.map((blog) =>
        blog._id === id ? { ...blog, liked: !blog.liked } : blog
      )
    );
  };

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, toggleLike, deleteBlog, oneBlog, setOneBlog ,fetchOneBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to access BlogContext
export const useBlog = () => useContext(BlogContext);
