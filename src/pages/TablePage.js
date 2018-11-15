import React from "react";
import "../components/reset";

export default function FormPage() {
  return (
    <div style={{padding:'15px'}}>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kristoffer</td>
            <td rowspan="2">30,5</td>
            <td>186</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>156</td>
          </tr>
          <tr>
            <td>Julie</td>
            <td>25</td>
            <td>175</td>
          </tr>
        </tbody>
      </table>

      <br/><br/>

      <table className="table table--striped">
        <caption>Fig3: Fun table on people and heights</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kristoffer</td>
            <td rowspan="2">30,5</td>
            <td>186</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>156</td>
          </tr>
          <tr>
            <td>Julie</td>
            <td>25</td>
            <td>175</td>
          </tr>
        </tbody>
      </table>

      <br/><br/>

      <table className="table table--simple">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kristoffer</td>
            <td rowspan="2">30,5</td>
            <td>186</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>156</td>
          </tr>
          <tr>
            <td>Julie</td>
            <td>25</td>
            <td>175</td>
          </tr>
        </tbody>
      </table>

      <br/><br/>

      <table className="table table--tight">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kristoffer</td>
            <td rowspan="2">30,5</td>
            <td>186</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>156</td>
          </tr>
          <tr>
            <td>Julie</td>
            <td>25</td>
            <td>175</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>3 persons</td>
            <td>86 years</td>
            <td>517 cm</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
