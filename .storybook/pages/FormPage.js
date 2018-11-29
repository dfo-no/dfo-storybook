import React from "react";
import { Form, Input, Checkbox, Button } from "../../src/index";

export default function FormPage() {
  return (
    <Form method="post">
      <h2>Meld deg på vårt nyhetsbrev</h2>
      <Input
        label="Din e-postadresse. (Av sikkerhetsgrunner kan du ikke endre den her.)"
        type="email"
        value="kari@dfo.no"
        disabled
      />
      <Input label="Fornavn:" type="text" name="fields[firstName]" />
      <Input label="Etternavn:" type="text" name="fields[lastName]" />
      <Input label="Virksomhet:" type="text" name="fields[organisation]" />
      <strong>Abonner på :</strong>
      <Checkbox
        label="Nyhetsbrev om virksomhets- og økonomistyring"
        name="fields[customerNoteInterests][]"
      />
      <Button type="submit">Send</Button>
    </Form>
  );
}
