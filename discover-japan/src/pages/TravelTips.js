import React from 'react';
import Card from '../components/Card';
import transportationImg from '../assets/images/transportation.jpg';
import budgetingImg from '../assets/images/budgeting.jpg';
import etiquetteImg from '../assets/images/etiquette.jpg';

function TravelTips() {

    const transportationTips = [
        "Get a Japan Rail Pass (JR Pass) – If you're planning to travel between cities, a JR Pass is a cost-effective option for unlimited rides on JR trains, including the Shinkansen (bullet trains), for a set period of time.",
        "Use Suica or Pasmo cards – These rechargeable smart cards can be used on most trains, buses, and even at some convenience stores. They’re a convenient way to avoid buying individual tickets each time you travel.",
        "Shinkansen for long-distance travel – The Shinkansen (bullet train) is the fastest way to travel between major cities like Tokyo, Kyoto, and Osaka, known for its punctuality and comfort.",
        "City buses and subways – Major cities like Tokyo, Kyoto, and Osaka have extensive and reliable subway and bus networks. Google Maps or local apps like Hyperdia can help with routes and schedules.",
        "Bicycle rentals – Many cities offer bike rentals, a fun and efficient way to explore neighborhoods and scenic areas like Kyoto’s temples or the city of Nara."
      ];
    
      const budgetingTips = [
        "Use Convenience Stores (Konbini) – Convenience stores like 7-Eleven, Lawson, and FamilyMart offer inexpensive, high-quality meals and snacks, which can save you money on dining out.",
        "Eat at Local Izakayas and Ramen Shops – Izakayas (Japanese pubs) and small ramen shops are often affordable, offering delicious meals for much less than high-end restaurants.",
        "Take Advantage of Free Attractions – Many beautiful shrines, temples, and parks in Japan are free to visit, especially in Kyoto and Tokyo. Exploring neighborhoods like Harajuku, Shibuya, and Asakusa costs nothing and is full of culture.",
        "Use Discount Passes for Tourist Attractions – Many cities offer tourist passes that provide discounts on attractions and transportation. Examples include the Tokyo Metro 24-hour pass or Kyoto’s bus pass.",
        "Shop at 100 Yen Stores – These stores (like Daiso) offer a wide range of items, from snacks and souvenirs to household goods, all at budget-friendly prices."
      ];
    
      const etiquetteTips = [
        "Bowing – Bowing is a common way to greet, show respect, or thank someone. A slight bow is sufficient for most casual interactions, but deeper bows are used in formal situations.",
        "Shoes Off Indoors – In many traditional homes, ryokan (Japanese inns), temples, and some restaurants, it's customary to remove your shoes before entering. You’ll usually be provided with indoor slippers.",
        "Quiet in Public – Japan values a calm and peaceful environment in public spaces. Speak softly on trains and avoid making phone calls while riding public transportation.",
        "Tipping is Uncommon – Tipping is not a part of Japanese culture, and in some cases, it can be considered rude. Excellent service is already expected.",
        "Respect for Temples and Shrines – When visiting temples and shrines, follow the correct protocol, such as washing your hands at the purification fountain, bowing at the entrance, and being respectful in sacred areas."
      ];

    return (
        <>
        <main>
        <section class="content-grid home-page">
        <Card
          image={transportationImg}
          title="Transportation"
          content={transportationTips}
        />
        <Card
          image={budgetingImg}
          title="Budgeting"
          content={budgetingTips}
        />
        <Card
          image={etiquetteImg}
          title="Etiquette"
          content={etiquetteTips}
        />
        </section>

        <section class="faq">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
                <p><strong>I need a visa to visit Japan?</strong></p>
                <p>Visa requirements vary by nationality. Citizens from many countries, including the US, Canada, and most EU nations, can visit Japan visa-free for up to 90 days for tourism purposes. Be sure to check Japan's official embassy website for up-to-date information.</p>
            </div>
            <div class="faq-item">
                <p><strong>Is Japan an expensive country to visit?</strong></p>
                <p>Japan can be expensive, but it's possible to travel on a budget. Costs for food, accommodations, and transportation can vary widely, but there are affordable options like hostels, capsule hotels, and convenient public transportation systems such as JR Passes for tourists.</p>
            </div>
            <div class="faq-item">
                <p><strong>What is the best time of year to visit Japan?</strong></p>
                <p>The best time to visit Japan depends on your interests. Spring (March to May) is popular for cherry blossoms, while fall (September to November) offers beautiful foliage. Summers are hot but are great for festivals, and winter (December to February) is ideal for skiing and seeing snow-covered temples.

                </p>
            </div>
        </section>

        <section class="submit-section">
            <p>If you have been to Japan and have any tips you would like to share, please submit them below!</p>
            <textarea placeholder="Your tips here"></textarea>
            <button type="submit">Submit</button>
        </section>
    </main>
        </>
    )
}

export default TravelTips;