import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Automobile Designer",
          "PDI Supervisor",
          "Automobile Engineer",
          "Techie",
          "Mechanical Enthusiast",
          "Project Manager"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
