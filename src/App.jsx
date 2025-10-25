import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meet from "../components/Meet";
import EventDetails from "../components/EventDetails"; 

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Meet />} />
          <Route path="/events/env/:id" element={<EventDetails />} />
        </Routes>
      </main>
    </Router>
  );
}
