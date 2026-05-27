import DefaultLogo from './logo-blue.svg?react';
import EnglishLogo from './logo-english.svg?react';
import type { AvailableLanguages } from '../types/utilTypes';

interface LogoProps extends React.ComponentProps<'svg'> {
  language?: AvailableLanguages,
  title?: string,
}

export function Logo({ 
  language = 'no', 
  title = 'Logo',
  ...restOfSvgAttributes
}: LogoProps) {

  const logoTitle = language === 'en' ?
    'Logo: The Norwegian Agency for Public and Financial Management' :
    'Logo: Direktoratet for forvaltning og økonomistyring';
  
  const LogoComponent = language === 'en' ? EnglishLogo : DefaultLogo;

  return (
    <>
      <LogoComponent {...restOfSvgAttributes} aria-label={title || logoTitle} role="img" />
      {title && <span className='visually-hidden'>{title}</span>}
    </>
  )
}
