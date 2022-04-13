import Contact from "./components/contact/Contact";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import './app.scss';
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="App">
      <Topbar menuActive={menuActive} setMenuActive={setMenuActive} />  
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
