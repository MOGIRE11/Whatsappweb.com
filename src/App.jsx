import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <div className="p-4 lg:px-8 flex flex-wrap justify-center items-start gap-4">
        <Card1 />
        <Navbar />
        <Card2 />
        <Card3 />
      </div>
    </>
  );
}

export default App
