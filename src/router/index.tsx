import { Routes, Route } from "react-router-dom";
import Dasboard from "@/components/view/Dasboard";
import Barang from "@/components/view/Barang";
import Tagihan from "@/components/view/Tagihan";
import Anggota from "@/components/view/Anggota";
import Laporan from "@/components/view/Laporan";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Dasboard />} />
      <Route path='/barang' element={<Barang />} />
      <Route path='/tagihan' element={<Tagihan />} />
      <Route path='/anggota' element={<Anggota />} />
      <Route path='/laporan' element={<Laporan />} />
    </Routes>
  );
};

export default Router;
