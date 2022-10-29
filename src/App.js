import "./App.css";
import Form from "./Components/Form";
import Intro from "./Components/Intro";

function App() {
  const background = "./assets/bg-intro-desktop.png";
  return (
    <div className="my-64 mx-10 px-10 py-24 bg-[#ff7a7a] xl:flex" style={{ backgroundImage: `url(${background})` }}>
      {/* bungkus tulisan atas */}
      <Intro />
      {/* bungkus tulisan yang bawah + FORM */}
      <Form />
    </div>
  );
}

export default App;
