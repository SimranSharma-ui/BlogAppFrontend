import React, { createContext, useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [oneBlog, setOneBlog] = useState(null);
  const navigate = useNavigate();
 
  const fetchBlogs = useCallback(async () => {
    if (blogs.length > 0) return;
    try {
      const response = await axios.get(
        "https://blogappbackend-8pw0.onrender.com/api/Blog/AllBlogs",
        { withCredentials: true }
      );
      
      setBlogs(response.data.blogs || []); 
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]); 
    }
  },[blogs.length]) ;
  
  const fetchOneBlog = async (id) => {
    try {
      const response = await axios.get(
        `https://blogappbackend-8pw0.onrender.com/api/Blog/getOneBlog/${id}`,{
          withCredentials:true
        }
      );
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
      .delete(`https://blogappbackend-8pw0.onrender.com/api/Blog/delete/${id}`,{
        withCredentials:true
      })
      .then(() => {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        
      })
      .catch((err) => {
        console.error("Error deleting the blog:", err);
      });
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
        fetchBlogs,
        deleteBlog,
        oneBlog,
        setOneBlog,
        fetchOneBlog,
       
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
