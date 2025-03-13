import {FontAwesomeIcon, faFileImport, faFileExport} from "@/lib/FontAwesome"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface tbBarang {
  id_barang: string;
  nama_barang: string;
  harga_beli: string;
  harga_ecer: string;
  harga_grosir: string;
  Stok: string;
  Stok_minimal: string;
  barcode: string;
  gambar: string;
  kategori: string;
  ukuran: string;
  satuan: string;
  status_aktif: string;
}

const tbBarang: tbBarang[] = [
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
  { id_barang: "211092883", nama_barang: "Rokok surya 12", harga_beli: "Rp 23.000", harga_ecer: "Rp 23.000", harga_grosir: "Rp 23.000", Stok: "1", Stok_minimal: "1", barcode: "211092883", gambar: "Rokok surya 12", kategori: "Rokok", ukuran: "1", satuan: "1", status_aktif: "yes",},
];

const itemsPerPage = 9;


const dataButton = [
  {
    text: "import",
    icon: faFileImport
  },
  {
    text: "export",
    icon: faFileExport
  },
  {
    text: "tambah barang",
  },
]

const Barang = () => {
  const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(tbBarang.length / itemsPerPage);
  
    const paginatedData = tbBarang.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-between my-7">
        <h1 className="text-3xl font-bold">List Barang</h1>
        <div className="flex gap-3">
          {dataButton.map((item, index) => (
            <button key={index} className="bg-[#6C0AFF] text-xl font-bold rounded-full text-white px-5 py-3 hover:cursor-pointer">
              {item.icon && <FontAwesomeIcon className="mr-2" icon={item.icon} />}
              {item.text}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#FFFFFF] shadow-md rounded-2xl p-5">
      <div className="relative border rounded-2xl h-[calc(100vh-270px)] overflow-y-auto">
        <Table className="text-center">
          <TableHeader>
            <TableRow>
              <TableHead>ID Barang</TableHead>
              <TableHead>Nama Barang</TableHead>
              <TableHead>Harga Beli</TableHead>
              <TableHead>Harga Ecer</TableHead>
              <TableHead>Harga Grosir</TableHead>
              <TableHead>Stok</TableHead>
              <TableHead>Stok Minimal</TableHead>
              <TableHead>Barcode</TableHead>
              <TableHead>Gambar</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Ukuran</TableHead>
              <TableHead>Satuan</TableHead>
              <TableHead>Status Aktif</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((transaction) => (
              <TableRow key={transaction.id_barang}>
                <TableCell>{transaction.id_barang}</TableCell>
                <TableCell>{transaction.nama_barang}</TableCell>
                <TableCell>{transaction.harga_beli}</TableCell>
                <TableCell>{transaction.harga_ecer}</TableCell>
                <TableCell>{transaction.harga_grosir}</TableCell>
                <TableCell>{transaction.Stok}</TableCell>
                <TableCell>{transaction.Stok_minimal}</TableCell>
                <TableCell>{transaction.barcode}</TableCell>
                <TableCell>{transaction.gambar}</TableCell>
                <TableCell>{transaction.kategori}</TableCell>
                <TableCell>{transaction.ukuran}</TableCell>
                <TableCell>{transaction.satuan}</TableCell>
                <TableCell>{transaction.status_aktif}</TableCell>
                <TableCell>
                  <span className="text-green-500 font-bold">edit</span>
                  <span className="text-red-500 font-bold">hapus</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination */}
        <div className="absolute bottom-0 w-full flex items-center justify-between mt-4 border-t p-4">
          <Button variant="ghost" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            ← Previous
          </Button>
          <span>Page {currentPage} of {totalPages}</span>
          <Button variant="ghost" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            Next →
          </Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Barang