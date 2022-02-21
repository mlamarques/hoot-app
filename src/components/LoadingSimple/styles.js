import styled from 'styled-components'

export const LoadingSimpleStyle = styled.div`
    
    .loading__component {
        display: flex;
        position: relative;
        width: 100%;
        height: 10px;
        background-color: var(--black-shade);
        overflow: hidden;

        .loading--fill {
            width: 50%;
            background-color: var(--orange);
            animation-name: fill;
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }
    }

    @keyframes fill {
        0%   {transform: translateX(-75%);}
        100% {transform: translateX(200%);}
    }
`