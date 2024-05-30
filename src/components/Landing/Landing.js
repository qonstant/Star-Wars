import React from 'react';
import "./styles/landing.css";

const Landing = () => {
  return (
    <div id="app">
      <div className="background"></div>
      <div className="fade"></div>
      <div className="text-container">
        <div className="text">
        <p>Welcome to the ultimate Star Wars fan site! Explore the galaxy far, far away with our comprehensive app powered by the Star Wars API (SWAPI). Dive into detailed information about your favorite characters, planets, starships, and films. Whether you're a seasoned Jedi Master or a young Padawan, there's something here for every Star Wars enthusiast.</p>

        <p>Star Wars has captured the hearts and imaginations of fans worldwide since its debut in 1977. Created by George Lucas, this epic space opera tells the story of the struggle between the heroic Rebel Alliance and the evil Galactic Empire. With iconic characters like Luke Skywalker, Darth Vader, Princess Leia, and Yoda, the Star Wars saga spans generations and continues to inspire new adventures and stories.</p>

        <p>Our app offers a rich and interactive experience, bringing the vast Star Wars universe to your fingertips. Browse through the extensive database of characters, learn about different planets, and discover the specifications of various starships and vehicles. Stay up-to-date with the latest films and series, and delve into the lore and history of this beloved franchise.</p>

        <p>May the Force be with you as you embark on this exciting journey through the Star Wars galaxy!</p>

        <p>This website was created by Rakymzhan Zhabagin.</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
