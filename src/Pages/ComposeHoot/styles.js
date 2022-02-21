import styled from 'styled-components'

export const ComposeHootStyle = styled.div`
    position: relative;
    height: stretch;
    top: 50px;
    
    .compose-hoot__container {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 600px;
        min-height: 300px;
        background-color: rgba(0, 0, 0, 1);
        border-radius: 16px;

        .container__header {
            width: 100%;
            height: 50px;
            flex-shrink: 0;

            .go-back--wrapper {
                position: absolute;
                left: 0;
                top: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 30px;
                width: 30px;
                margin: 12px;
                border-radius: 9999px;
                transition-duration: 0.5s;
                cursor: pointer;

                &:hover {
                    background-color: var(--black-shade);
                    /* transform: rotate(90deg); */

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

                .icon-close {
                    height: 20px;
                    fill: white;
                }

                .tooltip {
                    position: absolute;
                    display: flex;
                    left: calc(-100% + 34px;);
                    top: 100%;
                    align-items: stretch;
                    justify-content: center;
                    border-radius: 2px;
                    margin-top: 2px;
                    padding: 2px 5px;
                    color: transparent;
                    font-size: 12px;
                    background-color: transparent;
                    overflow: hidden;
                    transition-property: background-color, color;
                    transition:  0.15s ease 0.75s;
                    pointer-events: none;
                    user-select: none;
                    z-index: 90;

                    span {
                        position: relative;
                        width: max-content;
                    }                
                }
            }
        }

        .container__body {
            display: flex;
            flex: 1;
            position: relative;
            flex-direction: row;
            padding: 4px 16px;

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
                    background-color: var(--light-text);
                    
                    .user--avatar {
                       
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

                .draft-editor--content {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    outline: currentcolor none medium;
                    user-select: text;
                    white-space: pre-wrap;
                    overflow-wrap: break-word;
                    font-size: 1.2rem;
                    color: white;
                    user-select: none;
                    cursor: text;

                    
                }

                .footer__container {
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    height: 48px;
                    width: 100%;
                    margin-top: 36px;
                    border-top: 1px solid rgb(47, 51, 54);

                    .submit__button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: var(--orange);
                        color: #f8f8ff;
                        font-size: 1rem;
                        font-weight: 500;
                        min-width: 48px;
                        min-height: 36px;
                        padding: 0px 16px;
                        margin-left: 12px;
                        border-radius: 9999px;
                        user-select: none;
                        transition-duration: 0.2s;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--orange-hover);
                        }
                    }
                }
            }
        }
    }
`

