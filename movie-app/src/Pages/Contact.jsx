
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.query.trim()) {
      newErrors.query = "Query is required";
    } else if (formData.query.trim().length < 10) {
      newErrors.query = "Query must be at least 10 characters long";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Submitted, We will reach out to you soon, Thank you!");
      setFormData({ name: "", email: "", query: "" });
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Contact Us</h1>
      <form
        style={{ width: "100%", maxWidth: "500px" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Query:</label>
          <br />
          <textarea
            name="query"
            placeholder="Write your query here..."
            value={formData.query}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
            rows="5"
          />
          {errors.query && <p style={{ color: "red" }}>{errors.query}</p>}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: "white",
            color: "black",
            border: "none",
            cursor: "pointer",
            width: "104%",
            borderBottom: "8px solid rgb(182, 10, 10)",
          }}
        >
          Submit
        </button>
      </form>
      <p className="about-copyright" style={{ marginTop: "3rem", position: "relative", right: "470px" }}>
        © Copyright Movies. All Rights Reserved
      </p>
    </div>
  );
};

export default Contact;
