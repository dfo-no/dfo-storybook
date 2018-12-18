import React from "react";
import { Form, Input, Checkbox, Button, RadioButtons } from "../../src/index";

export default function FormPage() {
  return (
    <Form method="post">
      <h2 className="dfo-form-title">DFØs Styringskonferanse 2019</h2>
      <fieldset className="dfo-form-fieldset">
        <legend className="dfo-form-legend">Kontaktinformation:</legend>
        <Input label="Fornavn" type="text" name="fields[firstName]" value="" />
        <Input
          label="Etternavn"
          type="text"
          error="Vennligst fyll ut etternavn"
          name="fields[lastName]"
          value=""
        />
      </fieldset>
      <RadioButtons
        name="isLeader"
        legend={"Er du i en lederstilling?"}
        options={[
          { label: "Ja", value: "yes", defaultChecked: true },
          { label: "Nei", value: "no" }
        ]}
      />
      <div className="dfo-form-submit-wrapper">
        <Button type="submit">Meld på</Button>
      </div>
    </Form>
  );
}
