
import Hero from "./components/hero";
import "./style.css";
import RiwayatPendidikan from "./components/riwayatPend";
import RiwayatKerja from "./components/riwayatKerja";
import FavColor from "./components/favColor";




export default function Gallery() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatKerja />
      {/* <FavColor /> */}
    </section>
  );
}