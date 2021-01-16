import React, { memo } from "react";
import { Link } from "react-router-dom";

export default memo(function index() {
  return (
    <div className="container" style={{ background: "#a00" }}>
      <p>Page A</p>
      <Link to="/pageB">go to Page B</Link>
    </div>
  );
});
