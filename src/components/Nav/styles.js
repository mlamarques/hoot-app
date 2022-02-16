import styled from 'styled-components'

export const NavStyle = styled.div`

    justify-self: end;

    .menu__container {
        display: flex;
        /* max-width: 275px; */
        /* width: 100%; */
        width: 275px;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 12px;
        padding-right: 12px;
        border: 1px solid rgba(0, 0, 0, 0.2);

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
    }
    
`