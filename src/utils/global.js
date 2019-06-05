import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
        /* 1rem = 10px */

        box-sizing: border-box;

        /* Declaracion de nuestras variables CSS */
        --color-main: ${props => props.theme.colors.main};
        --color-white: ${props => props.theme.colors.white};
        --color-background: ${props => props.theme.colors.background};
        --color-text: ${props => props.theme.colors.textColor};
        --color-shadow: ${props => props.theme.colors.shadow};
        --color-shadowBlue: ${props => props.theme.colors.shadowBlue};

        @media ${props => props.theme.mediaQueries.small} {
            font-size: 80%;
        }

        @media ${props => props.theme.mediaQueries.smallest} {
            font-size: 60%;
        }
    }

    body {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-height: 1.6;
    }

    a,
    input,
    textarea,
    button {
        outline: none;
        text-decoraton: none;
        font-family: inherit;
    }
`;
