import React from 'react';
import './About.css';

const About = () => {
  const aboutSections = [
    {
      text: `Welcome to the world of Movies - your ultimate destination for streaming your favorite movies and TV shows. With our cutting-edge technology, Movies offers a seamless and intuitive streaming experience like no other. Whether you're a movie buff or a TV show addict, we have something for everyone`,
    },
    {
      text: 'Get ready to experience the ultimate cinematic journey with our vast collection of movies from different genres including action, comedy, drama, romance, and more. With a wide variety of titles available, you can binge-watch your favorite series or discover something new. Our platform offers a rich library of movies and shows from around the world, catering to a diverse audience.',
    },
    {
      text: 'Our user-friendly interface ensures that you can navigate through the app with ease. You can search for movies by title, genre, and even by actor, director, or keyword. The app also offers personalized recommendations based on your viewing history and preferences, ensuring that you never run out of things to watch.',
    },
    {
      text: 'We understand that every viewer has their own unique taste in movies and TV shows, which is why we offer customizable profiles. You can create multiple profiles for different members of your family or group, each with their own viewing history and recommendations. This means that you can pick up where you left off, no matter who is using the app.',
    },
    {
      text: `With Movies, you don't have to worry about buffering or lagging. Our advanced streaming technology ensures that you can watch your favorite movies and TV shows without interruptions, no matter where you are. You can even download your favorite titles and watch them offline, making it perfect for long flights or road trips.`,
    },
  ];

  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      {aboutSections.map((section, index) => (
        <div className="about-section" key={index}>
          <p className="about-text">{section.text}</p>
        </div>
      ))}
       <p className="about-copyright">
        © Copyright Movies. All Rights Reserved
      </p>
    </div>
  );
};

export default About;
