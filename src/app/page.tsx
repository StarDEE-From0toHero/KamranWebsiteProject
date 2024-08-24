import Card from "./components/Card";
import Navbar from "./components/Navbar";

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
};
