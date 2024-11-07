import React from 'react';
import Card from '../components/Card';
import tokyoImg from '../assets/images/tokyo.jpg';
import fushimiInari from '../assets/images/fushimi_inari.jpg';
import mountFuji from '../assets/images/mount_fuji.jpg';

function Destinations() {

    const popularCities = [
        "Tokyo – The capital city, known for its blend of modern skyscrapers, historic temples, cutting-edge technology, and diverse cultural districts like Shibuya and Akihabara.",
        "Kyoto – Famous for its well-preserved ancient temples, traditional tea houses, geisha culture, and scenic spots such as the Arashiyama bamboo grove and Fushimi Inari Shrine.",
        "Osaka – A lively city known for its street food, shopping, and vibrant nightlife. It's also home to the iconic Osaka Castle and Universal Studios Japan.",
        "Hokkaido (Sapporo) – Famous for its beautiful natural scenery, ski resorts, hot springs, and the Sapporo Snow Festival.",
        "Hiroshima – Known for its historical significance, particularly the Peace Memorial Park and Museum dedicated to the atomic bombing, as well as the nearby Miyajima Island and Itsukushima Shrine."
      ];
    
      const famousLandmarks = [
        "Mount Fuji – Japan’s tallest mountain and an iconic symbol, popular for hiking and breathtaking views, especially during cherry blossom season.",
        "Fushimi Inari Shrine (Kyoto) – Known for its thousands of vibrant red torii gates that form a scenic pathway up the mountain, dedicated to the Shinto god of rice.",
        "Tokyo Tower – A communications and observation tower resembling the Eiffel Tower, offering panoramic views of Tokyo’s skyline.",
        "Himeji Castle – Japan’s most famous and best-preserved castle, known for its striking white exterior and impressive traditional Japanese architecture.",
        "Arashiyama Bamboo Grove (Kyoto) – A serene and atmospheric path surrounded by towering bamboo stalks, a popular spot for tranquil walks and photography."
      ];
    
      const beautifulNature = [
        "Arashiyama Bamboo Grove (Kyoto) – A stunning bamboo forest with tall, swaying bamboo stalks creating a peaceful and picturesque environment.",
        "Oirase Gorge (Aomori) – A scenic river valley known for its waterfalls, crystal-clear streams, and vibrant autumn foliage, ideal for hiking.",
        "Aso Volcano (Kumamoto) – One of the largest active volcanoes in the world, offering dramatic landscapes and hiking trails with views of its vast caldera.",
        "Lake Kawaguchi (near Mount Fuji) – One of the Fuji Five Lakes, offering stunning reflections of Mount Fuji, especially during cherry blossom and autumn foliage seasons.",
        "Shirakami-Sanchi (Honshu) – A UNESCO World Heritage site, home to ancient beech forests, mountain hiking trails, and pristine natural scenery."
      ];    

    return (
        <>
        <main>
        <section class="content-grid">
        <Card
          image={tokyoImg}
          title="Popular Cities"
          content={popularCities}
        />
        <Card
          image={fushimiInari}
          title="Famous Landmarks"
          content={famousLandmarks}
        />
        <Card
          image={mountFuji}
          title="Beautiful Nature"
          content={beautifulNature}
        />
        </section>

        <section class="description">
            <p class="home-text">
                Japan has a vast amount of amazing destinations to visit.
                Want to see the neon lights of the big city, or the beautiful
                landscapes of the countryside? Check out the lists above to
                find what you're looking for.
            </p>
        </section>

    <section class="map-section">
        <h2>Explore Japan's Hotspots</h2>
        <p class="map-description">
            Discover hotspots in Japan. Use the map below to explore various regions and find your next destination!
        </p>
    </section>
    </main>
    </>
    )
}

export default Destinations;