import Header from "../src/pages/Header";
import Intro from "../src/pages/Intro";
import About from "../src/pages/About";
import Contacts from "./pages/Contacts";
import Skills from "../src/pages/Skills";
const App = () => {
  return (
    <div className=" ">
      <Header />
      <Intro />
      <About />

      <Skills />
      <Contacts />
    </div>
  );
};

export default App;
