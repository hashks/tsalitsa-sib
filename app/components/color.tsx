import { useState } from "react";

type FavColorProps = {
  onColorChange: (color: string) => void;
};

export default function Color({ onColorChange }: FavColorProps) {
  const [warna, setWarna] = useState("Hijau");

  const handleClick = (newColor: string, bgColor: string) => {
    setWarna(newColor);
    onColorChange(bgColor);
  };

  return (
    <div className="container mx-auto p-4 text-center text-gray-500">
      <h1>Warna Favorit Saya adalah {warna}</h1>
      <hr className="m-5" />
      <p>Ubah tema ke warna:</p>
      
      <button
        className="bg-sage-300 hover:bg-sage-500 text-white font-bold py-2 px-4 rounded m-2"
        onClick={() => handleClick("Hijau", "bg-sage-500")}
      >
        Hijau
      </button>
      
      <button
        className="bg-gray-900 hover:bg-black text-white font-bold py-2 px-4 rounded m-2"
        onClick={() => handleClick("Hitam", "bg-black")}
      >
        Gelap
      </button>
      
      <button
        className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded m-2 border border-gray-300"
        onClick={() => handleClick("Putih", "bg-white")}
      >
        Terang
      </button>
    </div>
  );
}
