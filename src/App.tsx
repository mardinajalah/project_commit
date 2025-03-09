import Dasboard from "./components/Dasboard";
import Navbar from "./components/Navbar";
import Saidebar from "./components/Saidebar";

const App = () => {
  return (
    <div className='w-full h-screen flex flex-1 overflow-hidden'>
      <Saidebar />
      <div className='w-full bg-[#F5F5F5]'>
        <Navbar />
        <div className='w-full pb-8 overflow-y-auto max-h-[calc(100vh-85px)]'>
          <div className='flex justify-end mr-10 my-7'>
            <button className='bg-[#6C0AFF] text-white px-10 py-3 text-2xl rounded-full font-bold cursor-pointer'>Transaksi Baru</button>
          </div>
          <Dasboard />
        </div>
      </div>
    </div>
  );
};

export default App;
