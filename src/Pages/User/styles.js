import styled from 'styled-components'

export const UserStyle = styled.div`

    .main__container {
        display: flex;
        justify-self: center;
        flex-direction: column;
        width: 600px;
        height: 100vh;
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
            background-color: var(--deep-saffron);
            border: 1px solid var(--orange);

            .user--avatar__wrapper {
                height: 120px;
                width: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 9999px;
                background-color: var(--light-text);
            }
        }
    }

    .alternative__container {
        width: 100%;
    }

    
`

