export default function RiwayatKerja() {
    return (
        <div className="container mx-auto p-2 text-center pt-15">
        <h2 className="text-2xl text-gray-500">Riwayat Pekerjaan</h2>
        <RowRiwayatKerja tahun="2020" instansi="Telkomsel" jabatan="Pegawai" />
        <RowRiwayatKerja tahun="2021" instansi="SMP Plus Al - Aqsha" jabatan="Tata Usaha" />
        <RowRiwayatKerja tahun="2022" instansi="PT Jaya Sentosa" jabatan="Data Analis" />
        <RowRiwayatKerja tahun="2023" instansi="Ma'soem Grup" jabatan="Audit" />
      </div>
    );
}

interface RowRiwayatKerjaProps {
    tahun: string;
    instansi: string;
    jabatan: string;
  }
  
  function RowRiwayatKerja(props: RowRiwayatKerjaProps) {
    return (
      <div className=" rounded-lg bg-gray-300 p-2 my-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1 text-black">
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4">{props.jabatan}</div>
        </div>
      </div>
      </div>
    );
  }
  