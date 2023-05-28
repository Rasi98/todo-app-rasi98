import React, { useEffect } from "react";
import Dashboard from "./pages/dashboard";
import "./styles/app.style.css";

function App() {
  useEffect(() => {
    console.log(
      `Developed by www.lakshanrasingolla.com | ${new Date().getFullYear()}`
    );
  }, []);

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
