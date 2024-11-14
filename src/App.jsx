import "./App.css";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies.jsx";
import Main from "./pages/Main.jsx";
import Price from "./pages/Price.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        {/* <Route path="/price" element={<Price />} /> */}
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
