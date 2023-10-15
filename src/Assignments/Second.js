import React, { useState } from "react";

export default function Second() {
  const [btnClick, setBtnClick] = useState(0);

  const subBtn = ()=>{
    setBtnClick(btnClick-1)
  }
  const plusBtn = ()=>{
    setBtnClick(btnClick+1)
  }

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
        <div className="text-center headingFont">Counter Appliction (using state)</div>
        <div className="row text-center mt-5">
            <label htmlFor="" className="headingFont">{btnClick}</label>
          </div>
          <div className="row mt-4">
            <div className="d-flex justify-content-evenly">
              <div className="row">
                <div className="col-lg-2 btn btn-primary px-5 py-2" onClick={subBtn}>-</div>
              </div>
              <div className="row">
                <div className="col-lg-2 btn btn-primary px-5 py-2" onClick={plusBtn}>+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
