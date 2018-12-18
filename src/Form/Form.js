import React from "react";
import "./Form.scss";

export default function Form(props) {
  const { children = [] } = props;
  return <form className="dfo-form">{children}</form>;
}
