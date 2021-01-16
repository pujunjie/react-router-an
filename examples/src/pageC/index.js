import React, { memo } from "react";
import { Link } from "react-router-dom";

export default memo(function index() {
  return (
    <div className="container" style={{ background: "#0c1" }}>
      <p>Page C</p>
      <Link to="/pageD">go to Page D</Link>
    </div>
  );
});
