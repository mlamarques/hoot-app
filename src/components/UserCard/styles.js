import styled from 'styled-components'

export const UserCardStyle = styled.div`
    width: 200px;
    height: 100px;
    background-color: var(--mellow-apricot-shade);
    position: absolute;
    bottom: 0;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--orange);
        cursor: pointer;
    }
`