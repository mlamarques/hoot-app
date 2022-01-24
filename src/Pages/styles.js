import styled from 'styled-components'

export const LoginStyle = styled.div`

    .sign-in__container {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 600px;
        height:650px;
        background-color: var(--eerie-black); /* rgb(66, 92, 104) */
        border-radius: 16px;
        min-width: 364px;
        padding: 32px;
    }

    .logo {
        height: 90px;
        align-self: center;
        margin-top: 12px;
    }

    .sign-in {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--light-text);
        margin-bottom: 16px;
    }

    .username__container {
        position: relative;
        display: flex;
        background-color: white;
        border: 1px solid transparent;
        border-radius: 9px;
        /* width: 100%; */
        min-width: 364px;
        max-width: 364px;
        height: 64px;
        align-self: center;
        overflow: hidden;

        &:focus-within {
            border: 2px solid var(--orange);
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

    .btn--next {
        min-width: 364px;
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
        min-width: 364px;
        max-width: 364px;
        min-height: 36px;
        align-self: center;
        display: grid;
        place-items: center;
        margin-bottom: 12px;
        margin-top: 12px;
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
`

