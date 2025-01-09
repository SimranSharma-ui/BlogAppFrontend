import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../contaxt/BlogProvider";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs, setBlogs } = useBlog();

  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    liked: false,
    Category: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const blogToUpdate = blogs.find((blog) => blog._id === id);
    if (blogToUpdate) {
      setFormData({
        Name: blogToUpdate.Name,
        Description: blogToUpdate.Description,
        Category: blogToUpdate?.Category,
        liked: blogToUpdate.liked,
        image: null,
      });
    } else {
      alert("Blog not found.");
      navigate("/AllBlogs");
    }
  }, [id, blogs, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.Name.trim()) newErrors.Name = "Name is required!";
    if (!formData.Description.trim())
      newErrors.Description = "Description is required!";
    if (!formData.Category.trim()) newErrors.Category = "Category is required!";
    if (!formData.image) newErrors.image = "Image is required!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("Name", formData.Name);
    formDataToSend.append("Description", formData.Description);
    formDataToSend.append("Category", formData.Category);
    formDataToSend.append("liked", formData.liked);
    formDataToSend.append("image", formData.image);

    setLoading(true);

    try {
      const res = await axios.put(
        `http://localhost:3000/api/Blog/update/${id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === res.data._id
            ? {
                ...blog,
                Name: res.data.Name,
                Description: res.data.Description,
                Category: res.data.Category,
                liked: res.data.liked,
                Image: res.data.image,
              }
            : blog
        )
      );

      alert("Blog updated successfully!");
      navigate("/AllBlogs");
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Error updating blog!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <form
        className="w-full md:w-1/2 mx-auto bg-gradient-to-r from-blue-500 to-teal-400 shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-extrabold text-white text-center mb-6">
          Update The Blog
        </h1>

        <div className="mb-6">
          <input
            className="w-full p-4 border-2 border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-teal-300"
            type="text"
            name="Name"
            value={formData.Name}
            placeholder="Write down the Title"
            onChange={handleChange}
          />
          {errors.Name && <span className="text-red-500">{errors.Name}</span>}
        </div>

        <div className="mb-6">
          <input
            className="w-full p-4 border-2 border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-teal-300"
            type="text"
            name="Description"
            value={formData.Description}
            placeholder="Write down the Description"
            onChange={handleChange}
          />
          {errors.Description && (
            <span className="text-red-500">{errors.Description}</span>
          )}
        </div>

        <div className="mb-6">
          <input
            className="w-full p-4 border-2 border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-teal-300"
            type="text"
            name="Category"
            value={formData.Category}
            placeholder="Write down the Category"
            onChange={handleChange}
          />
          {errors.Category && (
            <span className="text-red-500">{errors.Category}</span>
          )}
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center text-white">
            <input
              className="mr-2 h-5 w-5 text-teal-500"
              type="checkbox"
              name="liked"
              checked={formData.liked}
              onChange={handleChange}
            />
            <span className="text-lg">Liked</span>
          </label>
        </div>

        <div className="mb-6">
          <input
            className="w-full p-4 border-2 border-transparent rounded-md focus:outline-none focus:ring-4 focus:ring-teal-300"
            type="file"
            name="image"
            onChange={handleChange}
          />
          {errors.image && <span className="text-red-500">{errors.image}</span>}
        </div>

        <button
          type="submit"
          className="w-full p-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Blog"}
        </button>
      </form>

      <div className="flex justify-center mt-4">
        <Link to="/AllBlogs">
          <button className="p-3 bg-blue-400 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            View All Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Update;
