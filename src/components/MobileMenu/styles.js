import styled from 'styled-components'

export const MobileMenuStyle = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;

    .mobile-menu__container {
        position: relative;
        height: 100%;
        width: 70%;
        background-color: black;
        transition-duration: 250ms;
        transform: translateX(-100%);

        .go-back--wrapper {
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 34px;
            width: 34px;
            margin: 16px;
            border-radius: 9999px;
            transition-duration: 0.5s;
            fill: white;
            cursor: pointer;

            &:hover {
                background-color: var(--black-shade);
                /* transform: rotate(90deg); */

                .tooltip {
                    background-color: rgba(91, 112, 131, 0.8);
                    color: #FFF;
                }
            }

            &:not(:hover) {
                .tooltip {
                    transition:  none;
                }   
            }

            .tooltip {
                position: absolute;
                display: flex;
                left: calc(-100% + 34px;);
                top: 100%;
                align-items: stretch;
                justify-content: center;
                border-radius: 2px;
                margin-top: 2px;
                padding: 2px 5px;
                color: transparent;
                font-size: 12px;
                background-color: transparent;
                overflow: hidden;
                transition-property: background-color, color;
                transition:  0.15s ease 0.75s;
                pointer-events: none;

                span {
                    position: relative;
                    width: max-content;
                }                
            }

            /* &[title]:hover::after {
                position: relative;
                display: flex;
                align-self: center;
            } */
        }
    }

    .show-menu {
        transform: translateX(0);
    }
`