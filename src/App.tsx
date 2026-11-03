import { BrowserRouter, Routes, Route } from "react-router-dom";
import RespuestasEmbajador from "./pages/RespuestasEmbajador";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RespuestasEmbajador />} />
        <Route path="/respuestas-embajador" element={<RespuestasEmbajador />} />
        <Route path="*" element={<RespuestasEmbajador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
