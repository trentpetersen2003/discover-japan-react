import React from 'react';
import '../styles/RecipeBook.css';
import sushiImg from '../assets/images/sushi_rolls.jpg';
import ramenImg from '../assets/images/ramen.jpg';
import tempuraImg from '../assets/images/tempura.jpg';
import misoSoupImg from '../assets/images/miso_soup.jpg';
import okonomiyakiImg from '../assets/images/okonomiyaki.jpg';
import yakitoriImg from '../assets/images/yakitori.jpg';
import takoyakiImg from '../assets/images/takoyaki.jpg';
import mochiImg from '../assets/images/mochi.jpg';

function RecipeBook() {

  const recipes = [
    {
      name: "Sushi Rolls",
      img: sushiImg,
      description: "Delicious sushi rolls filled with fresh fish and vegetables, perfect for any occasion.",
      prep_time: "30 minutes",
      cooking_time: "20 minutes",
      servings: 4,
    },
    {
      name: "Ramen",
      img: ramenImg,
      description: "Hearty and flavorful Japanese noodle soup with a rich broth and a variety of toppings.",
      prep_time: "15 minutes",
      cooking_time: "25 minutes",
      servings: 2,
    },
    {
      name: "Tempura",
      img: tempuraImg,
      description: "Crispy fried vegetables and shrimp, lightly battered for a perfect crunch.",
      prep_time: "20 minutes",
      cooking_time: "15 minutes",
      servings: 4,
    },
    {
      name: "Miso Soup",
      img: misoSoupImg,
      description: "A simple and comforting soup made with dashi, miso paste, and soft tofu.",
      prep_time: "5 minutes",
      cooking_time: "10 minutes",
      servings: 4,
    },
    {
      name: "Okonomiyaki",
      img: okonomiyakiImg,
      description: "Savory Japanese pancake packed with cabbage and topped with okonomiyaki sauce and mayonnaise.",
      prep_time: "15 minutes",
      cooking_time: "20 minutes",
      servings: 2,
    },
    {
      name: "Yakitori",
      img: yakitoriImg,
      description: "Grilled chicken skewers glazed with a savory soy sauce, perfect for an appetizer or snack.",
      prep_time: "10 minutes",
      cooking_time: "15 minutes",
      servings: 4,
    },
    {
      name: "Takoyaki",
      img: takoyakiImg,
      description: "Popular street food made with tender octopus pieces inside a crispy batter, topped with takoyaki sauce and bonito flakes.",
      prep_time: "20 minutes",
      cooking_time: "10 minutes",
      servings: 6,
    },
    {
      name: "Mochi",
      img: mochiImg,
      description: "Chewy and sweet rice cakes often filled with a sweet paste, perfect for dessert.",
      prep_time: "10 minutes",
      cooking_time: "20 minutes",
      servings: 8,
    },
  ];

  return (
    <div className="recipe-book">
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-item">
            <img src={recipe.img} alt={recipe.name} className="recipe-image" />
            <div className="recipe-details">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <p><strong>Prep Time:</strong> {recipe.prep_time}</p>
              <p><strong>Cooking Time:</strong> {recipe.cooking_time}</p>
              <p><strong>Servings:</strong> {recipe.servings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeBook;