import React from "react";
import { Form, Input, Checkbox, Button, RadioButtons } from "../../src/index";

export default function FormPage() {
  return (
    <Form method="post">
      <Form.Title>DFØs Styringskonferanse 2019</Form.Title>
      <Form.SectionTitle>Kontaktinformation:</Form.SectionTitle>
      <Input label="Fornavn" type="text" name="fields[firstName]" value="" />
      <Input label="Etternavn" type="text" name="fields[lastName]" value="" />
      <strong>Abonner på:</strong>
      <Checkbox
        label="Nyhetsbrev om virksomhets- og økonomistyring"
        name="fields[customerNoteInterests][]"
      />
      <Button type="submit">Send</Button>
    </Form>
  );
}
