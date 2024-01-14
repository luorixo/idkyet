import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.textColor};
        transition: background-color 0.8s ease-in-out, color 1s ease-in-out;
    }

    body::before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        background-image: url(${({ theme }) => theme.backgroundImage});
        background-size: cover;
        filter: ${({ theme }) => theme.filter};
        transition: filter 1s cubic-bezier(.26,0,.66,1);
    }
`