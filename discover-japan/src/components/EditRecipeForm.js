import React, { useState } from "react";

const EditRecipeForm = ({ recipe, onRecipeEdited }) => {
  const [formData, setFormData] = useState({ ...recipe });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate main_image is either a valid URL or a relative path
    const isValidUrl = /^https?:\/\/[^\s]+$/i.test(formData.main_image);
    const isValidRelativePath = /^\/[^\s]+(\.jpg|\.png|\.jpeg)$/i.test(formData.main_image);

    if (!isValidUrl && !isValidRelativePath) {
        setError("Main image must be a valid URL or a relative path (e.g., /images/sushi.jpg).");
        return;
    }

    try {
      const { _id, ...dataToSend } = formData;
      const response = await fetch(`https://japanese-recipes-server.onrender.com/api/recipes/${recipe._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSuccess(true);
        setError("");
        onRecipeEdited(result.recipe); // Notify parent component with the updated recipe
      } else {
        setSuccess(false);
        setError(result.message || "Failed to update the recipe.");
      }
    } catch (err) {
      setSuccess(false);
      setError("Failed to update the recipe. Please try again.");
      console.error("Error updating recipe:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      <h3>Edit Recipe</h3>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="size">Size:</label>
      <input
        type="text"
        id="size"
        name="size"
        value={formData.size}
        onChange={handleChange}
        required
      />

      <label htmlFor="ingredients">Ingredients (comma-separated):</label>
      <input
        type="text"
        id="ingredients"
        name="ingredients"
        value={formData.ingredients.join(", ")} // Convert array to a string for display
        onChange={(e) =>
          setFormData({
            ...formData,
            ingredients: e.target.value.split(",").map((item) => item.trim()), // Convert back to an array
          })
        }
        required
      />

      <label htmlFor="prep_time">Prep Time:</label>
      <input
        type="text"
        id="prep_time"
        name="prep_time"
        value={formData.prep_time}
        onChange={handleChange}
        required
      />

      <label htmlFor="cooking_time">Cooking Time:</label>
      <input
        type="text"
        id="cooking_time"
        name="cooking_time"
        value={formData.cooking_time}
        onChange={handleChange}
        required
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>

      <label htmlFor="main_image">Main Image URL:</label>
      <input
        type="text"
        id="main_image"
        name="main_image"
        value={formData.main_image}
        onChange={handleChange}
        required
      />

      <button type="submit">Save Changes</button>
      {success && <p style={{ color: "green" }}>Recipe updated successfully!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default EditRecipeForm;