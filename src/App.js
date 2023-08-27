import React, { useEffect, useState } from "react";
import "./styles.css";
import io from "socket.io-client";
export default function App() {
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    const socket = io("https://scorpion-modest-robin.ngrok-free.app", {
      secure: true
    });
    const handleConnected = () => {
      setConnected(true);
    };
    socket.on("connect", handleConnected);
    return () => {
      socket.off("connect", handleConnected);
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandboxes</h1>
      <h2>
        Connection:{" "}
        {connected ? (
          <span style={{ color: "#4f4" }}>connected</span>
        ) : (
          <span style={{ color: "#f44" }}>disconnected</span>
        )}
      </h2>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
