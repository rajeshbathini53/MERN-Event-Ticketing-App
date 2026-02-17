import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async () => {
    await axios.post("http://localhost:5000/api/events", form);
    alert("Event Created");
    navigate("/dashboard");
  };

 return (
  <div className="container">
    <div className="card">
      <h2>Create Event</h2>

      <input
        placeholder="Title"
        onChange={e => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Description"
        onChange={e => setForm({ ...form, description: e.target.value })}
      />

      {/* NEW FIELD */}
      <input
        type="date"
        onChange={e => setForm({ ...form, date: e.target.value })}
      />

      <input
        placeholder="Venue"
        onChange={e => setForm({ ...form, venue: e.target.value })}
      />

      {/* NEW FIELD */}
      <input
        type="number"
        placeholder="Ticket Limit"
        onChange={e => setForm({ ...form, ticketLimit: e.target.value })}
      />

      <select
        onChange={e => setForm({ ...form, approvalMode: e.target.value })}
      >
        <option value="auto">Auto Approval</option>
        <option value="manual">Manual Approval</option>
      </select>

      <button onClick={submit}>Create Event</button>
    </div>
  </div>
);


}
