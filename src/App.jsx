import NewsCard from "./components/NewsCard";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <div className="p-4 lg:px-8 flex flex-wrap gap-4 items-center justify-center">
        <NewsCard />
        <Navbar />
      </div>
    </>
  );
}

export default App
