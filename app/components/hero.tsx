import foto from "../foto.jpg";

function Profile() {
    return <img src={foto.src} alt="Tsalitsa Hasna" className="foto"/>;
  }
export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-500 font-bold">CV ONLINE</h1>
        <h1 className="text-3xl text-gray-500">Tsalitsa Hasna</h1>
        <Profile/>
        <p className="text-gray-500">
        Saya adalah mahasiswa jurusan Sistem Informasi di Universitas Ma'soem. 
        Saat ini, saya sedang mendalami berbagai aspek teknologi informasi, 
        seperti pengembangan perangkat lunak, manajemen data, dan analisis sistem. 
        Selain itu, saya tertarik untuk mengembangkan keterampilan dalam bidang yang berkaitan 
        dengan inovasi teknologi dan pemecahan masalah berbasis data.
        </p>
      </div>

    );
}