import styled from 'styled-components'

export const FavoritesStyle = styled.div`

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

        .feed__container {
            display: flex;
            position: relative;
            height: 100%;

            .hoots_container {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
            }
        }
    }

    .alternative__container {
        width: 100%;
    }
`

