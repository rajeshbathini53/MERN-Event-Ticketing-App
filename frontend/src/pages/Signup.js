import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const signup = async () => {
    await axios.post("http://localhost:5000/api/auth/signup", form);
    alert("Signup Success");
    navigate("/");
  };

  return (
  <div className="auth-container">
    <div className="auth-card">
      <h2>Sign Up</h2>

      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <button onClick={signup}>Signup</button>

      <p>
        Already have an account?{" "}
        <span onClick={() => navigate("/")}>Login</span>
      </p>
    </div>
  </div>
);
}
