import React from "react";
import "../components/reset";
import { Form, Input, Checkbox } from "../components";

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
      <Input label="Fornavn:" type="text" name="fields[firstName]" value="" />
      <Input label="Etternavn:" type="text" name="fields[lastName]" value="" />
      <Input
        label="Virksomhet:"
        type="text"
        name="fields[organisation]"
        value=""
      />
      <strong>Abonner på :</strong>
      <Checkbox
        label="Nyhetsbrev om virksomhets- og økonomistyring"
        name="fields[customerNoteInterests][]"
      />
      <input type="submit" class="button" value="Send" />
    </Form>
  );
}
