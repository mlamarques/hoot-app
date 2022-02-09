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

    h3 {
        user-select: none;
    }

    &:hover {
        background-color: var(--orange);
        cursor: pointer;
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

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes fadeOut{
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
`