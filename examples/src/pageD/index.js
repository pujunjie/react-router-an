import React, { memo } from "react";
import { Link } from "react-router-dom";

export default memo(function index() {
  return (
    <div className="container" style={{ background: "#a94" }}>
      <p>Page D</p>
      <Link to="/pageA">go to Page A</Link>
    </div>
  );
});
