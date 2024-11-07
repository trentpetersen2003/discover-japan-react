import React from 'react';
import japaneseFestival from '../assets/images/festival.jpg';
import blossomFestival from '../assets/images/cherry_blossom_festival.jpg';
import gionMatsuri from '../assets/images/gion_matsuri.jpg';
import obonFestival from '../assets/images/obon_festival.jpg';
import sapporoFestival from '../assets/images/sapporo_snow_festival.jpg';
import tanabataFestival from '../assets/images/tanabata_festival.jpg';
import setsubunFestival from '../assets/images/setsubun.jpg';

function CulturalExperiences() {
    return (
        <>
        <main>
        <p class="home-text">
            Japan's rich culture offers unique experiences like tea ceremonies, temples,
            and festivals, giving visitors a deep connection to its traditions and history.
            Don't miss the chance to immerse yourself in Japan's timeless heritage.
        </p>
        <section class="hero">
            <img src={japaneseFestival} alt="Japanese Cultural Festival" class="hero-image"/>
        </section>

<section class="popular-events">
    <h2>Popular Cultural Events in Japan</h2>
    <div class="events-container">
        <div class="event-card">
            <img src={blossomFestival} alt="Cherry Blossom Festival"/>
            <h3>Cherry Blossom Festival</h3>
            <p>March - April</p>
            <p>Witness the beauty of cherry blossoms as Japan celebrates spring with hanami (flower viewing) parties in parks across the country.</p>
        </div>
        <div class="event-card">
            <img src={gionMatsuri} alt="Gion Matsuri"/>
            <h3>Gion Matsuri</h3>
            <p>July</p>
            <p>Held in Kyoto, this famous festival features elaborate parades, traditional costumes, and lively celebrations.</p>
        </div>
        <div class="event-card">
            <img src={obonFestival} alt="Obon Festival"/>
            <h3>Obon Festival</h3>
            <p>August</p>
            <p>A time to honor ancestors, with lantern festivals, dances, and family gatherings, particularly popular in rural areas.</p>
        </div>
        <div class="event-card">
            <img src={sapporoFestival} alt="Sapporo Snow Festival"/>
            <h3>Sapporo Snow Festival</h3>
            <p>February</p>
            <p>Marvel at stunning ice and snow sculptures in Sapporo, Hokkaido, attracting millions of visitors each winter.</p>
        </div>
        <div class="event-card">
            <img src={tanabataFestival} alt="Tanabata Festival"/>
            <h3>Tanabata Festival</h3>
            <p>July - August</p>
            <p>Also known as the "Star Festival," this event celebrates the meeting of two star-crossed lovers with colorful decorations and street parades.</p>
        </div>
        <div class="event-card">
            <img src={setsubunFestival} alt="Setsubun"/>
            <h3>Setsubun</h3>
            <p>February</p>
            <p>This festival marks the beginning of spring in Japan, where people throw beans to drive away evil spirits and bring good fortune.</p>
        </div>
    </div>
</section>
    </main>
        </>        
    )
}

export default CulturalExperiences