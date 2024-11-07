import React from 'react';
import japanLandscape from '../assets/images/japan_landscape.jpg';

function Home() {
  return (
    <>
      <main>
        <section class="hero">
            <img src={japanLandscape} alt="Beautiful view of Japan landscape" class="hero-image"/>
        </section>
            <p class="home-text">
                Japan is a country rich in culture, history, and natural beauty, making it 
                a top destination for travelers around the world. Whether you're interested 
                in exploring the bustling streets of Tokyo, relaxing in the serene gardens 
                of Kyoto, or experiencing the traditional way of life in rural villages, Japan 
                has something for everyone. "Discover Japan" will guide you through the best 
                destinations, cultural experiences, and local cuisine, ensuring that you make 
                the most of your trip.
            </p>
      </main>
    </>
  );
}

export default Home;