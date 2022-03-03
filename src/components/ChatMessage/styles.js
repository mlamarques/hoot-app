import styled from 'styled-components'

export const ChatMessageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .main__container {
        display: flex;
        flex-direction: row;
        width: 87.5%;
        justify-content: flex-end;
        
        .avatar__container {
            display:flex;
            position: relative;
            height: 100%;
            width: 56px;
            align-items: flex-end;

            .avatar--wrapper {
                position: absolute;
                display: block;
                right: 0;
                width: 40px;
                height: 40px;
            }
        }

        .message__container {
            position: relative;
            display: flex;
            flex-shrink: 1;
            max-width: 100%;
            min-width: 0;
            padding: 16px 12px;
            border: solid 0px black;
            background-color: var(--orange);
            border-radius: 16px;
            font-size: 1rem;
            line-height: 1.25rem;
            word-break: break-word;
            overflow-wrap: break-word;
            overflow: hidden;
        }
    }

    .date__container {
        display: flex;
        width: 87.5%;
        margin-top: 2px;
        justify-content: flex-end;
        overflow: hidden;

        .date--wrapper {
            margin-left: 52px;
            font-size: 0.75rem;
            line-height: 1rem;
            color: rgb(110, 118, 125);
        }
    }
`