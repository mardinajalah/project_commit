import { ReactNode } from "react";
import { FontAwesomeIcon, faBoxesStacked, faMoneyBillTrendUp, faUsers } from "@/lib/FontAwesome";
import BarChartComponent from "./BarChart";
import Table from "./Table";
const Dasboard = () => {
  return (
    <div className='w-[95%] mx-auto'>
      <div className='flex justify-between'>
        <BoxCard total="120" text="Total Produk">
          <FontAwesomeIcon icon={faBoxesStacked} />
        </BoxCard>
        <BoxCard total="4,267" text="Total Transaksi">
          <FontAwesomeIcon icon={faMoneyBillTrendUp} />
        </BoxCard>
        <BoxCard total="876" text="Total Pelanggan">
          <FontAwesomeIcon icon={faUsers} />
        </BoxCard>
      </div>
      <div className="flex justify-between mt-5">
        <div className="bg-[#FFFFFF] w-[66.3%] shadow-md rounded-2xl">
          <h1 className="text-3xl font-bold m-5">Transaksi Perbulan</h1>
          <BarChartComponent />
        </div>
        <div className="bg-[#FFFFFF] w-[32%] shadow-md rounded-2xl">
          <h1 className="text-3xl font-bold m-5">Target bulanan</h1>
        </div>
      </div>
      <div className="mt-5 bg-[#FFFFFF] shadow-md rounded-2xl p-5">
        <Table />
      </div>
    </div>
  );
};

const BoxCard = ({children, total, text} : {children: ReactNode, total: string, text: string}) => {
  return (
    <div className='bg-[#FFFFFF] w-[32%] shadow-md rounded-2xl py-3 px-5'>
      <div className='text-4xl mb-2 bg-[#f5f5f5] text-[#6C0AFF] max-w-fit p-2 rounded-2xl'>
        {children}
      </div>
      <div>
        <h1>{text}</h1>
        <h1 className='font-bold text-2xl'>{total}</h1>
      </div>
    </div>
  );
};

export default Dasboard;
