import Navbar from "./components/layout/Navbar";
import Saidebar from "./components/layout/Saidebar";
import Router from "./router";

const App = () => {
  return (
    <div className='w-full h-screen flex flex-1 overflow-hidden'>
      <Saidebar />
      <div className='w-full bg-[#F5F5F5]'>
        <Navbar />
        <div className='w-full pb-8 overflow-y-auto max-h-[calc(100vh-85px)]'>
          <Router />
        </div>
      </div>
    </div>
  );
};

export default App;
