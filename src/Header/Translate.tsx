interface TranslateProps {
  id: string,
  code: string
}

const translations: {[key: string]: string} = {
  enMenu: 'Menu',
  noMenu: 'Meny',
};

export function Translate({
  id,
  code
}: TranslateProps) {
    return translations[`${code}${id}`];
}
