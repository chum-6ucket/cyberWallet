import {createGlobalStyle} from "styled-components";
import Cyberpunk from "./../fonts/Cyberpunk.ttf";
import TerminalDosisRegular from "./../fonts/TerDos/TerminalDosisRegular.ttf";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    
    html, body, #root {
      min-width: 100%;
      min-height: 100%;
      font-family: 'Cyberpunk', serif;
    }
    
    @font-face {
      font-family: 'Cyberpunk';
      src: local('Cyberpunk'), url(${Cyberpunk}) format('truetype');
    }
    
    @font-face {
      font-family: 'CyberDos';
      src: local('CyberDos'), url(${TerminalDosisRegular}) format('truetype');
    }
    
    body {
      background: rgb(2,0,27);
      background: linear-gradient(355deg, rgba(2,0,27,1) 0%, rgba(78,28,33,1) 100%);
    }
`;
