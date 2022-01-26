import styled from 'styled-components'

export const NavStyle = styled.div`

    .nav__component {
        display: grid;
        
        .menu__container {
            display: flex;
            /* max-width: 275px; */
            /* width: 100%; */
            width: 275px;
            justify-self: end;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 12px;
            padding-right: 12px;
            border: 1px solid rgba(0, 0, 0, 0.2);

            .header--logo {
                display: flex;
                justify-content: center;
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
                align-items: stretch;
                width: 100%;

                .nav__item {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    text-decoration: inherit;
                    color: inherit;
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
            }
            
        }

        .main__container {
            display: flex;
            justify-self: center;
            flex-direction: column;
            width: 600px;
            border: 1px solid rgba(0, 0, 0, 0.7);

            h1 {
                cursor: pointer;
            }

            .main__header {
                display: flex;
                min-height: 55px;
                padding-left: 16px;
                padding-right: 16px;
                align-items: center;
            }

            .hoot--individual__container {
                height: 200px;
                background-color: var(--deep-saffron);
                opacity: 0.5;
                border: 1px solid var(--orange);
            }
        }

        .alternative__container {
            width: 100%;
        }

    }
    
`