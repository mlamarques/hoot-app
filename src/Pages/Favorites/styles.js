import styled from 'styled-components'

export const FavoritesStyle = styled.div`

    display: flex;
    position: relative;
    width: 990px;
    
    .main__container {
        display: flex;
        justify-self: center;
        flex-direction: column;
        max-width: 600px;
        width: 100%;
        height: 100vh;
        border: 1px solid rgba(0, 0, 0, 0.7);
        border-left: none;

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
                width: 100%;
            }
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

