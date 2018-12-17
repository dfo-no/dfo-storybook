import React from "react";
import "./Form.scss";

export default function Form(props) {
  const { children = [] } = props;
  return <form className="dfo-form">{children}</form>;
}

Form.Title = function FormTitle({ children = [] }) {
  if (children.length === 0) {
    return null;
  }
  return <h2 className="dfo-form-title">{children}</h2>;
};

Form.SectionTitle = function FormSectionTitle({ children = [] }) {
  if (children.length === 0) {
    return null;
  }
  return <p className="dfo-form-section-title">{children}</p>;
};
