import foto from "../foto.jpg";

function Profile() {
    return <img src={foto.src} alt="Tsalitsa Hasna" className="foto"/>;
  }
export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
        <h1 className="text-3xl">Tsalitsa Hasna</h1>
        <Profile/>
        <p>
          Saya seorang mahasiswa di Universitas Ma'soem prodi Sistem Informasi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nam ex accusantium iure ut animi debitis expedita fuga eligendi quibusdam voluptates.
        </p>
      </div>

    );
}