import styled from 'styled-components'

export const HootCardStyle = styled.div`

    .hoot__container {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 0 16px;
        background-color: rgba(0, 0, 0, 1);
        border-bottom: 1px solid rgb(47, 51, 54);
        transition-duration: 0.2s;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.95);
        }

        .container__header {
            width: 100%;
            height: 12px;
            flex-shrink: 0;
        }

        .container__body {
            display: flex;
            flex: 1;
            position: relative;
            flex-direction: row;

            .user--avatar__container {
                display: flex;
                margin-right: 12px;
                pointer-events: none;

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

            .hoot-content {
                display: flex;
                flex: 1;
                flex-direction: column;
                max-width: 100%;
                min-width: 0px;
                padding-bottom: 12px;

                .content--header {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 100%;
                    min-width: 0px;
                    color: white;
                    margin-bottom: 2px;

                    .info--header {
                        display: flex;
                        flex-direction: row;
                        max-width: 100%;
                        min-width: 0px;
                        user-select: none;
                        

                        .user-info--header {
                            display: flex;
                            flex-direction: row;
                            flex-shrink: 1;
                            max-width: 100%;
                            min-width: 0px;
                            overflow: hidden;

                            .user--link {
                            display: flex;
                            flex-direction: row;
                            flex-shrink: 1;
                            max-width: 100%;
                            min-width: 0px;
                            cursor: pointer;

                            &:hover {

                                .name-user--wrapper {
                                    text-decoration: underline;
                                }
                            }

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

                        }
                    }

                    .info-separator {
                        display: flex;
                        flex-shrink: 0;
                        min-width: 0px;
                        padding: 0 4px;
                        color: rgb(110, 118, 125);
                    }

                    .hoot-date {
                        display: flex;
                        flex-shrink: 0;
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
                        margin-left: 20px;
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
                                fill: white;
                            }
                        }
                    }
                }

                .text__container {
                    position: relative;
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    width: stretch;
                    max-width: 500px;

                    .text--content {
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        outline: currentcolor none medium;
                        user-select: text;
                        white-space: pre-wrap;
                        overflow-wrap: break-word;
                        line-height: 1.25rem;
                        font-size: 1rem;
                        font-weight: 400;
                        color: white;
                    }

                    .footer__container {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        height: 20px;
                        margin-top: 12px;
                        max-width: 425px;
                        cursor: pointer;

                        .icon_container {
                            display: flex;
                            min-height: 20px;
                            min-width: 0px;
                            overflow: visible;
                            fill: var(--icon-empty);
                            transition-duration: 0.2s;

                            .icon--wrapper {
                                position: relative;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                .icon--background {
                                    position: absolute;
                                    top: 0;
                                    bottom: 0;
                                    right: 0;
                                    left: 0;
                                    margin: -8px;
                                    border-radius: 9999px;
                                }

                                svg {
                                    width: 1.25rem;
                                    height: 1.25rem;
                                }

                                .tooltip {
                                    position: absolute;
                                    display: flex;
                                    top: calc(100% + 8px);
                                    border-radius: 2px;
                                    margin-top: 2px;
                                    color: transparent;
                                    background-color: transparent;
                                    overflow: hidden;
                                    transition-property: background-color, color;
                                    transition:  0.15s ease 0.75s;
                                    pointer-events: none;
                                    user-select: none;
                                    z-index: 99;

                                    span {
                                        position: relative;
                                        padding: 2px 4px;
                                        width: max-content;
                                        font-size: 12px;
                                        font-weight: 400;
                                    }                
                                }
                            }
                            
                            .count--wrapper {
                                padding: 0 12px;
                                min-width: 0px;
                                color: white;

                                .icon--count {
                                    transition-duration: 0.2s;
                                }
                            }

                            &:hover {

                                /* ----------------------- icons ----------------------- */

                                .icon-comment, .icon-share {

                                    .icon--background {
                                        background-color: var(--blue-twitter-shade);
                                    }

                                    path {
                                        fill: var(--blue-twitter)
                                    }
                                }

                                .count-comment, .count-share {
                                    color: var(--blue-twitter);
                                }

                                .icon-resend {

                                    .icon--background {
                                        background-color: var(--green-twitter-shade);
                                    }

                                    path {
                                        fill: var(--green-twitter)
                                    }
                                }

                                .count-resend {
                                    color: var(--green-twitter);
                                }

                                .icon-favorite {

                                    .icon--background {
                                        background-color: var(--red-twitter-shade);
                                    }

                                    path {
                                        fill: var(--red-twitter)
                                    }
                                }

                                .count-favorite {
                                    color: var(--red-twitter);
                                }
                                

                                /* ----------------------- tooltip ----------------------- */

                                .tooltip {
                                    background-color: rgba(91, 112, 131, 0.8);
                                    color: #FFF;
                                }
                            }

                            &:not(:hover) {

                                .tooltip {
                                    transition:  none;
                                }   
                            }
                        }
                    }
                }
            }
        }
    }
`