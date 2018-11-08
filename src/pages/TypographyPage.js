import React from "react";
import "../components/reset";

export default function TypographyPage() {
  return (
    <div>
      <h2>Kontaktinfo</h2>
      <p>Har du spørsmål om innholdet på denne siden?</p>
      <p>
        <strong>Kontakt kundesenter lønn</strong>{" "}
      </p>
      <ul>
        <li>
          e-post <a href="/#">lonn@dfo.no</a>
        </li>
        <li>
          <a href="/#">Kundesenter på nett</a>
        </li>
        <li>telefon 123 45 678</li>
      </ul>
      <p>
        <strong>Kontakt kundesenter regnskap</strong>
      </p>
      <ul>
        <li>
          e-post <a href="/#">regnskap@dfo.no</a>
        </li>
        <li>
          <a href="/#">Kundesenter på nett</a>
        </li>
        <li>telefon 123 45 678</li>
      </ul>
    </div>
  );
}
