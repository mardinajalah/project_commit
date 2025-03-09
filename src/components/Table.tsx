import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Transaction {
  id: string;
  name: string;
  total: string;
  paymentMethod: string;
  date: string;
}

const transactions: Transaction[] = [
  { id: "211092883", name: "Edoy Prihatin", total: "Rp 2.330.000", paymentMethod: "Cash", date: "04/03/2025" },
  { id: "211092234", name: "Farhan Oke", total: "Rp 5.520.000", paymentMethod: "Cashbon", date: "04/03/2025" },
  { id: "231092232", name: "Ubaidillah", total: "Rp 1.790.000", paymentMethod: "Cash", date: "04/03/2025" },
  { id: "212233245", name: "Surai", total: "Rp 4.355.500", paymentMethod: "Cashbon", date: "04/03/2025" },
  { id: "233164774", name: "Michigo Inisan", total: "Rp 12.890.400", paymentMethod: "Cash", date: "04/03/2025" },
  { id: "237573488", name: "Syaif Hakam", total: "Rp 3.420.000", paymentMethod: "Cashbon", date: "04/03/2025" },
  { id: "246765873", name: "Mardin Suhu", total: "Rp 1.790.000", paymentMethod: "Cash", date: "04/03/2025" },
  { id: "212233245", name: "Aqua Gelas", total: "Rp 4.355.500", paymentMethod: "Cashbon", date: "04/03/2025" },
];

const itemsPerPage = 5;

const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const paginatedData = transactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="border rounded-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID Transaksi</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Metode Pembayaran</TableHead>
            <TableHead>Waktu Transaksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.name}</TableCell>
              <TableCell>{transaction.total}</TableCell>
              <TableCell>{transaction.paymentMethod}</TableCell>
              <TableCell>{transaction.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 border-t p-4">
        <Button variant="ghost" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          ← Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button variant="ghost" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next →
        </Button>
      </div>
    </div>
  );
}

export default TransactionTable