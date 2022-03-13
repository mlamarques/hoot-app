import styled from 'styled-components'

export const UserCardMessageStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;

    .usercard-user__container {
        display: flex;
        flex: 1;
        flex-direction: row;
        max-width: 100%;
        align-items: center;
        padding: 16px;
        background-color: var(--mellow-apricot);
        user-select: none;
        transition: background-color 0.2s ease;
        cursor: pointer;

        &:hover {
            background-color: var(--mellow-apricot-shade);
            cursor: pointer; 

            .options-header {
                width: unset !important;
                height: 100% !important;
                opacity: 1 !important;
            }
        }

        .user--avatar__container {
            display: flex;
            margin-right: 12px;

            .user--avatar__wrapper {
                height: 48px;
                width: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 9999px;
                background-color: var(--white-shade);
            } 

        }

        .content--wrapper {
            display: flex;
            flex: 1;
            flex-direction: column;
            max-width: 100%;
            min-width: 0px;

            .content--header {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                max-width: 100%;
                min-width: 0px;
                margin-bottom: 2px;

                .info--header {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    min-width: 0px;
                    user-select: none;

                    .user-info--header {
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        max-width: 100%;
                        min-width: 0px;
                        overflow: hidden;

                        .user-info--wrapper {
                            display: flex;
                            flex-direction: row;
                            flex-shrink: 1;
                            max-width: 100%;
                            min-width: 0px;
                            overflow: hidden;

                            .name-user--wrapper {
                                display: flex;
                                font-size: 1rem;
                                line-height: 1.25rem;
                                font-weight: 700;
                                max-width: 100%;
                                min-width: 0px;

                                .name-user--value{
                                    overflow-wrap: break-word;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }

                            .username--wrapper {
                                display: flex;
                                flex-shrink: 1;
                                font-size: 1rem;
                                line-height: 1.25rem;
                                font-weight: 400;
                                color: rgb(110, 118, 125);
                                margin-left: 4px;
                                max-width: 100%;
                                min-width: 0px;

                                .username--value {
                                    overflow-wrap: break-word;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }
                        }

                        .content-message {
                            display: flex;
                            max-width: 100%;
                            min-width: 0px;
                            color: rgb(110, 118, 125);
                            overflow: hidden;

                            .last-message__container {
                                display: flex;
                                max-width: 100%;
                                min-width: 0px;

                                .last-message__value {
                                    overflow-wrap: break-word;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }

                    .message-date {
                        display: flex;
                        flex-shrink: 0;
                        margin-left: 16px;
                        white-space: nowrap;
                        overflow-wrap: break-word;
                        min-width: 0px;
                        font-size: 1rem;
                        line-height: 1.25rem;
                        font-weight: 400;
                        color: rgb(110, 118, 125);
                    }

                    .options-header {
                        position: relative;
                        overflow: visible;
                        width: 0;
                        opacity: 0;
                        height: 20px;
                        margin-left: 12px;
                        transition-duration: 0.2s;
                        cursor: pointer;

                        &:hover {

                            .options-background {
                                background-color: var(--blue-twitter-shade);
                            }

                            .icon--option__container {
                                svg {
                                    fill: var(--blue-twitter);
                                }
                            }
                        }

                        .options-background {
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            right: 0;
                            left: 0;
                            margin: -8px;
                            border-radius: 9999px;
                        }

                        .icon--option__container {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-width: 0px;
                            height: 20px;
                            width: 20px;
                            line-height: 20px;
                            
                            svg {
                                fill: inherit;
                            }
                        }
                    }
                }  
            }
        }
    }
`