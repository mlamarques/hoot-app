import styled from 'styled-components'

export const MobileMenuStyle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  .mobile-menu__container {
    position: relative;
    height: 100%;
    width: 70%;
    background-color: var(--mellow-apricot);
    box-shadow: rgba(1, 1, 1, 0.2) 0px 0px 5px, rgba(1, 1, 1, 0.25) 0px 1px 4px 1px;
    transition-duration: 250ms;
    transform: translateX(-100%);

    .menu__header {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 55px;
      padding: 0 16px;
      color: inherit;

      .info--title {
        display: flex;
        flex: 1;
        justify-content: flex-start;
        height: 100%;

        .text--wrapper {
          display: flex;
          align-items: center;
          font-size: 1rem;
          line-height: 1.25rem;
          font-weight: 700;
        }
      }

      .close__container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        min-height: 32px;
        height: 100%;
        min-width: 56px;

        .go-back--wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          transition-duration: 0.5s;
          cursor: pointer;

          &:hover {
            background-color: var(--white-shade);

            .tooltip {
              background-color: rgba(91, 112, 131, 0.8);
              color: #fff;
            }
          }

          &:not(:hover) {
            .tooltip {
              transition: none;
            }
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
            transition: 0.15s ease 0.75s;
            pointer-events: none;

            span {
              position: relative;
              width: max-content;
            }
          }
        }
      }
    }

    .menu__body {
      display: flex;
      flex-direction: column;
      padding-bottom: 44px;

      .info__container {
        display: flex;
        flex-direction: column;
        flex: 0;

        .avatar__container {
          display: flex;
          flex: 1;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: 12px 16px 0;

          .user--avatar__wrapper {
            height: 40px;
            width: 40px;
            background-color: var(--white-shade);
            border-radius: 9999px;
            opacity: 0.9;
            transition: 0.2s ease;
            cursor: pointer;

            &:hover {
              opacity: 1;
              box-shadow: rgba(255, 255, 255, 0.03) 0px 0px 2px inset;
            }
          }
        }

        .name__container {

          .name--wrapper {
            display: flex;
            flex-direction: column;
            padding: 12px 16px;
            cursor: pointer;

            .nickname__container {
                display: flex;
                font-size: 1rem;
                line-height: 1.25rem;
                font-weight: 700;

                .nickname--wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
            }

            .address__container {
                color: var(--icon-empty);
                font-size: 1rem;
                line-height: 1.25rem;
                font-weight: 400;

                .address--wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
            }
          }
        }

        .follow__container {
            display: flex;
            padding: 12px 16px;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.25rem;

            .following__container {
                margin-right: 20px;

                .following--wrapper {

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            .followers__container {

                .followers--wrapper {

                    &:hover {
                        text-decoration: underline;
                    }
                }
                
            }
        }
      }

      .options__container {
        width: 100%;
        padding: 16px 16px;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.25rem;
        cursor: pointer;

        &:hover {
            background-color: var(--mellow-apricot-shade);
        }

        .options-item--link {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            color: var(--eerie-black);
            transition: 175ms ease-in;

            .icon__container {
                display: flex;
                margin-right: 12px;
            }

            .text__container {
                color: var(--black);
            }
        }
      }

      .content--separator {
        height: 1px;
        margin: 2px 0;
        background-color: var(--eerie-black);
      }
    }
  }

  .show-menu {
    transform: translateX(0);
  }
`;