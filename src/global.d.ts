// src/global.d.ts
declare module '*.scss' {
  const content: string;
  export default content;
}

declare module '*.scss?raw' {
  const content: string;
  export default content;
}

declare module '@dfo/components/sass/fonts' {
  const content: string;
  export default content;
}

declare module '@dfo/components/sass/reset' {
  const content: string;
  export default content;
}

/*
TODO: Remove this workaround when a future fix is available.
Temporary workaround to suppress the issue below:
node_modules/@storybook/react-vite/dist/index.d.ts:51:46 - error TS2344: 
  Type 'typeof import("C:/Dev/dfo/toaesign/dfo-storybook/node_modules/@joshwooding/vite-plugin-react-docgen-typescript/dist/index")' does not satisfy the constraint '(...args: any) => any'.
  Type 'typeof import("C:/Dev/dfo/toaesign/dfo-storybook/node_modules/@joshwooding/vite-plugin-react-docgen-typescript/dist/index")' provides no match for the signature '(...args: any): any'.
*/
declare module '@storybook/react-vite' {
  interface ReactFrameworkOptions {
    reactDocgenTypescriptOptions?: Parameters<
      typeof import('@joshwooding/vite-plugin-react-docgen-typescript')['default']
    >[0]; // Parameters<...>[0] extracts the type of the first parameter of the default function, which is Options.
  }
}
/* index.d.ts > last part of plugin file. This is the part accessed and referred to above:
...
type Options = LoaderOptions & TypescriptOptions & DocGenOptions;
declare function reactDocgenTypescript(config?: Options): Plugin;
export { reactDocgenTypescript as default };
*/
