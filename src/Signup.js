import React, { useState } from "react";
import "./Signup.css"; // Import the CSS file

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Implement your signup logic here
    console.log("Signing up with email:", email, "and password:", password);
  };

  return (
    <div className="signup-container">
      {" "}
      {/* Apply the CSS class */}
      <h2>SignUp</h2>
      <input
        className="signup-input"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="signup-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signup-button" onClick={handleSignup}>
        Signup
      </button>{" "}
      {/* Apply the CSS class */}
    </div>
  );
}

export default Signup;
