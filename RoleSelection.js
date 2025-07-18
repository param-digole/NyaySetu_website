import React from 'react';
import '../styles/RoleSelection.css';

function RoleSelection() {
  return (
    <div className="container">
      <h1>Welcome To NYAYSETU!</h1>
      <img src="/assets/WhatsApp Image 2025-07-16 at 21.51.54_bdcfa608.jpg" alt="NyaySetu Logo" className="logo" />
      <h2>Choose your role:</h2>

      <div className="roles">
        <div className="role">
          <img src="/assets/images.png" alt="Lawyer" />
          <span>LAWYER/ <br /> ADVOCATE</span>
        </div>
        <div className="role" onClick={() => window.location.href = "/ClientLogin.html"}>
          <img src="/assets/user-128.png" alt="Client" />
          <span>CLIENT</span>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
