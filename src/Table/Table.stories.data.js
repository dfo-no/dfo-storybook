import React from "react";

export const ExampleTableHtml = () => {
  return (
    <table className="table table--striped">
      <caption>
        Femårsplan for dokumentasjon og reduksjon av miljøavtrykk
      </caption>
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>
            Faktisk 2012–2014 — Plan 2015–2019
          </th>
          <th style={{ textAlign: "right" }}>2012–2014</th>
          <th style={{ textAlign: "right" }}>2015</th>
          <th style={{ textAlign: "right" }}>2016</th>
          <th style={{ textAlign: "right" }}>2017</th>
          <th style={{ textAlign: "right" }}>2018</th>
          <th style={{ textAlign: "right" }}>2019</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Antall virksomheter med miljøavtrykk dokumentert per år</td>
          <td style={{ textAlign: "right" }}>&nbsp;</td>
          <td style={{ textAlign: "right" }}>22</td>
          <td style={{ textAlign: "right" }}>30</td>
          <td style={{ textAlign: "right" }}>40</td>
          <td style={{ textAlign: "right" }}>40</td>
          <td style={{ textAlign: "right" }}>28</td>
        </tr>
        <tr>
          <td>Antall virksomheter med dokumentert miljøavtrykk (akkumulert)</td>
          <td style={{ textAlign: "right" }}>40</td>
          <td style={{ textAlign: "right" }}>62</td>
          <td style={{ textAlign: "right" }}>92</td>
          <td style={{ textAlign: "right" }}>132</td>
          <td style={{ textAlign: "right" }}>172</td>
          <td style={{ textAlign: "right" }}>200</td>
        </tr>
        <tr>
          <td>Andel virksomheter med dokumentert miljøavtrykk (akkumulert)</td>
          <td style={{ textAlign: "right" }}>20&nbsp;%</td>
          <td style={{ textAlign: "right" }}>31&nbsp;%</td>
          <td style={{ textAlign: "right" }}>46&nbsp;%</td>
          <td style={{ textAlign: "right" }}>66&nbsp;%</td>
          <td style={{ textAlign: "right" }}>86&nbsp;%</td>
          <td style={{ textAlign: "right" }}>100&nbsp;%</td>
        </tr>
        <tr>
          <td>Antall virksomheter med redusert miljøavtrykk per år</td>
          <td style={{ textAlign: "right" }}>&nbsp;</td>
          <td style={{ textAlign: "right" }}>14</td>
          <td style={{ textAlign: "right" }}>17</td>
          <td style={{ textAlign: "right" }}>20</td>
          <td style={{ textAlign: "right" }}>20</td>
          <td style={{ textAlign: "right" }}>20</td>
        </tr>
        <tr>
          <td>Antall virksomheter med redusert miljøavtrykk (akkumulert)</td>
          <td style={{ textAlign: "right" }}>24</td>
          <td style={{ textAlign: "right" }}>38</td>
          <td style={{ textAlign: "right" }}>55</td>
          <td style={{ textAlign: "right" }}>75</td>
          <td style={{ textAlign: "right" }}>95</td>
          <td style={{ textAlign: "right" }}>115</td>
        </tr>
        <tr>
          <td>Andel virksomheter med redusert miljøavtrykk (akkumulert)</td>
          <td style={{ textAlign: "right" }}>60&nbsp;%</td>
          <td style={{ textAlign: "right" }}>61&nbsp;%</td>
          <td style={{ textAlign: "right" }}>60&nbsp;%</td>
          <td style={{ textAlign: "right" }}>57&nbsp;%</td>
          <td style={{ textAlign: "right" }}>55&nbsp;%</td>
          <td style={{ textAlign: "right" }}>58&nbsp;%</td>
        </tr>
      </tbody>
    </table>
  );
};
