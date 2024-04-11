import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = ["Please Hold...", "Loading...", "Almost there...", "Just a moment..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // Change message every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="app">
        <div id="wrapper">
          <h1 className="glitch therace text-[40px] sm:text-[100px]" data-text="glitch">
            "BASED<span className="glitch-bend">BIRDS"</span>
          </h1>

          <div className="mt-10 for-sans">
            <h1 className="text-white r_animate">{messages[messageIndex]}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
