import styled from 'styled-components'

export const UserCardStyle = styled.div`
    display: flex;
    flex: 1;
    max-width: 100%;
    border-bottom: 1px solid var(--orange);

    .usercard--wrapper {
        display: flex;
        flex: 1;
        max-width: 100%;
        align-items: center;
        padding: 12px;
        background-color: var(--mellow-apricot-shade);
        user-select: none;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: var(--orange);
            cursor: pointer; 
        }

        .user--avatar__container {
            display: flex;
            pointer-events: none;

            .user--avatar__wrapper {
                height: 40px;
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 9999px;
                background-color: var(--light-text);
            } 
        }

        .user--info__container {
            display: flex;
            max-width: 100%;
            min-width: 0; // this make the container max-width inside parent

            .user--info--wrapper {
                display: flex;
                margin: 0 12px;
                flex-direction: column;
                font-size: 1rem;
                line-height: 20px;
                overflow: hidden;

                .user--name {
                    font-weight: 700;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .user--username {
                    font-weight: 400;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }

        .icon--option__container {
            display: flex;
            flex: 1;
            justify-content: flex-end;

            svg {
                height: 1.25em;
            }
        }

        .usercard__options {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 160px;
            left: 0;
            bottom: 100%;
            z-index: 99;

            .a {
                position: relative;
                color: white;
                height: 100%;
                width: 300px;
                bottom: 10px;
                padding: 12px 0;
                border-radius: 9px;
                background-color: black;
                box-shadow: hsl(35, 79%, 70%) 0px 0px 15px, hsl(35, 79%, 70%) 0px 0px 3px 1px;

                .ainside {
                    height: 50%;
                }

                .binside {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 50%;
                    width: 100%;
                    margin-bottom: 10px;

                    &:hover {
                        background-color: var(--black-shade);
                    }

                    span {

                    }
                }
            }

            .b {
                position: relative;
                bottom: 10px;
                width: 20px;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid var(--black);
            }

        }
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes fadeOut{
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
`