import React from "react";

function WelcomeFace() {
  const host = typeof window !== "undefined" ? window.location.hostname : "";
  const show = host === "localhost" || host === "127.0.0.1" || host === "";
  if (!show) return null;

  return (
    <div className="welcome-face-container" aria-hidden="true">
      <div className="face">
        <div className="eye left" />
        <div className="eye right" />
        <div className="mouth" />
      </div>
    </div>
  );
}

export default WelcomeFace;
