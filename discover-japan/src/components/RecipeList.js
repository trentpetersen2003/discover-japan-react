import React, { useState, useEffect } from "react";
import recipesData from "../assets/japanese_recipes.json";
import "../styles/RecipeList.css";

// Import images
import sushiRollsImg from "../assets/images/sushi_rolls.jpg";
import ramenImg from "../assets/images/ramen.jpg";
import tempuraImg from "../assets/images/tempura.jpg";
import misoSoupImg from "../assets/images/miso_soup.jpg";
import okonomiyakiImg from "../assets/images/okonomiyaki.jpg";
import yakitoriImg from "../assets/images/yakitori.jpg";
import takoyakiImg from "../assets/images/takoyaki.jpg";
import mochiImg from "../assets/images/mochi.jpg";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Map the images to the JSON data
    const updatedRecipes = recipesData.map((recipe) => {
      let imgSrc;
      switch (recipe.img_name) {
        case "assets/images/sushi_rolls.jpg":
          imgSrc = sushiRollsImg;
          break;
        case "assets/images/ramen.jpg":
          imgSrc = ramenImg;
          break;
        case "assets/images/tempura.jpg":
          imgSrc = tempuraImg;
          break;
        case "assets/images/miso_soup.jpg":
          imgSrc = misoSoupImg;
          break;
        case "assets/images/okonomiyaki.jpg":
          imgSrc = okonomiyakiImg;
          break;
        case "assets/images/yakitori.jpg":
          imgSrc = yakitoriImg;
          break;
        case "assets/images/takoyaki.jpg":
          imgSrc = takoyakiImg;
          break;
        case "assets/images/mochi.jpg":
          imgSrc = mochiImg;
          break;
        default:
          imgSrc = ""; // Optional: Add a placeholder image
      }
      return { ...recipe, imgSrc };
    });

    setRecipes(updatedRecipes);
  }, []);

  return (
    <div className="recipe-book">
      <h2>Japanese Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div className="recipe-item" key={recipe._id}>
            <img src={recipe.imgSrc} alt={recipe.name} />
            <div className="recipe-details">
              <h3>{recipe.name}</h3>
              <p><strong>Description:</strong> {recipe.description}</p>
              <p><strong>Prep Time:</strong> {recipe.prep_time}</p>
              <p><strong>Cooking Time:</strong> {recipe.cooking_time}</p>
              <p><strong>Servings:</strong> {recipe.servings}</p>
              <p><strong>Ingredients:</strong></p>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;