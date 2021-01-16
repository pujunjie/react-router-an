import React, { memo } from "react";
import { Link } from "react-router-dom";

export default memo(function index() {
  return (
    <div className="container" style={{ background: "#aff" }}>
      <p>Page B</p>
      <Link to="/pageC">go to Page C</Link>
    </div>
  );
});
