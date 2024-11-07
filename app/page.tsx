"use client";
import Hero from "./components/hero";
import "./style.css";
import RiwayatPendidikan from "./components/riwayatPend";
import RiwayatKerja from "./components/riwayatKerja";
import ContactForm from "./components/contact";
import Skill from "./components/skill";
import InformasiPribadi from "./components/info";
import { useState } from "react";
import Hobby from "./components/hobby";
import Color from "./components/color";

export default function MyApp() {
  const [bgColor, setBgColor] = useState("bg-sage-500");
  
  const handleColorChange = (color: string) => {
    setBgColor(color);
  };

  return (
    <section className={`min-h-screen ${bgColor}`}>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatKerja />
      <Skill/>
      <InformasiPribadi/><br />
      <Hobby/><br />
      <ContactForm />
      <Color onColorChange={handleColorChange} />
    </section>
  );
};