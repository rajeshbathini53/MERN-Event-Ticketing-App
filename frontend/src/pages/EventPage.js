import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EventPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({});
  const [form, setForm] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/events/${id}`)
      .then(res => setEvent(res.data));
  }, [id]);

  const register = async () => {
    const res = await axios.post(
      `http://localhost:5000/api/register/${id}`,
      form
    );

    alert("Registered: " + res.data.status);
    navigate(`/ticket/${res.data._id}`);
  };

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>

      <input placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <button onClick={register}>Register</button>
    </div>
  );
}
