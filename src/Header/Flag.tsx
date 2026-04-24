/* eslint-disable no-tabs */
/* eslint max-len:0 */

import FlagNO from './FlagNO.svg?react';
import FlagEN from './FlagEN.svg?react';
import type { AvailableLanguages } from '../types/utilTypes';

interface FlagProps {
  code: AvailableLanguages,
  style?: React.CSSProperties,
  [key: string]: any,
}

export default function Flag({ code, style, ...rest }: FlagProps) {
  switch (code) {
    case 'no':
      return <FlagNO style={style} {...rest} />;
    case 'en':
      return <FlagEN style={style} {...rest} />;
    default:
      return null;
  }
}
