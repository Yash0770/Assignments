import React from "react";
import { Link } from "react-router-dom";

export default function NavSection() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-between">
        <div className="col-lg-2">
          <Link to="/first" className="headingFont">First</Link>
        </div>
        <div className="col-lg-2">
          <Link to="/second" className="headingFont">Second</Link>
        </div>
        <div className="col-lg-2">
          <Link to="/todo" className="headingFont">ToDoAPP</Link>
        </div>
      </div>
    </div>
  );
}
