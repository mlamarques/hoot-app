import styled from 'styled-components'

export const ChangePasswordStyle = styled.div`

    display: flex;
    flex-direction: row;
    position: relative;
    width: 990px;
    
    .main__container {
        display: flex;
        justify-self: center;
        flex-direction: column;
        width: 390px;
        height: 100vh;
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

        .settings__container {

            .setting-option__container {
                background-color: var(--mellow-apricot);

                .account-item--link {
                    width: 100%;
                    padding: 12px 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: var(--eerie-black);
                    border: 2px solid transparent;
                    transition: 175ms ease-in;

                    &:hover {
                        background-color: var(--mellow-apricot-shade);
                    }

                    .text__container {
                        font-weight: 500;
                        color: var(--black);
                    }
                }
            }
        }
    }

    .alternative__container {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 600px;
        width: 100%;
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

            .go-back--wrapper {
                position: relative;
                height: 36px;
                width: 36px;
                margin-right: 16px;
                border-radius: 9999px;
                transition-duration: 0.5s;
                cursor: pointer;

                svg {
                    fill: black;
                }

                &:hover {
                    background-color: var(--deep-saffron);
                }
            }
            
            .title__container {
                display: flex;
                flex: 1;
            }
            
        }

        .change-password_container {
        }
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

