import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import TeamDetail from "./TeamDetail";
import Teams from "./Teams";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teamDetail" element={<TeamDetail />} />
      </Routes>
    </>
  );
}

export default App;
