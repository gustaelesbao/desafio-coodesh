import { createGlobalStyle } from 'styled-components';

import { StaticColor, FontSize, Radius, Spacing, FontFamily, LineHeight } from 'app/constants';

export const GlobalStyled = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, input, textarea,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, canvas {
margin: 0;
padding: 0;
border: 0;
font-family: ${FontFamily.Primary};
line-height: ${LineHeight.Medium};
vertical-align: baseline;

box-sizing: border-box;

backface-visibility: hidden;
outline: 0;
-webkit-backface-visibility: hidden;
-webkit-font-smoothing: antialiased;
-moz-font-smoothing: antialiased;
-o-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, img{
  display: block;
}

body {
  background-color: ${StaticColor.Gray100};
  position: relative;
  min-height: 100vh;
}
ol, ul {
  list-style: none;
}
a {
  text-decoration: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background-color: ${StaticColor.Transparent};
}

body {
  overflow-x: hidden;
}

* {
  /* transition: background 0.3s ease-out, background-color 0.3s ease-out, color 0.3s ease-out; */

  scrollbar-color: ${StaticColor.Transparent} ${StaticColor.Gray300};
  scrollbar-width: thin;
}

*::-moz-selection {
  background: ${StaticColor.Primary300};
  color: ${StaticColor.White};
}

  *::selection {
  background: ${StaticColor.Primary500};
  color: ${StaticColor.White};
  }


  &::-webkit-scrollbar {
    width: ${Spacing.Size2X};
    height: ${Spacing.Size2X};
  }

  &::-webkit-scrollbar-track {
    padding-top:${Spacing.Size2X};
    background-color: ${StaticColor.Transparent};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${StaticColor.Gray400};

    border-radius: ${Radius.Small};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${StaticColor.Gray500};
  }
   `;
