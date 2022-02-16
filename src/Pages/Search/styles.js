import styled from 'styled-components'

export const SearchStyle = styled.div`

    .main__container {
        display: flex;
        justify-self: center;
        flex-direction: column;
        width: 600px;
        height: 100%;
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
            display: flex;
            flex-direction: column;
            position: relative;
            height: 200px;
            background-color: pink;
            opacity: 0.5;
            border: 1px solid var(--orange);

            .results__container {
                display: flex;
                position: relative;
                flex: 1;
                height: 100%;
                min-height: 0;
            }
        }
    }

    .alternative__container {
        width: 100%;
    }
`

