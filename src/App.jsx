import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <div className="p-4 lg:px-8 flex flex-wrap gap-4 items-center justify-center">
        <Card1 />
        <Navbar />
        <Card2 />
      </div>
    </>
  );
}

export default App
