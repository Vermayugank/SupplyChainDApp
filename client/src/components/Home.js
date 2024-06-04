import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div class="landing-wrapper">
      <div id="heading">MedTrek: Your Trusted Pharma Journey</div>
      <h3>Welcome to hassle-free Pharma supply chain management. 🌐💊</h3>
      <p style={{ whiteSpace: 'nowrap' }}>
  Here Blockchain and IoT simplify your pharmaceutical supply chain.
  <br />Instantly track key details and ensure transparency.
</p>

      {/* <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ marginTop: "2%" }}>
          <li>
            Get data from sensors like temperature/humidity sensor and pass it
            through <a href="https://nodered.org/">NODE-RED</a>
          </li>
          <li style={{ marginTop: "2%" }}>
            Then we pass that data as parameter in API(fastAPI) that calls smart
            contract using web3.py and send data to etehreum blockchain
          </li>
          <li style={{ marginTop: "2%" }}>
            Now users can see their data in real time using this frontend app
            like Current temperature and humidity ,Product info like id,weight
            etc ,worker id ,Location ,Delivery status
          </li>
        </ul>
      </div> */}
      <p style={{ position: "fixed", bottom: 40, width: "100%" }}>Please Connect to BNB Chain Testnet network</p>
      <p style={{ position: "fixed", bottom: 0, width: "100%" }}>
        Made By:{" "}
        <a
          style={{ color: "#0B8FAC" }}
          href="https://github.com/Vermayugank"
          target="_blank"
        >
          Yugank{" "}
        </a>
      </p>
    </div>
  );
};

export default Home;
