import styled from 'styled-components'

export const PasswordChangeStyle = styled.div`

.password__container {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 12px 16px;

    .password__wrapper--input {
        position: relative;
        display: flex;
        background-color: transparent;
        border: 2px solid ;
        border-color: var(--mellow-apricot-shade);
        border-radius: 9px;
        width: 100%;
        min-height: 62px;
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
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.25rem;
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
            font-size: 1rem;
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
                    background-color: var(--mellow-apricot-shade);
                }
            }
        }
    }
}

.password-division {
    height: 1px;
    background-color: rgb(47, 51, 54);
    margin: 4px 0;
}

.new-password__container {



    
}

.confirm-password__container {



    
}

.password--validation {
    color: var(--red-twitter);
    font-size: .8rem;
    line-height: 1rem;
    margin: 0 8px;
}

.save__container {
    display: flex;
    margin-top: 12px;
    align-items: center;
    justify-content: flex-end;

    .save__button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--orange);
        color: black;
        font-size: .95rem;
        line-height: 1.25rem;
        font-weight: 700;
        min-width: 48px;
        min-height: 36px;
        padding: 0px 16px;
        margin: 0px 12px;
        border-radius: 9999px;
        user-select: none;
        transition-duration: 0.2s;
        cursor: pointer;

        &:hover {
            background-color: var(--orange-hover);
        }
    }
}

`