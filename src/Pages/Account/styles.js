import styled from 'styled-components'

export const AccountStyle = styled.div`
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
        border: 1px solid rgba(0, 0, 0, 0.7);

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
        max-width: 600px;
        width: 100%;
        position: absolute;
        transform: translate(390px, 0);

        .info-description {
            width: 100%;
            padding: 12px 16px;

            .description--value {
                overflow-wrap: break-word;
                pointer-events: none;
            }
        }

        .option-item--link {
            width: 100%;
            min-height: calc(48px);
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

            .icon__container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 48px;
                width: 48px;
                margin-right: 16px;
            }

            .text__container {
                display: flex;
                width: 100%;
                font-weight: 500;
                color: var(--black);
                justify-content: flex-start;
            }

            .icon-arrow-forward {
                padding-left: 12px;
            }
        }

    }
`

