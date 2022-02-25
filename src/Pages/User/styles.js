import styled from 'styled-components'

export const UserStyle = styled.div`
    position: relative;

    .main__container {
        display: flex;
        justify-self: center;
        flex-direction: column;
        width: 600px;
        height: 100vh;
        border: 1px solid rgba(0, 0, 0, 0.7);

        .main__header {
            display: flex;
            position: sticky;
            top: -0.5px;
            min-height: 55px;
            padding-left: 16px;
            padding-right: 16px;
            align-items: center;
            background-color: var(--mellow-apricot-transparent);
            z-index: 3;

            .go-back--wrapper {
                position: relative;
                height: 36px;
                width: 36px;
                margin-right: 16px;
                border-radius: 9999px;
                transition-duration: 0.5s;
                cursor: pointer;

                svg {
                    fill: black;
                }

                &:hover {
                    background-color: var(--deep-saffron);
                }
            }
            
            .title__container {
                display: flex;
                flex: 1;
                cursor: pointer;
            }
            
        }

        .profile__container {
            background-color: var(--deep-saffron);
            border: 1px solid var(--orange);
            padding: 12px;

            .profile-top {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                justify-content: space-between;
                padding-bottom: 12px;

                .user--avatar__wrapper {
                    width: 25%;
                    min-width: 48px;
                    height: auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 9999px;
                    background-color: var(--white-shade);
                }

                .profile--options__container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    .message-btn {
                        display: flex;
                        min-width: 0px;
                        padding: 4px;
                        margin-right: 8px;
                        background-color: rgba(0, 0, 0, 0);
                        border-radius: 9999px;
                        border: 1px solid rgba(0, 0, 0, 1);
                        transition-duration: 0.2s;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--black-shade)
                        }

                        .logo-item {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            height: 100%;
                        }

                        svg {
                            width: 1.5rem;
                        }
                    }

                    .follow-btn {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 110px;
                        min-height: 36px;
                        line-height: 1.25rem;
                        font-size: 1rem;
                        font-weight: 700;
                        padding: 0 16px;
                        background-color: rgba(0, 0, 0, 0);
                        border-radius: 9999px;
                        border: 1px solid rgba(0, 0, 0, 1);
                        transition-duration: 0.2s;
                        user-select: none;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--black-shade)
                        }
                    }

                    .unfollow-btn {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 110px;
                        min-height: 36px;
                        line-height: 1.25rem;
                        font-size: 1rem;
                        font-weight: 700;
                        padding: 0 16px;
                        background-color: var(--red-twitter-shade);
                        border-radius: 9999px;
                        border: 1px solid var(--red-button-color);
                        transition-duration: 0.2s;
                        user-select: none;
                        cursor: pointer;

                        span {
                            color: var(--red-button-color);
                        }
                    }
                }

                
            }
            

            
        }
    }

    .alternative__container {
        width: 100%;
    }

    
`

