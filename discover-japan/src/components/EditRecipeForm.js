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

    try {
      const response = await fetch(`https://japanese-recipes-server.onrender.com/api/recipes/${recipe._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setError("");
        onRecipeEdited(result.recipe); // Notify parent component
      } else {
        setSuccess(false);
        setError(result.message);
      }
    } catch (err) {
      setSuccess(false);
      setError("Failed to update the recipe. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="size"
        value={formData.size}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Save Changes</button>
      {success && <p style={{ color: "green" }}>Recipe updated successfully!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default EditRecipeForm;