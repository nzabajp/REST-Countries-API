import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        box-sizing: border-box;
    }

    body {
        border: 1px solid green;
        margin: 0;
        min-height: 100vh;
        font-family: 'Nunito Sans', sans-serif;
    }

    body > div {
        border: 1px solid pink;
        min-height: 100vh;
    }
`

export default GlobalStyles