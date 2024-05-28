import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import RefPage from "./pages/RefPage";
import TaskPage from "./pages/TaskPage";
import TapPage from "./pages/TapPage";
import BoostPage from "./pages/BoostPage";
import StatsPage from "./pages/StatsPage";
import { TelegramProvider } from "./context/TelegramContext";
import socketIO from "socket.io-client";
import { useEffect } from "react";
import TrophyPage from "./pages/TrophyPage";

const socket = socketIO.connect("https://socket.spxswap.com");

function App() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  useEffect(() => {
    if (pathname !== "tap") {
      socket.emit("submit", "");
    }
  }, [pathname]);
  return (
    <div className="app">
      <TelegramProvider>
        <Routes>
          <Route path="/ref" exact element={<RefPage />} />
          <Route path="/task" exact element={<TaskPage />} />
          <Route path="/" element={<Navigate to="/tap" replace />} />
          <Route path="/tap" exact element={<TapPage socket={socket} />} />
          <Route path="/boost" exact element={<BoostPage />} />
          <Route path="/stats" exact element={<StatsPage />} />
          <Route path="/trophy" exact element={<TrophyPage />} />
        </Routes>
      </TelegramProvider>
    </div>
  );
}

export default App;
