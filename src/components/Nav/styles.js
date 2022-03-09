import styled from 'styled-components'

export const NavStyle = styled.div`
    display: flex;  
    width: 275px;
    justify-content: center;
    
    .menu__container {
        display: flex;
        /* max-width: 275px; */
        /* width: 100%; */
        position: fixed;
        top: 0px;
        height: 100%;
        width: 275px;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 12px;
        padding-right: 12px;
        

        .menu--wrapper {
            align-items: flex-start;

            .header--logo {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding-bottom: 2px;
                padding-top: 2px;
                

                .logo--redirect {
                    display: flex;
                    width: 68px;
                    height: 68px;
                    justify-content: center;
                    align-items: center;
                    padding: 12px;
                    border-radius: 9999px;
                    transition-property: background-color, box-shadow;
                    transition-duration: 0.2s;
                    cursor: pointer;

                    &:hover {
                        background-color: var(--mellow-apricot-shade)
                    }
                }
            }

            .nav__container {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;

                .nav__item {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    text-decoration: inherit;
                    color: inherit;
                    fill: rgb(25, 25, 25);
                    cursor: pointer;

                    &:hover {
                        .item--wrapper {
                            background-color: var(--mellow-apricot-shade);
                        }
                    }

                    .item--wrapper {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        padding: 12px;
                        border-radius: 9999px;
                        transition-property: background-color, box-shadow;
                        transition-duration: 0.2s;

                        .logo-item {
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            svg {
                                height: 1.75rem;
                            }
                        }

                        .logo-text {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 20px;
                            font-weight: 700;
                            line-height: 24px;
                            margin-left: 16px;
                            margin-right: 16px;
                        }
                    }
                }

                .nav__compose {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    text-decoration: inherit;
                    color: inherit;
                    background-color: var(--orange);
                    margin-top: 16px;
                    padding: 16px;
                    border-radius: 9999px;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 24px;
                    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
                    transition-property: background-color, box-shadow;
                    transition-duration: 0.2s;
                    cursor: pointer;

                    &:hover {
                        background-color: hsl(30, 100%, 45%);
                    }
                }
            }
        }

        @media only screen and (max-width: 1280px) {
            width: 88px;
            padding: 0 12px;

            .nav__container {
                height: 100%;
            }

            .header--logo {
                justify-content: center !important;
                align-items: center;
            }
            
            .nav__item {
                height: 100%;
                justify-content: center;

                .item--wrapper {
                    padding: 8px !important;
                }
            }

            .nav__compose {
                justify-content: center;
                align-items: center;
                width: unset !important;
                margin-bottom: 16px;
                

                .compose--wrapper {
                    width: 24px;
                    height: 24px;
                }
            }
            
        }

        @media only screen and (max-width: 1008px) {
            width: 68px;
            padding: 0 4px;
        }

        @media only screen and (max-width: 500px) {
            position: relative;
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            padding: 0;

            .menu--wrapper {
                display: flex;
                width: 100%;
                height: 100%;
                
                .nav__container {
                    display: flex;
                    flex-direction: row;

                    .nav__item {
                    }

                    .nav__compose {
                        position: absolute;
                        right: 20px;
                        bottom: 20px;
                        display: flex;
                        margin: 0;
                        transform: translate(0,-3.5rem);
                    }
                }
            }
        }
    
    }

    @media only screen and (max-width: 1280px) {
        width: 88px;
    }

    @media only screen and (max-width: 500px) {
        width: 100%;
        height: 100%;
        background-color: var(--mellow-apricot);
    }
`