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
        justify-content: space-between;
        padding: 12px;
        background-color: var(--mellow-apricot-shade);
        user-select: none;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: var(--orange);
            cursor: pointer; 
        }

        .usercard-user__container {
            display: flex;
            flex-direction: row;

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
                    background-color: var(--white-shade);
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

        }

        .usercard-user--info {

            .follow__container {
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 0px;
                min-height: 36px;
                line-height: 1rem;
                font-size: .9rem;
                font-weight: 700;
                padding: 0 16px;
                background-color: var(--orange-hover);
                border-radius: 9999px;
                /* border: 1px solid rgba(0, 0, 0, 1); */
                user-select: none;
            }
        }
    }
`