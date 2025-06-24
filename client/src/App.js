import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddMilestonePage from "./pages/AddMilestonePage";
import MilestoneListPage from "./pages/MilestoneListPage";
import TipsPage from "./pages/TipsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddMilestonePage />} />
        <Route path="/milestones" element={<MilestoneListPage />} />
        <Route path="/tips/:milestoneId" element={<TipsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
