import { Grid } from "@mui/material";
import React from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import "./client.css";

const Client = () => {
  return (
    <div
      className="client"
      style={{
        height: 600,
        width: "100%",
        marginTop: 30,

        backgroundImage: "url(/main.gif)",
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",

        backgroundSize: "cover",
        filter: "brightness(1)",
      }}
    >
      <h1
        style={{
          paddingTop: 80,
          fontSize: 50,
          fontWeight: 600,
          textAlign: "center",
          color: "gold",
          zIndex: 1,
          textTransform: "uppercase",
          filter: "brightness(1.75)",
        }}
      >
        A PROFESSIONAL BUILDING SERVICE WHICH BEST MEETS THE NEEDS OF OUR
        CLIENTS
      </h1>
      <p
        style={{
          paddingTop: 37,
          fontSize: 25,
          color: "gold",
          textAlign: "center",
          zIndex: 1,
          overflowWrap: "break-word",
          filter: "brightness(1.75)",
        }}
      >
        With divisions covering Construction, Maintenance, Joinery and
        Electrical, the company has acquired a wealth of experience and a proven
        track record within the construction industry.
      </p>
    </div>
  );
};

export default Client;
