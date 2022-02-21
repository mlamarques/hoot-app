import styled from 'styled-components'

export const LoginStyle = styled.div`

    .sign-in__container {
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 12px;
        width: 600px;
        height:650px;
        background-color: var(--eerie-black); /* rgb(66, 92, 104) */
        border-radius: 16px;
        min-width: 364px;
        padding: 32px;

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

        .logo__container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 12px;
            height: 120px;

            .logo {
                height: 100%;
            }
        }

        .signup--title {
            text-align: left;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--light-text);
            margin-top: 12px;
        }

        /* ------------------------------- USERNAME ------------------------------- */

        .username__container {
            display: flex;
            position: relative;
            
            .username__wrapper--input {
                position: relative;
                display: flex;
                background-color: white;
                border: 2px solid transparent;
                border-radius: 9px;
                width: 100%;
                min-height: 62px;
                margin-top: 24px;
                align-self: center;
                overflow: hidden;

                &:focus-within {
                    border: 2px solid var(--orange);
                }

                .username--input {
                    outline: none;
                    position: relative;
                    background: none;
                    width: 100%;
                    border: 0;
                    color: #212121;
                    font-size: 1.25rem;
                    font-weight: 400;
                    line-height: 1;
                    padding-top: 12px;
                    padding-bottom: 8px;
                    padding-left: 8px;
                    padding-right: 8px;
                    margin-top: 16px;

                    &:focus + label {
                        color: var(--orange); /* rgb(29, 155, 240) */
                        transform: translate(-12%, -50%) scale(0.75);
                    }

                    &:valid + label {
                        color: var(--orange); /* rgb(29, 155, 240) */
                        transform: translate(-12%, -50%) scale(0.75);
                    }
                }

                label[for=usernameContainer] {
                    position: absolute;
                    left: 8px;
                    color: #757575;
                    font-size: 1.25rem;
                    font-weight: 300;
                    transition: 0.2s ease;
                    align-self: center;
                    pointer-events: none;
                }

                .clean-input__container {
                    /* position: absolute;
                    right: 8px;
                    top: 50%; */
                    position: relative;
                    right: 0;
                    align-self: center;
                    height: 24px;
                    width: 28px;
                    padding-left: 4px;
                    padding-top: 12px;
                    margin-right: 8px;
                    
                    /* transform: translate(0, -20%); */

                    .clean-input__background {
                        height: 24px;
                        width: 24px;
                        border-radius: 9999px;
                        transition: 0.2s ease;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--light-text);
                        }

                        .icon-close {
                            padding: 2px;
                            fill: rgb(32, 35, 36) !important;
                        }
                    }
                }

                .characters-length__container {
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding: 2px;
                    pointer-events: none;
                    user-select: none;
                }

            }

            .username--validation {
                position: absolute;
                bottom: 0;
                height: 20px;
                padding: 4px;
                font-size: 0.85rem;
                color: var(--orange);
                transform: translate(0, 100%);
                overflow: unset;
            }
        }

        

        

        /* ------------------------------- PASSWORD ------------------------------- */

        /* .enter-password {
            text-align: left;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--light-text);
            margin-bottom: 16px;
        } */

        .password__container {
            display: flex;
            position: relative;

            .password__wrapper--input {
                position: relative;
                display: flex;
                background-color: white;
                border: 2px solid transparent;
                border-radius: 9px;
                width: 100%;
                min-height: 62px;
                margin-top: 24px;
                align-self: center;
                overflow: hidden;

                &:focus-within {
                    border: 2px solid var(--orange);
                }

                .password--input {
                    outline: none;
                    position: relative;
                    background: none;
                    width: 100%;
                    border: 0;
                    color: #212121;
                    font-size: 1.25rem;
                    font-weight: 400;
                    line-height: 1;
                    padding-top: 12px;
                    padding-bottom: 8px;
                    padding-left: 8px;
                    padding-right: 8px;
                    margin-top: 16px;

                    &:focus + label {
                        color: var(--orange); /* rgb(29, 155, 240) */
                        transform: translate(-12%, -50%) scale(0.75);
                    }

                    &:valid + label {
                        color: var(--orange); /* rgb(29, 155, 240) */
                        transform: translate(-12%, -50%) scale(0.75);
                    }
                }

                label[for=passwordContainer] {
                    position: absolute;
                    left: 8px;
                    color: #757575;
                    font-size: 1.25rem;
                    font-weight: 300;
                    transition: 0.2s ease;
                    align-self: center;
                    pointer-events: none;
                }

                .toggle-visible__container {
                    /* position: absolute;
                    right: 8px;
                    top: 50%; */
                    position: relative;
                    align-self: center;
                    height: 24px;
                    width: 28px;
                    padding-left: 4px;
                    padding-top: 12px;
                    margin-right: 8px;
                    /* transform: translate(0, -20%); */

                    .icon--visible__background {
                        height: 24px;
                        width: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 9999px;
                        transition: 0.2s ease;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--light-text);
                        }
                    }
                }
            }

            .password--validation {
                position: absolute;
                bottom: 0;
                height: 20px;
                padding: 4px;
                font-size: 0.85rem;
                color: var(--orange);
                transform: translate(0, 100%);
                overflow: unset;
            }
        }

        .create-account__container{
            height: 100%;
            display: flex;
            align-items: flex-end;
            margin-bottom: 36px;

            .btn--create-account {
                min-height: 46px;
                height: 46px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 12px;
                margin-top: 12px;
                padding-left: 16px;
                padding-right: 16px;
                font-family: Karla, sans-serif;
                font-weight: 700;
                font-size: 1rem;
                line-height: 24px;
                text-align: center;
                background-color: rgb(239, 243, 244);
                outline-style: none;
                border: 1px solid rgba(0, 0, 0, 0);
                border-radius: 9999px;
                transition-property: background-color;
                transition-duration: 0.2s;
                user-select: none;
                cursor: pointer;

                &:hover {
                    background-color: rgb(215, 219, 220);
                }
            }
        }
    }
    
`

