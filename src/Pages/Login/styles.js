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

        /* .loading__component {
            transform: translate(-32px, -32px);
            border-radius: 16px;
        } */

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

        /* ------------------------------- USERNAME ------------------------------- */

        .sign-in {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;
            color: var(--light-text);
            margin-bottom: 16px;
        }

        .username__container {
            position: relative;
            display: flex;
            background-color: white;
            border: 2px solid transparent;
            border-radius: 9px;
            /* width: 100%; */
            width: 364px;
            max-width: 364px;
            margin-bottom: 16px;
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

        .btn--next {
            width: 364px;
            max-width: 364px;
            min-height: 36px;
            align-self: center;
            display: grid;
            place-items: center;
            margin-bottom: 12px;
            margin-top: 12px;
            padding-left: 16px;
            padding-right: 16px;
            font-family: Karla, sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
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

            span {
                
            }
        }

        .btn--forget-password {
            width: 364px;
            max-width: 364px;
            min-height: 36px;
            align-self: center;
            display: grid;
            place-items: center;
            margin-bottom: 12px;
            /* margin-top: 12px; */
            padding-left: 16px;
            padding-right: 16px;
            color: var(--light-text);
            font-family: Karla, sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            background-color: transparent;
            outline-style: none;
            border: solid 1px;
            border-color: rgba(239, 234, 244, 0.3);
            border-radius: 9999px;
            transition-property: background-color;
            transition-duration: 0.2s;
            user-select: none;
            cursor: pointer;

            &:hover {
                background-color: rgba(239, 234, 244, 0.2);
            }
        }

        .create-account__container {
            width: 364px;
            max-width: 364px;
            align-self: center;
            margin-top: 40px;
            color: var(--light-text);

            .sign-up--text {
                user-select: none;
            }

            .sign-up--link {
                color: var(--orange);
                padding-left: 8px;

                &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }

        /* ------------------------------- PASSWORD ------------------------------- */

        .go-back--wrapper {
            position: absolute;
            left: 0;
            top: 0;
            height: 34px;
            width: 34px;
            margin: 16px;
            border-radius: 9999px;
            transition-duration: 0.5s;
            fill: var(--light-text);
            cursor: pointer;

            &:hover {
                background-color: var(--black-shade);
            }
        }

        .enter-password {
            text-align: left;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--light-text);
            margin-top: 12px;
        }

        .username--selected {
            position: relative;
            background: none;
            width: 100%;
            border: 1px solid rgba(239, 234, 244, 0.3);
            border-radius: 6px;
            color: var(--light-text);
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 1;
            padding-top: 32px;
            padding-bottom: 8px;
            padding-left: 8px;
            padding-right: 8px;
            margin-top: 16px;
            pointer-events: none;
        }

        label[for=selectedUsername] {
            position: absolute;
            left: 8px;
            top: 8px;
            color: var(--light-text);
            font-size: 0.85rem;
            font-weight: 400;
            pointer-events: none;
        }

        .password__container {
            position: relative;
            display: flex;
            background-color: white;
            border: 2px solid transparent;
            border-radius: 9px;
            width: 100%;
            min-height: 62px;
            margin-top: 16px;
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
                    border-radius: 9999px;
                    transition: 0.2s ease;
                    cursor: pointer;

                    &:hover {
                        background-color: var(--light-text);
                    }
                }
            }
        }

        .log-in__bottom {
            height: 100%;
            display: flex;
            align-items: flex-end;
            margin-bottom: 36px;

            .btn--log-in {
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

    .author__container {
        position: fixed;
        display: flex;
        flex-direction: row;
        height: 48px;
        right: 2rem;
        bottom: 3rem;
        align-items: center;
        user-select: none;
        z-index: 1;

        .linkedin-badge {
            position: relative;
            display: flex;
            height: 100%;
            max-width: 3rem;
            justify-content: center;
            margin: 0 1.25rem;

            .linkedin-badge__background {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: -12px;
                border-radius: 9999px;
                z-index: -1;
            }

            &:hover {
                .linkedin-badge__background {
                    background-color: var(--mellow-apricot-shade)
                }
            }
        }

        .github-badge {
            position: relative;
            display: flex;
            height: 100%;
            max-width: 3rem;
            justify-content: center;
            margin: 0 1.25rem;

            .github-badge__background {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: -12px;
                border-radius: 9999px;
                z-index: -1;
            }

            &:hover {
                .github-badge__background {
                    background-color: var(--mellow-apricot-shade)
                }
            }
        }
    }

    @media only screen and (max-width: 675px) {
        display: flex;
        height: 100vh;
        width: 100vw;
        justify-content: center;
        background-color: var(--eerie-black);

        .sign-in__container {
            display: flex;
            width: 364px;
            height: 500px;
            padding: 0 32px;
            border-radius: 0;

            .go-back--wrapper {
                position: fixed;
                top: 8px;
                left: 8px;
            }

            .logo__container {
                margin-top: 12px;
                height: 60px;
            }

            .username__container, .btn--next, .btn--forget-password, .create-account__container {
                width: 100%;
            }
        }

        .author__container {
            position: absolute;
            height: 48px;
            right: 0;
            left: 0;
            bottom: 4rem;
            width: 100%;
            justify-content: center;

            .linkedin-badge {
                fill: var(--eerie-black);
                margin: 0 2rem;

                &:hover {
                    .linkedin-badge__background {
                        background-color: var(--light-text);
                    }
                }

                .linkedin-badge__background {
                    background-color: var(--icon-empty);
                }
            }

            .github-badge {
                margin: 0 2rem;

                &:hover {
                    .github-badge__background {

                        background-color: var(--light-text);
                    }  
                }

                .github-badge__background {
                    background-color: var(--icon-empty);
                }                
            }
        }
    }
    
`

