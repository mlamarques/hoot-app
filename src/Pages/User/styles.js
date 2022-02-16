import styled from 'styled-components'

export const UserStyle = styled.div`
    position: relative;

    .main__container {
        display: flex;
        justify-self: center;
        flex-direction: column;
        width: 600px;
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

        .hoot--individual__container {
            background-color: var(--deep-saffron);
            border: 1px solid var(--orange);
            
            .text__container {
                font-weight: 700;
                max-width: 100%;
                overflow-wrap: break-word;
            }

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

