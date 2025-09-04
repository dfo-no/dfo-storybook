/* eslint max-len:0 */

import React from 'react';
// import { ReactComponent as SVG } from './logo-white.svg';
import Logo from './logo-white.svg';

// export default function LogoWhite() {
//   return (
//     <SVG />
//   );
// }

export default function LogoWhite() {
  let logoSrc = Logo;
  let titleText = 'DFØ-logo';
  return <img src={logoSrc} {...{title: titleText}} />;
}
