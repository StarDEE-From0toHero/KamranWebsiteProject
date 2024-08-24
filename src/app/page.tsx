import Card from "./components/Card";
import Navbar from "./components/Navbar";
import info from "./info";

export default function Home() {
  
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-3">
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
}
