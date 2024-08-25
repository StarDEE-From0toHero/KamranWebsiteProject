import Card from "./components/Card";
import Navbar from "./components/Navbar";
import info from "./info"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-[#F2EDEB] grid grid-cols-1 py-24 px-14 gap-x-6 gap-y-14  sm:grid-cols-2  md:grid-cols-3 md:px-28">
        <h1 className="border border-black rounded-full font-bold text-5xl text-white bg-blue-800 flex justify-center items-center h-36">OUR<span className="text-yellow-400">CREW</span></h1>
      {
        info.map((data) => (
          <Card 
            key={data.id}
            {...data}
          />
        ))
      }
      </div>
      
    </main>
  );
};
