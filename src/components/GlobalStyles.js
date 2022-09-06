import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        box-sizing: border-box;
        scroll-behavior: smooth;

        /* lightmode */
        --lm-text: hsl(200, 15%, 8%);
        --lm-input: hsl(0, 0%, 52%);
        --lm-element: hsl(0, 0%, 100%);
        --lm-background: hsl(0, 0%, 98%);
        --lm-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.1);

        /* darkmode */
        --dm-text: hsl(0, 0%, 100%);
        --dm-element: hsl(209, 23%, 22%);
        --dm-background: hsl(207, 26%, 17%);
        --dm-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.1);

        /* variables */
        --text: ${({darkMode}) => darkMode ? "var(--dm-text)" : "var(--lm-text)"};
        --input: ${({darkMode}) => darkMode ? "var(--dm-input)" : "var(--lm-input)"};
        --element: ${({darkMode}) => darkMode ? "var(--dm-element)" : "var(--lm-element)"};
        --background: ${({darkMode}) => darkMode ? "var(--dm-background)" : "var(--lm-background)"};
        --box-shadow: ${({darkMode}) => darkMode ? "var(--dm-box-shadow)" : "var(--lm-box-shadow)"};

    }

    body {
        margin: 0;
        min-height: 100vh;
        font-family: 'Nunito Sans', sans-serif;
        color: var(--text);
        background-color: var(--background);
    }

    body > div {
        min-height: 100vh;
    }

    img {
        width: 100%;
        aspect-ratio: 6/4;
    }

    span {
        font-weight: 600;
    }
`

export default GlobalStyles