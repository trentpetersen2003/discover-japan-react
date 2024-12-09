import React, { useState } from "react";

const AddRecipeForm = ({ onRecipeAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    ingredients: "",
    prep_time: "",
    cooking_time: "",
    description: "",
    main_image: null, // Changed to handle file uploads
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData object for the request
      const data = new FormData();
      data.append("name", formData.name);
      data.append("size", formData.size);
      data.append("ingredients", formData.ingredients);
      data.append("prep_time", formData.prep_time);
      data.append("cooking_time", formData.cooking_time);
      data.append("description", formData.description);
      if (formData.main_image) {
        data.append("main_image", formData.main_image);
      }

      console.log("Submitting recipe:", formData); // Debug log

      // Send POST request to the server
      const response = await fetch(
        "https://japanese-recipes-server.onrender.com/api/recipes",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();
      console.log("Server response:", result); // Debug log

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
          main_image: null,
        }); // Clear the form
      } else {
        setSuccess(false);
        setError(result.message);
      }
    } catch (err) {
      console.error("Error adding recipe:", err); // Debug log
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
          <label htmlFor="main_image">Main Image:</label>
          <input
            type="file"
            id="main_image"
            name="main_image"
            onChange={handleChange}
            accept="image/*"
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