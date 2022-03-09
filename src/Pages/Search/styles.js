import styled from 'styled-components'

export const SearchStyle = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 990px;

    .main__container {
        display: flex;
        justify-self: center;
        flex-direction: column;
        max-width: 600px;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        border-right: 1px solid rgba(0, 0, 0, 0.7);

        .main__header {
            display: flex;
            position: sticky;
            top: -0.5px;
            min-height: 55px;
            padding-left: 16px;
            padding-right: 16px;
            align-items: center;
            background-color: var(--mellow-apricot-transparent);
            z-index: 3;
            
            h1 {
                cursor: pointer;
            }
        }

        .hoot--individual__container {
            display: flex;
            flex-direction: column;
            position: relative;
            align-items: center;
            justify-content: center;
            margin: 0 20px;

            .search__container {
                display: flex;
                position: relative;
                width: 100%;
                align-items: center;
                justify-content: center;
                border-radius: 9999px;
                border: 1px solid transparent;
                background-color: var(--black-shade);

                &:focus-within {
                    border: 1px solid var(--orange);
                    background-color: var(--mellow-apricot-shade);

                    .search--logo__container {
                        svg {
                            fill: var(--orange-hover)
                        }
                    }

                }

                .search--logo__container {
                    display: flex;
                    align-items: center;
                    user-select: none;
                    
                    svg {
                        display: flex;
                        padding-left: 12px;
                        min-width: 32px;
                        user-select: none;
                    }
                }

                .input--wrapper {
                    display: flex;
                    position: relative;
                    flex-direction: row;
                    flex: 1;
                    align-items: center;

                    .search--input {
                        outline: none;
                        position: relative;
                        background: none;
                        flex: 1;
                        border: 0;
                        color: rgb(32, 35, 36);
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1;
                        padding: 12px;
                    }

                    .label__container {
                        display: flex;
                        position: absolute;
                        left: 12px;
                    }
                }

                .clean-input__container {
                    position: relative;
                    align-items: center;
                    padding-left: 4px;
                    margin-right: 8px;

                    .clean-input__background {
                        height: 24px;
                        width: 24px;
                        border-radius: 9999px;
                        transition: 0.2s ease;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--orange);
                        }

                        .icon-close {
                            padding: 2px;
                            fill: rgb(32, 35, 36);
                        }
                    }
                }
            }

            .results__container {
                display: flex;
                position: relative;
                flex: 1;
                height: 100%;

                .loading__container {
                    min-height: 20px;
                }
            }
        }

        .results__container {
            position: relative;
            margin-top: 12px;
            max-width: 100%;
        }
    }

    .alternative__container {
        width: 100%;
    }

    @media only screen and (max-width: 1078px) {
        width: 920px;
    }

    @media only screen and (max-width: 988px) {
        width: 600px;
    }

    @media only screen and (max-width: 688px) {
        max-width: 600px;
        width: 100%;
    }
`

