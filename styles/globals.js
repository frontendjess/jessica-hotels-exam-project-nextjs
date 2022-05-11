import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyle = createGlobalStyle`
    :root {
        --font-body:  'Roboto Mono', monospace;
        --font-headings:  'Roboto Mono', monospace;
        --font-secondary: 'Nothing You Could Do', cursive;

        /* FONT SIZES */
        --font-size-base: 16px;
        --font-size-xxs: 0.296rem;
        --font-size-xs: 0.444rem;
        --font-size-sm: 0.667rem;
        --font-size: 1rem;
        --font-size-xsmd: 1.125rem;
        --font-size-smd: 1.25rem;
        --font-size-md: 1.5rem;
        --font-size-lg: 2.25rem;
        --font-size-xl: 3.375rem;
        --font-size-xxl: 5.063rem;
        --font-size-huge: 7.594rem;
        --font-size-jumbo: 11.391rem;

        /* 1rem = 16px, 1.125rem = 18px, 1.25rem = 20px */
        /* 1.5rem = 24px, 2.25rem = 36px, 3.375rem = 54px */
        /* 5.063rem = 81px, 7.594rem = 121.50px, 11.391rem = 182.25px */

        /* LETTER SPACING */
        --letter-spacing-sm: 0.066rem;
        --letter-spacing-size: 0.1rem;
        --letter-spacing-md: 0.15rem;
        --letter-spacing-lg: 0.225rem;
        --letter-spacing-xl: 0.337rem;
        --letter-spacing-xxl: 0.506rem;
        --letter-spacing-huge: 0.759rem;
        --letter-spacing-jumbo: 1.139rem;

        /* LINE HEIGHT */
        --line-height-size: 25.6px;
        --line-height-xsmd: 28.8px;
        --line-height-smd: 32px;
        --line-height-md: 38.4px;
        --line-height-lg: 57.6px;
        --line-height-xl: 86.4px;
        --line-height-xxl: 129.6px;
        --line-height-huge: 194.4px;
        --line-height-jumbo: 291.6px;

        /* FONT WEIGHT */
        --font-weight-reg: 400;
        --font-weight-semi-bold: 500;
        --font-weight-bold: 700;

        /* DESKTOP HEADINGS */
        --h1-size: 7.594rem;
        --h2-size: 5.063rem;
        --h3-size: 3.375rem;
        --h4-size: 2.25rem;
        --h5-size: 1.5rem;
        --h6-size: 1.25rem;

        /* MOBILE HEADINGS */
        --h1-mobile-size: 5.063rem;
        --h2-mobile-size: 3.375rem;
        --h3-mobile-size: 2.25rem;
        --h4-mobile-size: 1.5rem;
        --h5-mobile-size: 1.25rem;
        --h6-mobile-size: 1rem;

        /* SPACING */
        --size-xxs: 4px;
        --size-xs: 7px;
        --size-sm: 11px;
        --size: 16px;
        --size-md: 24px;
        --size-lg: 36px;
        --size-xl: 54px;
        --size-xxl: 81px;
        --size-huge: 121px;
        --size-jumbo: 182px;

        /* COLORS */
        --color-black: #292929;
        --color-gray: #C2C2C2;
        --color-white: #ffffff;
        --color-primary: #74B7A0;
        --color-secondary: #376C59;
        --color-tertiary: #DB4941;
        --color-button-primary: rgba(116, 183, 160, 0.4);
    }


    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  
    html,
    body {
        font-size: 16px;
        font-family: 'Roboto Mono', monospace;
    }

    body {
        overflow-x: hidden;
    }

    img {
        max-width: 100%;
    }

    /* MARGINS AND PADDINGS */
    .section {
        padding: 150px 0;
    }

    .section-padding-top {
        padding-top: 150px;
    }

    .section-padding-btm {
        padding-bottom: 150px;
    }

    .inner-content-padding-top {
        padding-top: 50px;
    }

    .inner-content-padding-btm {
        padding-bottom: 50px;
    }

    .inner-content-padding-sm-btm {
        padding-bottom: 25px;
    }

    .padding-left-sm {
        padding-left: 25px;
    }

    .oslo-hook {
        width: 100%;
    }


`;

export default GlobalStyle;
