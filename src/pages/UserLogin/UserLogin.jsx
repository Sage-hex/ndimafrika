import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      localStorage.setItem("authUser", JSON.stringify({ name: "Kofi Mensah", email }));
      navigate("/userdashboard"); // Redirect to dashboard
    } else {
      alert("Invalid login details!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F5DEB3]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-[#6B4226] mb-4">🔑 Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-[#6B4226] text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
