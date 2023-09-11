import React from "react";
import "../App.css";

const Main = () => {
  return (
    <main>
      <div className="main-left">
        <div className="main-text">
          <h2>Your Feet</h2>
          <h2>deserve</h2>
          <h2>the best</h2>

          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>

        <div className="main-button">
          <button className="red"> Shop Now</button>
          <button className="white black" id="btn2">
            {" "}
            Category
          </button>
        </div>

        <div className="available-on">
          <p>Also Available On</p>

          <div className="image">
            <img src="./Images/flipkart.png" alt="" />
            <img src="./Images/amazon.png" alt="" />
          </div>
        </div>
      </div>

      <div className="main-right">
        <img src="./Images/juta.png" alt="" />
      </div>
    </main>
  );
};

export default Main;
