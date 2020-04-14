import { SxStyleProp } from 'theme-ui';

declare module 'react' {
  interface DOMAttributes<T> {
    sx?: SxStyleProp;
  }
}

// declare global {
//   namespace JSX {
//     interface IntrinsicAttributes {
//       sx?: SxStyleProp;
//     }
//   }
// }
