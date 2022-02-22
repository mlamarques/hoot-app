import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* https://www.schemecolor.com/cartoon-halloween-color-palette.php */
    :root {
        --orange: hsl(30, 100%, 50%);
        --orange-hover: hsl(30, 90%, 48%);
        --mellow-apricot: hsl(35, 79%, 70%);
        --mellow-apricot-transparent: hsla(35, 79%, 70%, 0.95);
        --mellow-apricot-shade: hsl(35, 79%, 62%);
        --deep-saffron: #FFA52B;
        --eerie-black: #191919;
        --black: #000000;
        --black-shade: rgba(239, 243, 244, 0.1);
        --light-text: rgb(217, 217, 217);
        --icon-empty: rgb(110, 118, 125);
        --blue-twitter: rgb(29, 155, 240);
        --blue-twitter-shade: rgba(29, 155, 240, 0.1);
        --green-twitter: rgb(0, 186, 124);
        --green-twitter-shade: rgba(0, 186, 124, 0.1);
        --red-twitter: rgb(249, 24, 128);
        --red-twitter-shade: rgba(249, 24, 128, 0.1);
        --red-button-color: rgba(244, 33, 46, 1);
        --red-button-background: rgba(249, 24, 128, 0.1);
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

    a:link {
        text-decoration: inherit;
        color: inherit;
        cursor: pointer;
    }

    a:visited {
        text-decoration: inherit;
        color: inherit;
    }
    
`

export default GlobalStyle;