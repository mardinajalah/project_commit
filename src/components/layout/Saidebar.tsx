import { FontAwesomeIcon, faGauge, faBox, faMoneyBillTransfer, faFilePen, faCircleUser } from "../../lib/FontAwesome";
import { Link } from "react-router-dom";

const Saidebar = () => {
  const data = [
    {
      to: "/",
      icon: faGauge,
      text: "beranda",
    },
    {
      to: "/barang",
      icon: faBox,
      text: "barang",
    },
    {
      to: "/tagihan",
      icon: faMoneyBillTransfer,
      text: "tagihan",
    },
    {
      to: "/anggota",
      icon: faCircleUser,
      text: "anggota",
    },
    {
      to: "/laporan",
      icon: faFilePen,
      text: "laporan",
    },
  ];
  return (
    <div className='w-3xs bg-[#fff] text-center drop-shadow-md'>
      <h1 className='text-3xl text-[#6C0AFF] font-bold mt-5'>KSP POTER</h1>
      <ul className='mt-40 flex flex-col gap-2 capitalize text-xl'>
        {data.map((item, index) => (
          <Link to={item.to} key={index} className='mx-5 py-2'>
            <FontAwesomeIcon icon={item.icon} />
            <span className='ml-2'>{item.text}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Saidebar;
