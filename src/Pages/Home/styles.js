import styled from 'styled-components'

export const HomeStyle = styled.div`
    display: flex;
    position: relative;
    width: 990px;

    .main__container {
        display: flex;
        position: relative
        justify-self: center;
        flex-direction: column;
        max-width: 600px;
        height: 100%;
        min-height: 100vh;
        width: 100%;
        border-right: 1px solid rgba(0, 0, 0, 0.7);

        .main__header {
            display: flex;
            flex-direction: row;
            position: sticky;
            top: -0.5px;
            min-height: 55px;
            padding-left: 16px;
            padding-right: 16px;
            align-items: center;
            background-color: var(--mellow-apricot-transparent);
            z-index: 3;

            .user--avatar__container {
                display: flex;
                height: 100%;
                min-width: 56px;
                align-items: center;
                cursor: pointer;

                .user--avatar__wrapper {
                    height: 32px;
                    width: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 9999px;
                    background-color: var(--white-shade);
                } 
            }
            
            h1 {
                cursor: pointer;
            }
        }

        .feed__container {
            display: flex;
            position: relative;
            height: 100%;
            padding-bottom: 50vh;

            .hoots_container {
                display: flex;
                flex-direction: column;
                flex: 1;
                width: 100%;
                height: 100%;
            }
        }

        /* .hoot--individual__container {
            height: 200px;
            background-color: var(--deep-saffron);
            opacity: 0.5;
            border: 1px solid var(--orange);
        } */
    }

    .alternative__container {
        
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

