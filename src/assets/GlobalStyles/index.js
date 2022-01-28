import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* https://www.schemecolor.com/cartoon-halloween-color-palette.php */
    :root {
        --orange: #FE8000;
        --mellow-apricot: hsl(35, 79%, 70%);
        --mellow-apricot-shade: hsl(35, 79%, 62%);
        --deep-saffron: #FFA52B;
        --eerie-black: #191919;
        --black: #000000;
        --black-shade: rgba(239, 243, 244, 0.1);
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
        scrollbar-color: rgb(61, 65, 69) rgb(21, 24, 28);
    }
`

export default GlobalStyle;