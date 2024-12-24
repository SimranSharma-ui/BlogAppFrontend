import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [oneBlog, setOneBlog] = useState(null);
 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/Blog/AllBlogs"
        );
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  },[]);

  const fetchOneBlog = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/Blog/getOneBlog/${id}`
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
      .delete(`http://localhost:3000/api/Blog/delete/${id}`)
      .then(() => {
        console.log("Blog Deleted Successfully");
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
