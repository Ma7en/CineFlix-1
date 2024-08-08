/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

const Main = styled.main`
    /* min-height: 100vh; */
    /* margin: 2.5rem; */
    /* padding-top: 95px; */
    /* padding: 2.5rem 5rem; */
    /* margin: 2rem 2rem 2rem 2rem; */
    min-height: calc(100vh - 4rem);
    border-radius: 2.5rem;
    overflow: hidden;

    .container {
        /* color: red; */
        /* padding: 2.5rem 2.5rem; */

        min-height: calc(100vh - (10rem + 95px));
        padding-top: 95px;
        padding-bottom: 2rem;
        max-width: calc(100% - 4rem);
        section {
            /* max-width: calc(100% - 4rem); */
        }
    }

    ${(props) =>
        props.type === "homepage" &&
        css`
            background-image: linear-gradient(
                    rgba(36, 42, 46, 0.8),
                    rgba(36, 42, 46, 0.8)
                ),
                url("./images/bg.jpg");
            background-size: cover;
            background-position: center;
            .container {
                /* color: red; */
                /* padding: 2.5rem 2.5rem; */
                display: flex;
                align-items: center;
                justify-content: center;

                section {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 2.5rem;
                    text-align: center;

                    h1 {
                        font-size: 4.5rem;
                        line-height: 1.3;
                    }
                    h2 {
                        width: 90%;
                        font-size: 1.9rem;
                        color: var(--color-light--1);
                        margin-bottom: 2.5rem;
                    }
                }
            }
        `}

    ${(props) =>
        props.type === "pricingpage" &&
        css`
            /* margin: 2.5rem; */
            /* padding: 2.5rem 5rem; */
            /* min-height: calc(100vh - 5rem); */
            background-color: var(--color-dark--1);
            .container {
                section {
                    /* width: clamp(80rem, 80%, 90rem); */
                    /* margin: 6rem auto; */
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 7rem;
                    align-items: center;
                    overflow: hidden;
                    .img {
                        width: 100%;
                        img {
                            max-width: 100%;
                            border-radius: 2.5rem;
                            /* max-width: 10px; */
                        }
                    }

                    div {
                        h2 {
                            font-size: 4rem;
                            line-height: 1.2;
                            margin-bottom: 3rem;
                        }
                        p {
                            font-size: 1.6rem;
                            margin-bottom: 2rem;
                        }
                    }
                    @media (max-width: 991px) {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 3rem;
                    }
                }
            }
        `}

    ${(props) =>
        props.type === "productpage" &&
        css`
            background-color: var(--color-dark--1);
            .container {
                section {
                    /* width: clamp(80rem, 80%, 90rem); */
                    /* margin: 6rem auto; */
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 7rem;
                    align-items: center;

                    .img {
                        width: 100%;
                        img {
                            max-width: 100%;
                            border-radius: 2.5rem;
                            /* max-width: 10px; */
                        }
                    }
                    div {
                        h2 {
                            font-size: 4rem;
                            line-height: 1.2;
                            margin-bottom: 3rem;
                        }
                        p {
                            font-size: 1.6rem;
                            margin-bottom: 2rem;
                        }
                    }
                    @media (max-width: 991px) {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 3rem;
                    }
                }
            }
        `}

    ${(props) =>
        props.type === "loginpage" &&
        css`
            /* margin: 2.5rem;
            padding: 2.5rem 5rem; */
            /* min-height: calc(100vh - 5rem); */
            background-color: var(--color-dark--1);

            .container {
                section {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 2rem;
                    .form {
                        background-color: var(--color-dark--2);
                        border-radius: 7px;
                        padding: 2rem 3rem;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;

                        /* Different from other form */
                        width: 48rem;
                        /* margin: 8rem auto; */
                        .row {
                            display: flex;
                            flex-direction: column;
                            gap: 0.5rem;
                        }
                    }
                }
            }
        `}

    ${(props) =>
        props.type === "applayout" &&
        css`
            .container {
                min-height: calc(100vh - 4rem);

                padding: 0px;
                margin: 0px;
                padding-top: 0px;
                padding-bottom: 0rem;
                width: calc(100%);
                max-width: calc(100%);

                section {
                    overflow-y: auto;
                    height: calc(100vh - (4rem));

                    overscroll-behavior-y: none;
                    position: relative;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
            }
            @media (max-width: 767px) {
                .container {
                    section {
                        display: flex;
                        flex-direction: column-reverse;
                        height: calc(200vh - (4rem));
                        .footer {
                            padding-bottom: 0;
                        }
                    }
                }
            }
        `}

    ${(props) =>
        props.type === "account" &&
        css`
            .container {
            }
        `}
`;

// Nav.defaultProps = {
//     type: "vertical",
// };

export default Main;
