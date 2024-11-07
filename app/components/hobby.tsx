import React from 'react';
import hobby1 from "./assets/film.jpg";
import hobby2 from "./assets/makan.jpg";
import hobby3 from "./assets/music.jpg";
import hobby4 from "./assets/sleep.jpg";

const Hobbies = [
    { id: 3, name: "Listening to Music", image: hobby3 },
  { id: 1, name: "Watching Movies", image: hobby1 },
  { id: 2, name: "Food Enthusiast", image: hobby2 },
  { id: 4, name: "Relaxing", image: hobby4 },
];

export default function Hobby() {
  return (
    <section className="container mx-auto p-4 text-center">
      <h2 className="text-2xl text-gray-500">My Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        {Hobbies.map((hobby) => (
          <div key={hobby.id} className=" rounded-lg bg-gray-300 text-black p-4">
            <img src={hobby.image.src} alt={hobby.name} className="w-full h-auto rounded-md" />
            <div className="mt-2">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
