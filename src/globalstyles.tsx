import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        // setup css variables
        --color-background: #243258;
        --color-background-secondary: #4d0707;
        --color-light-blue: #B3BFE2;
        --color-black: #000;
        --color-white: #fff;

    }

    html {
        background: linear-gradient(to bottom, var(--color-background-secondary) 0%, var(--color-background) 100%) no-repeat center center fixed;

    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        //background gradient from top to bottom with img overlay
    }
`;

export default GlobalStyles;
