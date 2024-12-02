import React, { useState, useEffect } from "react";
import AddRecipeForm from "./AddRecipeForm";
import "../styles/RecipeList.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
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
                  ? recipe.main_image // Use the URL as is for HTTP or data:image
                  : `http://localhost:3001${recipe.main_image}` // Prepend localhost for server-hosted images
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
          </div>
        ))}
      </div>
      <hr style={{ margin: "40px 0", border: "1px solid #ddd" }} />
      <AddRecipeForm onRecipeAdded={handleRecipeAdded} />
    </div>
  );
};

export default RecipeList;