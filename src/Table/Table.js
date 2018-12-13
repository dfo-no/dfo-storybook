import React from "react";
import "./Table.scss";

export default function Table({ children = [] }) {
  return <div className="dfo-table-wrapper">{children}</div>;
}
