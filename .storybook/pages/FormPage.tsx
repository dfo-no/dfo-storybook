import React, { JSX } from "react";
import classNames from 'classnames'

interface FormPageProps {
  caption: string;
  zebra: boolean;
  borders: boolean;
}

var decodeHTML = function (html: string): string {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

export default function FormPage({ caption, zebra, borders }: FormPageProps): JSX.Element {
  return (
    <div style={{padding:'15px'}}>
      <div className="table__wrapper">
        <table className={classNames('table', { 'table--striped': zebra, 'table--with-borders': borders })}>
          {caption.length ? <caption dangerouslySetInnerHTML={{__html: decodeHTML(caption) }}/> : null}
          <thead>
            <tr>
              <th></th>
              <th>To convert</th>
              <th>into</th>
              <th>fun fact</th>
              <th>invented by</th>
              <th>multiply by</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={4}>Length</th>
              <td>inches</td>
              <td>millimetres (mm)</td>
              <td rowSpan={7}>Invented by Lars Monsen in 5th grade</td>
              <td rowSpan={7}>Lars Monsen</td>
              <td>25.4</td>
            </tr>
            <tr>
              <td>feet</td>
              <td>centimetres (cm)</td>
              <td>30.48</td>
            </tr>
            <tr>
              <td>yards</td>
              <td>metres (m)</td>
              <td>0.91444</td>
            </tr>
            <tr>
              <td>miles</td>
              <td>kilometres (km)</td>
              <td>1.61</td>
            </tr>
            <tr>
              <th rowSpan={4}>Area</th>
              <td>square inches</td>
              <td>sq. millimetres (mm²)</td>
              <td>645</td>
            </tr>
            <tr>
              <td>square feet</td>
              <td>square metres (m²)</td>
              <td>0.0929</td>
            </tr>
            <tr>
              <td>square yards</td>
              <td>square metres (m²)</td>
              <td>0.836</td>
            </tr>
            <tr>
              <td>acres</td>
              <td>hectares</td>
              <td></td>
              <td>Julius Caesar</td>
              <td>2.47</td>
            </tr>
            <tr>
              <th rowSpan={4}>Volume</th>
              <td>cubic inches</td>
              <td>millitres (ml)</td>
              <td>who would even?</td>
              <td>Arnold Schwarzenegger</td>
              <td>16.4</td>
            </tr>
            <tr>
              <td><abbr className="c2sc">US</abbr> barrels</td>
              <td>cubic metres (m³)</td>
              <td></td>
              <td></td>
              <td>0.159</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Average</th>
              <td colSpan={4}></td>
              <td>63.017</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
