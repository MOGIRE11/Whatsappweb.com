import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import CardSkeleton from "./components/CardSkeleton";
import Navbar from "./components/Navbar";
import OTPInput from "./components/OTPInput";

function App() {

  return (
    <>
      <div className="p-4 lg:px-8 flex flex-wrap justify-center items-start gap-6">
        <Card1 />
        <Card5 />
        <Card3 />
        <Card2 />
        <Card4 />
        <Navbar />
        <CardSkeleton />
        <OTPInput />
      </div>
    </>
  );
}

export default App
