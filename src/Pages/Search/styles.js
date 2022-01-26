import styled from 'styled-components'

export const SearchStyle = styled.div`

    .main__container {
        display: flex;
        justify-self: center;
        flex-direction: column;
        width: 600px;
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
            height: 200px;
            background-color: pink;
            opacity: 0.5;
            border: 1px solid var(--orange);
        }
    }

    .alternative__container {
        width: 100%;
    }
`

