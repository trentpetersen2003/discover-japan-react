import React, { useState } from "react";

const AddRecipeForm = ({ onRecipeAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    ingredients: "",
    prep_time: "",
    cooking_time: "",
    description: "",
    main_image: "",
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the server
      const response = await fetch("http://localhost:3001/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          ingredients: formData.ingredients.split(",").map((item) => item.trim()), // Convert ingredients to array
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setError("");
        onRecipeAdded(result.recipe); // Notify parent of the new recipe
        setFormData({
          name: "",
          size: "",
          ingredients: "",
          prep_time: "",
          cooking_time: "",
          description: "",
          main_image: "",
        }); // Clear the form
      } else {
        setSuccess(false);
        setError(result.message);
      }
    } catch (err) {
      setSuccess(false);
      setError("Failed to add the recipe. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="add-recipe-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prep_time">Prep Time:</label>
          <input
            type="text"
            id="prep_time"
            name="prep_time"
            value={formData.prep_time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cooking_time">Cooking Time:</label>
          <input
            type="text"
            id="cooking_time"
            name="cooking_time"
            value={formData.cooking_time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="main_image">Main Image URL:</label>
          <input
            type="url"
            id="main_image"
            name="main_image"
            value={formData.main_image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Recipe</button>
      </form>
      {success && <p style={{ color: "green" }}>Recipe added successfully!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddRecipeForm;