import styled from 'styled-components'

export const NotificationStyle = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    margin-bottom: 36px;
    pointer-events: none;
    z-index: 99;
    
    .notification__component {
        display: flex;
        padding: 12px;
        border-radius: 3px;
        background-color: var(--orange);
        align-items: center;
        justify-content: center;
        color: white;
        animation: fadeIn 0.5s ease-out;        
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`