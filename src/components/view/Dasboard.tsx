import { FontAwesomeIcon, faBoxesStacked, faMoneyBillTrendUp, faUsers } from "@/lib/FontAwesome";
import BarChartComponent from "../layout/BarChart";
import Table from "../layout/Table";
const Dasboard = () => {
  const data = [
    {
      text: "Total Produk",
      total: "120",
      icon: faBoxesStacked
    },
    {
      text: "Total Transaksi",
      total: "4,267",
      icon: faMoneyBillTrendUp
    },
    {
      text: "Total Pelanggan",
      total: "876",
      icon: faUsers
    }
  ]
  return (
    <div className='w-[95%] mx-auto'>
      <div className='flex justify-end my-7'>
        <button className='bg-[#6C0AFF] text-white px-10 py-3 text-2xl rounded-full font-bold cursor-pointer'>Transaksi Baru</button>
      </div>
      <div className='flex justify-between'>
        {data.map((item, index) => (
          <div key={index} className='bg-[#FFFFFF] w-[32%] shadow-md rounded-2xl py-3 px-5'>
            <div className='text-4xl mb-2 bg-[#f5f5f5] text-[#6C0AFF] max-w-fit p-2 rounded-2xl'>
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div>
              <h1>{item.text}</h1>
              <h1 className='font-bold text-2xl'>{item.total}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-between mt-5'>
        <div className='bg-[#FFFFFF] w-[66.3%] shadow-md rounded-2xl'>
          <h1 className='text-3xl font-bold m-5'>Transaksi Perbulan</h1>
          <BarChartComponent />
        </div>
        <div className='bg-[#FFFFFF] w-[32%] shadow-md rounded-2xl'>
          <h1 className='text-3xl font-bold m-5'>Target bulanan</h1>
        </div>
      </div>
      <div className='mt-5 bg-[#FFFFFF] shadow-md rounded-2xl p-5'>
        <Table />
      </div>
    </div>
  );
};

export default Dasboard;
