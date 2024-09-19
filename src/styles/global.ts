'use client'

import { createGlobalStyle } from 'styled-components'
import CatSample from '@components/PageBackgroundComponent/assets/catbackg.png'

export default createGlobalStyle`
    @font-face {
        font-family: 'InknutAntiqua Black';
        src: url('/fonts/InknutAntiqua-Black.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'InknutAntiqua Bold';
        src: url('/fonts/InknutAntiqua-Bold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'InknutAntiqua ExtraBold';
        src: url('/fonts/InknutAntiqua-ExtraBold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'InknutAntiqua Light';
        src: url('/fonts/InknutAntiqua-Light.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'InknutAntiqua Medium';
        src: url('/fonts/InknutAntiqua-Medium.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'InknutAntiqua Regular';
        src: url('/fonts/InknutAntiqua-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'InknutAntiqua Semibold';
        src: url('/fonts/InknutAntiqua-Semibold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    :root {
        box-sizing: border-box;
        font-size: calc(0.8rem + 0.25vw);
        letter-spacing: 0.02rem;
    }

    html {
        font-family: 'InknutAntiqua Light', sans-serif;
        display: flex;
        justify-content: center;
        scroll-behavior: smooth;
        transition: 0.3s ease-out;
    }
    h1, h2 {
        font-family: 'InknutAntiqua Black', sans-serif;
    }
    h3, h4, h5 {
        font-family: 'InknutAntiqua ExtraBold', sans-serif;
    }
    p, a {
        font-family: 'InknutAntiqua Regular', sans-serif;
        /* cursor: none; */
    }

    body {
        /* max-width: 1440px; */
        padding-left: 15px;
        padding-right: 15px;
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        flex-grow: 1;
        transition: 0.3s ease-out;
        /* background-image: url(${CatSample.src});
        background-repeat: repeat; */
    }

    nav ol,
    nav ul {
        list-style: none;
    }

    hr {
        margin: 1rem 0;
        border: 0;
        height: 1px;
        width: 100%;
    }

    a {
        cursor: pointer;
        /* cursor: none; */
    }

    [type="button"]:not(:disabled),
    [type="reset"]:not(:disabled),
    [type="submit"]:not(:disabled),
    button:not(:disabled) {
        cursor: pointer;
        /* cursor: none; */
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        // -webkit-box-shadow: 0 0 0 30px hsl(0, 0%, 92%) inset !important;
    }

    input:focus-visible {
        //border-color: inherit;
        //outline: none;
    }

    button {
        font-family: 'InknutAntiqua Semibold', sans-serif;
        font-size: 16px;
        border: none;
        border-radius: 10px;
        padding: 0.65rem 1.5rem;
        /* cursor: none; */
    }

    input {
        padding: 0.85em 1em;
        max-width: 100%;
        font-size: 1rem;
        border-radius: 1em;
        border: 1px solid transparent;
        outline: none;

        &:focus-within {
            border: none;
            outline: none;
        }
    }
    .custom-toast {
        background-color: black;
        color: white;
        border-radius: 4px;
        padding: 16px;
    }

`
