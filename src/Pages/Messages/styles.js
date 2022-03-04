import styled from 'styled-components'

export const MessagesStyle = styled.div`

    display: flex;
    position: relative;
    width: 990px;
    height: 100%;

    .main__container--header {
        display: flex;
        flex: 1;
        flex-direction: column;
        max-width: 600px;
        width: 100%;
        height: 100%;
        border-left: 1px solid rgba(0, 0, 0, 0.7);
        border-right: 1px solid rgba(0, 0, 0, 0.7);
        overflow: hidden;
        overflow-y: auto;

        .main__header {
            display: flex;
            position: sticky;
            top: 0;
            min-height: 55px;
            padding-left: 16px;
            padding-right: 16px;
            align-items: center;
            background-color: var(--mellow-apricot-transparent);
            border-bottom: 1px solid black;
            z-index: 3;
            
            h1 {
                cursor: pointer;
            }
        }

        .messages__container {
            width: 100%;
        }
    }

    .chat__container {
        display: flex;
        max-width: 600px;
        width: 100%;
        position: relative;
        border-right: 1px solid black;

        .chat-empty--wrapper {
            display: flex;
            flex-direction: column;
            max-width: 400px;
            align-self: center;
            align-items: flex-start;
            margin: 2rem auto;
            padding: 0 2rem;

            .title-empty {
                font-weight: 700;
                font-size: 2rem;
                line-height: 2.25rem;
                padding-bottom: 8px;
            }

            .text-empty {
                font-size: 1rem;
                line-height: 1.25rem;
                padding-bottom: 12px;
            }
        }

        .chat-full--wrapper {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            min-width: 0px;

            .chat__header {
                display: flex;
                flex-direction: row;
                position: sticky;
                top: 0;
                backface-visibility: hidden;
                height: 55px;
                flex-shrink: 0;
                width: 100%;
                min-width: 0px;
                align-items: center;
                justify-content: flex-start;
                padding: 0 16px;
                background-color: var(--mellow-apricot-transparent);
                border-bottom: 1px solid black;
                z-index: 2;

                .user-avatar--wrapper {
                    display: flex;
                    flex-basis: 20px;
                    width: 100%;
                    margin-right: 12px;
                    align-items: center;
                }

                .user-info--wrapper {
                    min-width: 0px;
                    max-width: 100%;

                    .nickname__container {
                        display: flex;
                        font-size: 1.25rem;
                        font-weight: 700;
                        line-height: 1.5rem;
                        min-width: 0px;
                        max-width: 100%;
                        
                        span {
                            overflow-wrap: break-word;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }

                    .username__container {
                        font-size: 0.75rem;
                        line-height: 1rem;
                        color: rgb(110, 118, 125);
                    }
                }
                
            }

        }    
        
        .chat-body__container {
            display: flex;
            position: relative;
            height: 100%;
            flex-direction: column;
            justify-content: flex-end;
            padding-top: 53px;
            padding-left: 16px;
            padding-right: 16px;
            margin-top: -53px;
            overflow-y: scroll;
        }

        .compose__container {
            display: flex;
            flex-direction: row;
            flex-shrink: 0;
            position: sticky;
            bottom: 0;
            align-items: center;
            height: 53px;
            min-height: 0;
            width: 100%;
            padding: 4px;
            background-color: var(--mellow-apricot);
            border-top: 1px solid black;

            .input--wrapper {
                position: relative;
                display: flex;
                flex: 1;
                height: 40px;
                align-items: center;
                border: 1px solid black;
                border-radius: 9999px;

                &:focus-within {
                    border: 2px solid var(--orange);
                }

                .label__container {
                    position: absolute;
                    left: 12px;
                    /* transform: translate(0, 50%;) */
                }

                .new-message--input {
                    display: flex;
                    flex: 1;
                    position: relative;
                    outline: none;
                    background: none;
                    border: 0;
                    color: rgb(32, 35, 36);
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1;
                    padding: 4px 12px;
                }
            }

            .send-message__container {
                display: flex;
                margin-left: 4px;
                cursor: pointer;

                &:hover {
                    .send-message--wrapper {
                        background-color: var(--mellow-apricot-shade);
                        border: 0px solid black;
                        border-radius: 9999px;
                    }
                }

                .send-message--wrapper {
                    display: flex;
                    width: 34px;
                    height: 34px;
                    align-items: center;
                    justify-content: center;
                    transition-duration: 0.2s;

                    .send-message--icon {
                        display: flex;
                        width: 20px;
                        height: 20px;
                        fill: var(--orange);
                    }
                }
            }
        }
    }
`

