"use client";

import { useState } from "react";

export default function FavColor() {
    const [warna, setWarna] = useState("Kuning");
    return(
        <div className="container mx-auto p-4 text-center">
            <h1>Warna Favorit saya adalah {warna}</h1>
            <hr className="m-10"/>
            <p>Ubah state warna ke warna :</p>
            <button className="bg-yellow-200 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Kuning")}>Kuning</button>

            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Abu-Abu")}>Abu-Abu</button>

            <button className="bg-green-800 hover:bg-green-950 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Hijau")}>Hijau</button>

            <button className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Orange")}>Orange</button>

            <button className="bg-blue-300 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded"
            onClick={() => setWarna("Biru")}>Biru</button>
        </div>
    );
}