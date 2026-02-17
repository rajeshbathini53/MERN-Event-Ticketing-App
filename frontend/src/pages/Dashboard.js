import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then(res => setEvents(res.data));
  }, []);

  return (
  <div className="container">
    <div className="card">
      <h2>Dashboard</h2>

      <button onClick={() => navigate("/create")}>
        Create Event
      </button>

      {events.map(e => (
  <div key={e._id} className="event-card">
    <h3>{e.title}</h3>

    <p><b>Venue:</b> {e.venue}</p>
    <p><b>Date:</b> {e.date}</p>
    <p><b>Limit:</b> {e.ticketLimit}</p>

    {/* ✅ ADD HERE */}
    <p>
      <b>Approval:</b>
      <span className={`badge ${e.approvalMode}`}>
        {e.approvalMode}
      </span>
    </p>

    <button
      onClick={() =>
        navigator.clipboard.writeText(
          `http://localhost:3000/event/${e._id}`
        )
      }
    >
            Copy Link
          </button>

          {/* ✅ NEW BUTTON */}
          <button onClick={() => navigate(`/registrations/${e._id}`)}>
            View Registrations
          </button>
        </div>
      ))}
    </div>
  </div>
);
}
