import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const AddMovie = () => {
  const navigate = useNavigate(); 

  const [movieData, setMovieData] = useState({
    movieId: "",
    name: "",
    rating: "",
    imageUrl: "",
    link: "",
    description: "",
    category: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!movieData.movieId) newErrors.movieId = "Movie ID is required";
    if (!movieData.name) newErrors.name = "Movie name is required";
    if (!movieData.rating) newErrors.rating = "Rating is required";
    if (!movieData.imageUrl) newErrors.imageUrl = "Image URL is required";
    if (!movieData.link) newErrors.link = "Movie link is required";
    if (!movieData.description) newErrors.description = "Description is required";
    if (!movieData.category) newErrors.category = "Category is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Movie submitted successfully!");
      console.log(movieData);

      setMovieData({
        movieId: "",
        name: "",
        rating: "",
        imageUrl: "",
        link: "",
        description: "",
        category: "",
      });

      navigate("/");
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#0a0a0a",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>Add Movie</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "640px",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Movie ID:</label>
            <input
              type="text"
              name="movieId"
              value={movieData.movieId}
              onChange={handleChange}
              placeholder="Enter Movie ID"
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {errors.movieId && <p style={{ color: "red" }}>{errors.movieId}</p>}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Movie Name:</label>
            <input
              type="text"
              name="name"
              value={movieData.name}
              onChange={handleChange}
              placeholder="Enter Movie Name"
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Movie Rating:</label>
            <input
              type="number"
              name="rating"
              step="0.1"
              value={movieData.rating}
              onChange={handleChange}
              placeholder="Enter Rating"
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {errors.rating && <p style={{ color: "red" }}>{errors.rating}</p>}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={movieData.imageUrl}
              onChange={handleChange}
              placeholder="Enter Image URL"
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {errors.imageUrl && <p style={{ color: "red" }}>{errors.imageUrl}</p>}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: "300px" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Movie Link:</label>
            <input
              type="text"
              name="link"
              value={movieData.link}
              onChange={handleChange}
              placeholder="Enter Movie Link"
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {errors.link && <p style={{ color: "red" }}>{errors.link}</p>}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Category:</label>
            <select
              name="category"
              value={movieData.category}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.5rem" }}
            >
              <option value="">Select Category</option>
              <option value="Action">Action</option>
              <option value="Marvel">Marvel</option>
            </select>
            {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label>Description:</label>
            <textarea
              name="description"
              value={movieData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Enter Description"
              style={{ width: "100%", padding: "0.5rem" }}
            />
            {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
          </div>
        </div>

        <div style={{ width: "100%", marginTop: "1rem" }}>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              borderBottom: "6px solid crimson",
            }}
          >
            Submit Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
