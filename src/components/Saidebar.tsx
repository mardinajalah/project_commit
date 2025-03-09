import { FontAwesomeIcon, faGauge, faBox, faMoneyBillTransfer, faUsers, faFilePen, faCircleUser } from "../lib/FontAwesome"

const Saidebar = () => {
  return (
    <div className='w-3xs bg-[#fff] text-center drop-shadow-md'>
      <h1 className='text-3xl text-[#6C0AFF] font-bold mt-5'>KSP POTER</h1>
      <ul className='mt-40 flex flex-col gap-2 capitalize text-xl'>
        <li className='bg-[#F6E0FF] mx-5 py-2 rounded'>
          <FontAwesomeIcon icon={faGauge} />
          <a className='ml-2' href='/'>beranda</a>
        </li>
        <li className="mx-5 py-2">
          <FontAwesomeIcon icon={faBox} />
          <a className='ml-2' href='/'>produk</a>
        </li>
        <li className="mx-5 py-2">
          <FontAwesomeIcon icon={faMoneyBillTransfer} />
          <a className='ml-2' href='/'>tagihan</a>
        </li>
        <li className="mx-5 py-2">
          <FontAwesomeIcon icon={faCircleUser} />
          <a className='ml-2' href='/'>anggota</a>
        </li>
        <li className="mx-5 py-2">
          <FontAwesomeIcon icon={faFilePen} />
          <a className='ml-2' href='/'>laporan</a>
        </li>
        <li className="mx-5 py-2">
          <FontAwesomeIcon icon={faUsers} />
          <a className='ml-2' href='/'>karyawan</a>
        </li>
      </ul>
    </div>
  );
};

export default Saidebar;
