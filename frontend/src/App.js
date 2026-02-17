import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import EventPage from "./pages/EventPage";
import Ticket from "./pages/Ticket";
import Registrations from "./pages/Registrations";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/ticket/:id" element={<Ticket />} />
        <Route path="/registrations/:id" element={<Registrations />} />
      </Routes>
    </Router>
  );
}

export default App;
