import React, { useState } from "react";
import "./Login.css"; // Import the CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <div className="login-container">
      {" "}
      {/* Apply the CSS class */}
      <h2>Login</h2>
      <input
        className="login-input"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>{" "}
      {/* Apply the CSS class */}
    </div>
  );
}

export default Login;
