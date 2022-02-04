import styled from 'styled-components'

export const LoadingStyle = styled.div`
    position: absolute;
    /* width: 100vw;
    height: 100vh; */
    width: 100%;
    height: 100%;
    user-select: none !important;
    z-index: 1000;

    .loading__component {
        position: relative;
        display: flex;
        background-color: black;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    .loader {
        position:absolute;
        width:100px;
        height:100px;

        .container-B{
            position:absolute;
            width:100%;
            height:100%;
            left:0;
            top:0;

            .hex0, .hex120, .hex240{
                position:absolute;
                box-sizing:border-box;
                width:100%;
                height:57.74%;
                left:0;
                top:21.13%;
                border-left:2px solid #fff;
                border-right:2px solid #fff;
            }

            .hex0{
                animation:rotation0 4s infinite linear;
            }

            .hex120{
                transform:rotate(120deg);
                animation:rotation120 4s infinite linear;
            }

            .hex240{
                transform:rotate(240deg);
                animation:rotation240 4s infinite linear;
            }

            .spinner2 {
                position:absolute;
                width:100%;
                height:100%;
                left:0;
                top:0;
                animation : rotation0 4s infinite linear, resize2 4s infinite linear;
            }
        }

        @keyframes rotation0{
            0%{
                transform:rotate(0deg);
            }
            100%{
                transform:rotate(360deg);
            }
        }

        @keyframes rotation120{
            0%{
                transform:rotate(120deg);
            }
            100%{
                transform:rotate(480deg);
            }
        }

        @keyframes rotation240{
            0%{
                transform:rotate(240deg);
            }
            100%{
                transform:rotate(600deg);
            }
        }

        @keyframes resize2{
            0%,33.33%,66.66%,100%{
                width:100%;
                height:100%;
                left:0%;
                top:0%;
            }
            16.66%,49.99%, 83.333%{
                width:70%;
                height:70%;
                left:15%;
                top:15%;
            }
        }
    }
    
`