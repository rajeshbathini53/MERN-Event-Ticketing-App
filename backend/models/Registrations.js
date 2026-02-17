import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Registrations() {
  const { id } = useParams();
  const [regs, setRegs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/register/event/${id}`)
      .then(res => setRegs(res.data));
  }, [id]);

  const updateStatus = async (regId, status) => {
    await axios.put(`http://localhost:5000/api/register/${regId}`, { status });

    setRegs(regs.map(r =>
      r._id === regId ? { ...r, status } : r
    ));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Registrations</h2>

        {regs.map(r => (
          <div key={r._id} className="event-card">
            <p><b>{r.name}</b></p>
            <p>{r.email}</p>
            <p>Status: {r.status}</p>

            {r.status === "pending" && (
              <>
                <button onClick={() => updateStatus(r._id, "approved")}>
                  Approve
                </button>
                <button onClick={() => updateStatus(r._id, "rejected")}>
                  Reject
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
