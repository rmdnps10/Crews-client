import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body * {
        box-sizing: border-box;
    };
    button {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
    }
`;

export default GlobalStyle;
