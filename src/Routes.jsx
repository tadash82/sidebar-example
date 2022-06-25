import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="statistics" element={<h1>Statistics</h1>} />
      <Route path="customers" element={<h1>Customers</h1>} />
      <Route path="diagrams" element={<h1>Diagrams</h1>} />
    </Routes>
  );
}

export default Rotas;
