import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Events from "./components/Events";
import Artists from "./components/Artists";
import Artist from "./components/Artist";
import NotFound from "./components/NotFound";
import Event from "./components/Event";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventName" element={<Event />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:name" element={<Artist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
