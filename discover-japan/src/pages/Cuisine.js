import React from 'react';
import Card from '../components/Card';
import RecipeList from '../components/RecipeList';
import japaneseCuisine from '../assets/images/cuisine.jpg';
import restaurantsImg from '../assets/images/restaurant.jpg';
import dishesImg from '../assets/images/sushi.jpg';

function Cuisine() {

    const popularRestaurants = [
        "Sukiyabashi Jiro (Tokyo) – A world-renowned sushi restaurant run by chef Jiro Ono, famous for its meticulously crafted sushi and earning three Michelin stars.",
        "Ichiran Ramen (multiple locations) – A popular ramen chain known for its tonkotsu (pork broth) ramen, offering a unique solo dining experience where customers can focus on the flavors.",
        "Narisawa (Tokyo) – A Michelin-starred restaurant blending Japanese and French cuisine, celebrated for its focus on sustainable, seasonal ingredients and beautifully crafted dishes.",
        "Kaiseki Kichisen (Kyoto) – Known for traditional kaiseki dining, a multi-course Japanese meal that showcases seasonal ingredients, artistry, and Kyoto's culinary heritage.",
        "Ippudo (multiple locations) – A famous ramen chain serving rich tonkotsu ramen, with branches across Japan and internationally, loved for its flavorful broth and tender noodles."
      ];
    
      const famousDishes = [
        "Sushi – Vinegared rice paired with raw or cooked seafood, vegetables, or other ingredients. Common types include nigiri, sashimi, and maki (rolls).",
        "Ramen – A noodle soup dish with various broth bases (like soy, miso, or pork-based tonkotsu) and toppings such as sliced pork, soft-boiled eggs, and green onions.",
        "Tempura – Battered and deep-fried seafood or vegetables, often served with dipping sauce, rice, or noodles.",
        "Okonomiyaki – A savory pancake made from batter and cabbage, with additional ingredients like pork, seafood, or cheese, topped with a sweet sauce and mayonnaise.",
        "Takoyaki – Ball-shaped snacks made of batter filled with diced octopus, tempura scraps, and green onions, often topped with bonito flakes and a savory sauce."
      ];

       const recipes = [
    {
      title: "Sushi Rolls - Learn how to make traditional sushi at home.",
      content: `
        <h3>Sushi Rolls</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li>2 cups sushi rice</li>
          <li>3 cups water</li>
          <li>1/2 cup rice vinegar</li>
          <li>4 sheets nori (seaweed)</li>
          <li>Fresh fish (e.g., salmon or tuna)</li>
          <li>Vegetables (e.g., cucumber, avocado)</li>
          <li>Soy sauce for dipping</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
          <li>Rinse the sushi rice under cold water until the water runs clear.</li>
          <li>Cook the rice with water according to the package instructions.</li>
          <li>Once cooked, mix the rice with rice vinegar.</li>
          <li>Place a nori sheet on a bamboo mat, spread a thin layer of rice on top.</li>
          <li>Add fish and vegetables in a line along the edge of the nori.</li>
          <li>Roll tightly using the bamboo mat, then slice into bite-sized pieces.</li>
          <li>Serve with soy sauce for dipping.</li>
        </ol>`
    },
    {
      title: "Ramen - Try this hearty and flavorful Japanese noodle soup.",
      content: `
        <h3>Ramen</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li>200g ramen noodles</li>
          <li>4 cups chicken broth</li>
          <li>2 tablespoons soy sauce</li>
          <li>1 tablespoon miso paste</li>
          <li>2 garlic cloves, minced</li>
          <li>1 teaspoon grated ginger</li>
          <li>Soft-boiled eggs</li>
          <li>Green onions, sliced</li>
          <li>Cooked pork slices (optional)</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
          <li>Cook ramen noodles according to the package instructions, then drain.</li>
          <li>In a pot, combine chicken broth, soy sauce, miso paste, garlic, and ginger. Bring to a simmer.</li>
          <li>Add the cooked noodles to the broth.</li>
          <li>Serve hot with soft-boiled eggs, green onions, and pork slices on top.</li>
        </ol>`
    },
    {
      title: "Tempura - Light and crispy battered vegetables and seafood.",
      content: `
        <h3>Tempura</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li>10 shrimp, peeled and deveined</li>
          <li>Assorted vegetables (e.g., sweet potato, bell pepper, zucchini)</li>
          <li>1 cup all-purpose flour</li>
          <li>1 cup ice-cold water</li>
          <li>1 egg</li>
          <li>Oil for deep frying</li>
          <li>Tentsuyu dipping sauce</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
          <li>Heat oil in a deep pan to 350°F (175°C).</li>
          <li>In a bowl, mix the flour, ice-cold water, and egg to make the batter. Do not overmix; it should be slightly lumpy.</li>
          <li>Dip shrimp and vegetables into the batter, then carefully place into the hot oil.</li>
          <li>Fry until golden and crispy, then drain on a paper towel.</li>
          <li>Serve with tentsuyu dipping sauce.</li>
        </ol>`
    },
    {
      title: "Miso Soup - A simple and comforting staple in Japanese cuisine.",
      content: `
        <h3>Miso Soup</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li>4 cups dashi stock</li>
          <li>3 tablespoons miso paste</li>
          <li>1/2 cup tofu, cubed</li>
          <li>2 green onions, sliced</li>
          <li>1 sheet wakame seaweed, rehydrated</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
          <li>Heat the dashi stock in a pot over medium heat.</li>
          <li>Add tofu and wakame to the pot.</li>
          <li>In a small bowl, mix a ladle of hot dashi stock with the miso paste until smooth.</li>
          <li>Add the miso mixture back to the pot and stir well. Do not boil the soup after adding miso.</li>
          <li>Serve hot, garnished with green onions.</li>
        </ol>`
    },
    {
      title: "Okonomiyaki - A savory Japanese pancake with various toppings.",
      content: `
        <h3>Okonomiyaki</h3>
        <p><strong>Ingredients:</strong></p>
        <ul>
          <li>1 cup all-purpose flour</li>
          <li>1/2 cup dashi stock or water</li>
          <li>2 eggs</li>
          <li>2 cups shredded cabbage</li>
          <li>100g pork belly slices</li>
          <li>Okonomiyaki sauce</li>
          <li>Mayonnaise</li>
          <li>Bonito flakes (optional)</li>
          <li>Chopped green onions (optional)</li>
        </ul>
        <p><strong>Instructions:</strong></p>
        <ol>
          <li>In a large bowl, mix flour, dashi stock, and eggs to form a batter.</li>
          <li>Add shredded cabbage and mix until well coated.</li>
          <li>Heat a skillet over medium heat and add a little oil.</li>
          <li>Pour the batter into the skillet, shaping it into a round pancake. Place pork belly slices on top.</li>
          <li>Cook for 5-6 minutes on each side, or until golden brown and cooked through.</li>
          <li>Serve with okonomiyaki sauce, mayonnaise, bonito flakes, and green onions on top.</li>
        </ol>`
    }
  ];

    return (
        <>
        <main>
        <section class="hero">
            <img src={japaneseCuisine} alt="Cuisine image" class="hero-image"/>
        </section>
        <p class="home-text">
            Japan's cuisine is world-renowned for its freshness, flavor, and artistry. 
            From sushi and ramen to tempura and sashimi, each dish offers a unique taste
            of Japan's culinary heritage. Exploring local cuisine is a must for any visitor
            looking to experience the true flavors of Japan.
        </p>

        <section class="content-grid">
        <Card
          image={restaurantsImg}
          title="Popular Restaurants"
          content={popularRestaurants}
        />
        <Card
          image={dishesImg}
          title="Famous Dishes"
          content={famousDishes}
        />
        <section class="recipe-book">
            <h2>Japanese Recipe Book</h2>
            <ul>
                <li class="recipe-book">Sushi Rolls - Learn how to make traditional sushi at home.</li>
                <li class="recipe-book">Ramen - Try this hearty and flavorful Japanese noodle soup.</li>
                <li class="recipe-book">Tempura - Light and crispy battered vegetables and seafood.</li>
                <li class="recipe-book">Miso Soup - A simple and comforting staple in Japanese cuisine.</li>
                <li class="recipe-book">Okonomiyaki - A savory Japanese pancake with various toppings.</li>
            </ul>
        </section>
        <RecipeList />
        </section>
        </main>
        </>
    )
}

export default Cuisine;