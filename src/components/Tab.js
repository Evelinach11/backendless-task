import React from "react";
import { Link } from "react-router-dom";

const Tab = ({ title, path }) => (
  <li>
    <Link to={path}>{title}</Link>
  </li>
);

export default Tab;
