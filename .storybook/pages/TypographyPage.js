import React from "react";
import './TypographyPage.scss';

export default function TypographyPage() {
  return (
    <div>
      <div>
        <h1>Dette er en h1 tittel</h1>
        <br/>
        <h2>Dette er en h2 tittel</h2>
        <br/>
        <h3>Dette er en h3 tittel</h3>
      </div>


      <div class="table__wrapper">
        <tbody>
          <table className="table">
          <caption>Tittelstørrelser</caption>
            <thead>
              <th>Tittel</th>
              <th>Mobil</th>
              <th>Tablet</th>
              <th>Desktop</th>
            </thead>
          <tr>
            <td>h1</td>
            <td>3rem</td>
            <td>3.75rem</td>
            <td>5rem</td>
          </tr>
          <tr>
            <td>h2</td>
            <td>1.98rem</td>
            <td>2.2rem</td>
            <td></td>
          </tr>
          <tr>
            <td>h3</td>
            <td>1.8rem</td>
            <td></td>
            <td></td>
          </tr>
          </table>
        </tbody>
      </div>

      <h2>Typografiske elementer</h2>
      <p>
        <br/>
        <strong>Strong text</strong>
      <br/>
      <br/>
        <em>Emphasized text</em>
      <br/>
      <br/>
        <a href="">Link</a>
      </p>
      <ul>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
      </ul>
      <ol>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
      </ol>
      <h2>Paragraf-eksempel</h2>
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
