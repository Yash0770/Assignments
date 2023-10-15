import React, { useRef } from "react";

export default function First() {
  const counterRef = useRef(0);

  const increment = () => {
    counterRef.current++;
    updateCounterDisplay();
  };
  const decrement = () => {
    counterRef.current--;
    updateCounterDisplay();
  };

  const updateCounterDisplay = () => {
    const counterDisplay = document.getElementById("counter-display");
    if (counterDisplay) {
      counterDisplay.textContent = counterRef.current;
    }
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="text-center headingFont">Counter Appliction (without state)</div>
        <div className="row text-center mt-5">
          <label id="counter-display" className="headingFont">{counterRef.current}</label>
        </div>
        <div className="row mt-4">
          <div className="d-flex justify-content-evenly">
            <div className="row">
              <div
                className="col-lg-2 btn btn-primary px-5 py-2"
                onClick={decrement}
              >
                -
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-2 btn btn-primary px-5 py-2"
                onClick={increment}
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
