import React from "react";

import './TypographyPage.scss';

export default function TypographyPage() {
  return (
    <div>
      <h1>Typographic elements</h1>
      <br/>
      <br/>
      <h2>Font styles</h2>
      <div className="table__wrapper">
        <table className="table">
          <thead>
            <th>Element</th>
            <th>Font type</th>
            <th>Font weight</th>
            <th>Line height</th>
            <th>Color</th>
          </thead>
          <tbody>
            <tr>
              <td><h1>h1</h1></td>
              <td>Source Serif Pro</td>
              <td>700</td>
              <td>1.25em</td>
              <td style={{backgroundColor: "#012a4c", color: "#efefef"}}>#012a4c</td>
            </tr>
            <tr>
              <td><h2>h2</h2></td>
              <td>Source Serif Pro</td>
              <td>700</td>
              <td>1.25em</td>
              <td style={{backgroundColor: "#012a4c", color: "#efefef"}}>#012a4c</td>
            </tr>
            <tr>
              <td><h3>h3</h3></td>
              <td>Source Serif Pro</td>
              <td>700</td>
              <td>1.25em</td>
              <td style={{backgroundColor: "#012a4c", color: "#efefef"}}>#012a4c</td>
            </tr>
            <tr>
              <td><h4>h4</h4></td>
              <td>Source Serif Pro</td>
              <td>400</td>
              <td>1.25em</td>
              <td style={{backgroundColor: "#012a4c", color: "#efefef"}}>#012a4c</td>
            </tr>
            <tr>
              <td><h5>h5</h5></td>
              <td>Source Sans Pro</td>
              <td>600</td>
              <td>1.25em</td>
              <td style={{backgroundColor: "#012a4c", color: "#efefef"}}>#012a4c</td>
            </tr>
            <tr>
              <td><a href="#">a</a></td>
              <td>Source Sans Pro</td>
              <td>400</td>
              <td>1.5em</td>
              <td style={{backgroundColor: "#012a4c", color: "#efefef"}}>#012a4c</td>
            </tr>
            <tr>
              <td><a style={{color: "#009fe3"}} href="#">a:hover</a></td>
              <td>Source Sans Pro</td>
              <td>400</td>
              <td>1.5em</td>
              <td style={{backgroundColor: "#009fe3", color: "#efefef"}}>#009fe3</td>
            </tr>
            <tr>
              <td>p</td>
              <td>Source Sans Pro</td>
              <td>400</td>
              <td>1.5em</td>
              <td style={{backgroundColor: "#333333", color: "#efefef"}}>#333333</td>
            </tr>
            <tr>
              <td>ol</td>
              <td>Source Sans Pro</td>
              <td>400</td>
              <td>1.5em</td>
              <td style={{backgroundColor: "#333333", color: "#efefef"}}>#333333</td>
            </tr>
            <tr>
              <td>ul</td>
              <td>Source Sans Pro</td>
              <td>400</td>
              <td>1.5em</td>
              <td style={{backgroundColor: "#333333", color: "#efefef"}}>#333333</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Font sizes</h2>

      <div className="table__wrapper">
        <table className="table">
          <thead>
            <th>Element</th>
            <th>Mobile</th>
            <th>Tablet</th>
            <th>Desktop</th>
          </thead>
          <tbody>
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
            <tr>
              <td>h4</td>
              <td>1.8rem</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>h5</td>
              <td>1.8rem</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>h5</td>
              <td>1.8rem</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>a, p, ol, ul</td>
              <td>1.8rem</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>



      <h2>Font weights</h2>

      <p>
        <br/>
        <strong>Strong text</strong>
      <br/>
      <br/>
        <em>Emphasized text</em>
      </p>

      <h2>Hyperlinks</h2>
      <p>
        <a href="">This is a link</a>
      </p>

      <h2>Paragraph</h2>
      <p>Paragraphs of text can contain <a href="#">links</a> and have different styles, like <strong>strong</strong> or <em>emphasized</em>.</p>

      <h2>Lists</h2>

      <h3>Unordered list</h3>

      <ul>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
        <ul>
          <li>Nested list item</li>
          <li>Nested list item</li>
          <li>Nested list item</li>
        </ul>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
      </ul>

      <h3>Ordered list</h3>

      <ol>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
        <ol>
          <li>Nested list item</li>
          <li>Nested list item</li>
          <li>Nested list item</li>
        </ol>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
      </ol>

      <h2>Blockquotes</h2>
      <div className="block--text">
      <blockquote>
        It's awesome being awesome
        <footer>
          <cite>Jordan Belfort</cite>
        </footer>
      </blockquote>
      </div>

{/*
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
*/}
    </div>
  );
}
