import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --orange: #FE8000;
        --mellow-apricot: #EFBD76;
        --deep-saffron: #FFA52B;
        --eerie-black: #191919;
        --black: #000000;
        --light-text: rgb(217, 217, 217);
    }

    *, *:before, *:after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        font-family: 'Inter';
    }
`

export default GlobalStyle;