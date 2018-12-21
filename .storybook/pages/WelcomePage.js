import React from "react";

export default function WelcomePage() {
  return (
    <div>
      <h1><code>@dfo/components</code> 🚀</h1>
      <p>Documentation of components built for Direktoratet for økonomistyring (DFØ).</p>

      <h2>Looking for a design guide?</h2>
      <p>While this documentation is specifically for the digital surfaces of DFØ, the DFØ website offers a more <a href="https://dfo.no/om-dfo/designmanualen">general design guide</a> for the DFØ brand exists on.</p>

      <h2>Using the components</h2>
      <p>dfo.no and the DFØ intranet is built using the React components distributed through <a href="https://www.npmjs.com/package/@dfo/components">npm</a> – see link to github below for instructions on how to do that, if you're building a react app. If you're building something that's not a React application you can still get styles and markup for the different components.</p>
      <p>Click the "Static markup" and "CSS" tabs to get markup and CSS for the component you're looking at.</p>

      <h2>Code and docs</h2>
      <p>Go to the <a href="https://github.com/netliferesearch/dfo-storybook">github repo</a> to check out the source code and how to use it.</p>
    </div>
  );
}
