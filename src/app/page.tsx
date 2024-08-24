import Card from "./components/Card";
import Navbar from "./components/Navbar";
import info from "./info"

export default function Home() {
  
  return (
    <main>
      <Navbar />
      {
        info.map((data) => (
          <Card 
            key={data.id}
            {...data}
          />
        ))
      }
    </main>
  );
}
