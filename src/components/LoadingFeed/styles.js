import styled from 'styled-components'

export const LoadingFeedStyle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--mellow-apricot);
    margin: 0;
    z-index: 99;
    
    .loader{
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
        height: 100px;
        width: 20%;
        text-align: center;
    }

    svg path {
        fill: #FF6700;
    }
    
`