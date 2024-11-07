import React from "react";

const InformasiPribadi: React.FC = () => {
  return (
    <div className="container mx-auto p-2 text-center pt-15">
      <h2 className="text-2xl mx-auto p-2 text-center text-gray-500">Informasi Pribadi</h2>
      <div className="rounded-lg bg-gray-300 p-2 my-5">
      <div className="container mx-auto text-black">
        <p><strong>Tempat Lahir:</strong> Bandung</p>
        <p><strong>Tanggal Lahir:</strong> 3 Agustus 2004</p>
        <p><strong>Gender:</strong> Perempuan</p>
        <p><strong>Tinggi Badan:</strong> 151 cm</p>
        <p><strong>Status Pernikahan:</strong> Belum Menikah</p>
        <p><strong>Whatsapp:</strong> 081223888128</p>
        <p><strong>Email:</strong> tsal.hasna@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default InformasiPribadi;
