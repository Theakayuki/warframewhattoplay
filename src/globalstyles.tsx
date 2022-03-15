import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        // setup css variables
        --color-background: #243258;
        --color-light-blue: #B3BFE2;
        --color-black: #000;
        --color-white: #fff;

    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        background-color: var(--color-background);
    }
`;

export default GlobalStyles;
