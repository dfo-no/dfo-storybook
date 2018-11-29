import React from "react";

export default function TypographyPage() {
  return (
    <div>
      <h1>Dette er en h1 tittel</h1>
      <h2>Dette er en h2 tittel</h2>
      <h3>Dette er en h3 tittel</h3>
      <br />
      <p>
        Regelverk og systemer{" "}
        <a href="https://dfo.no/">Direktoratet for økonomistyring</a> forvalter
        økonomiregelverket, utredningsinstruksen og to av statens
        konsernsystemer. Dette er oppgaver som er delegert til oss fra
        Finansdepartementet. <em>Vi er opptatt av å forbedre</em> regelverkene
        og systemene slik at det i størst mulig grad bidrar til{" "}
        <strong>effektiv ressursbruk i staten.</strong> Våre forslag til
        forbedringer skal være tuftet både på faglige utviklingstrekk nasjonalt
        og internasjonalt, og på våre erfaringer med bruken av regelverkene og
        konsernsystemene.
      </p>
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
