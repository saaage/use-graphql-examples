import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 :root {
    --color-utility-warning: rgba(242, 182, 0, 1.0);
    --color-utility-critical: rgba(232, 28, 0, 1.0);

    --novo-green: #00BC70;
    --novo-dark-gray: #636569;
    --novo-light-gray: #BBB;

    --space-eighth: 2px;
    --space-quarter: 4px;
    --space-half: 8px;
    --space-one: 16px;
    --space-one-and-half: 24px;
    --space-two: 32px;
    --space-three: 48px;
    --space-four: 64px;
  }

  * {
    ::-webkit-scrollbar {
      display: none;
    }
  }
  
  html {
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }

  body, * {
    box-sizing: border-box;
  }


  body {
    color: var(--novo-dark-gray);
    display: flex;
    font: 16px "Open Sans", sans-serif;
    margin: 0;
    min-height: 100%;
  }

  #root {
    flex: 1;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`
export default GlobalStyle
