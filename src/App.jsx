// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChristmasCountdown from "./components/ChristmasCountdown";
import Aniversary from "./components/Aniversary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChristmasCountdown />} />
        <Route path="/aniversary" element={<Aniversary />} />
      </Routes>
    </Router>
  );
}

export default App;
