import React from "react";

export const Nav: React.FC = () => {
  return (
    <div>
      <div style={{ border: "1px solid" }}>
        <ul className="flex">
          <li style={{ border: "1px solid", padding: "2%" }}>Home</li>
          <li style={{ border: "1px solid", padding: "2%" }}>Home</li>
          <li style={{ border: "1px solid", padding: "2%" }}> Home</li>
        </ul>
      </div>

      <div style={{ border: "1px solid" }}>
        <ul className="text-center">
          <li style={{ border: "1px solid", padding: "2%" }}>Home</li>
          <li style={{ border: "1px solid", padding: "2%" }}>Home</li>
          <li style={{ border: "1px solid", padding: "2%" }}> Home</li>
        </ul>
      </div>
    </div>
  );
};
