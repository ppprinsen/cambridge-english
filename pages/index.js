import React, { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Welcome to the Cambridge English Quiz!");

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>{message}</h1>
      <p>More quiz features coming soon...</p>
    </div>
  );
}
