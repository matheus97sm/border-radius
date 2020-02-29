import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(-45deg, #203A43, #0F2027) no-repeat;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    position: relative;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    width: 90%;
    max-width: 1020px;
    margin: 0 auto;
    height: 100%;
  }
`;

export default global;
