import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      console.log(res.data);

      if (res.data._id) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard");
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
      alert("Server Error");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        {/* IMPORTANT PART */}
        <button onClick={login}>Login</button>
        <p style={{ marginTop: 10 }}>
  Don’t have an account?{" "}
  <span
    onClick={() => navigate("/signup")}
    style={{ color: "blue", cursor: "pointer" }}
  >
    Sign Up
  </span>
</p>
      </div>
    </div>
  );
}
