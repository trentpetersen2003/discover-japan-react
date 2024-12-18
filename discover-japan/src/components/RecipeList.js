import React, { useState, useEffect } from "react";
import AddRecipeForm from "./AddRecipeForm";
import EditRecipeForm from "./EditRecipeForm";
import "../styles/RecipeList.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch recipes from the server on component mount
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://japanese-recipes-server.onrender.com/api/recipes");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Function to handle adding a new recipe dynamically
  const handleRecipeAdded = (newRecipe) => {
    setRecipes([...recipes, newRecipe]); // Add the new recipe to the state
  };

  const handleRecipeEdited = (updatedRecipe) => {
    setRecipes(
      recipes.map((recipe) => (recipe._id === updatedRecipe._id ? updatedRecipe : recipe))
    );
    setEditingRecipe(null); // Close the edit form
  };

  const handleDelete = async (id) => {
    console.log("Delete button clicked for recipe ID:", id); // Debug log
    try {
      const response = await fetch(`https://japanese-recipes-server.onrender.com/api/recipes/${id}`, {
        method: "DELETE",
      });
  
      const result = await response.json();
      console.log("Delete response:", result); // Debug log
      if (result.success) {
        setRecipes(recipes.filter((recipe) => recipe._id !== id)); // Update state
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error("Error deleting recipe:", err);
    }
  };  

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="recipe-book">
      <h2>Japanese Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div className="recipe-item" key={recipe._id}>
            <img
              src={
                recipe.main_image.startsWith("http") || recipe.main_image.startsWith("data:image")
                ? recipe.main_image // Use as is if it's a valid URL or base64 image
                : `https://japanese-recipes-server.onrender.com${recipe.main_image}` // Prepend server URL for relative paths
              }
              alt={recipe.name}
              className="recipe-item-image"
            />
            <div className="recipe-details">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <p><strong>Prep Time:</strong> {recipe.prep_time}</p>
              <p><strong>Cooking Time:</strong> {recipe.cooking_time}</p>
              <ul>
                <strong>Ingredients:</strong>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>             
                ))}
              </ul>
            </div>
             {/* Edit Button */}
          {editingRecipe === recipe._id ? (
            <EditRecipeForm
              recipe={recipe}
              onRecipeEdited={handleRecipeEdited}
            />
          ) : (
            <button onClick={() => setEditingRecipe(recipe._id)}>Edit</button>
          )}

          {/* Delete Button */}
          <button onClick={() => handleDelete(recipe._id)}>Delete</button>
          </div>
        ))}
      </div>
      <hr style={{ margin: "40px 0", border: "1px solid #ddd" }} />
      <AddRecipeForm onRecipeAdded={handleRecipeAdded} />
    </div>
  );
};

export default RecipeList;