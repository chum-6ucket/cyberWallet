import styled from "styled-components";

export const Container = styled.div`

  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #27cdff;
  
  form {
    font-family: CyberDos, serif;
    font-size: large;
    width: 420px;
    max-width: 480px;
    background-color: rgba(1, 1, 1, .04);
    border-radius: 3px;
    padding: 10px;

    a {
      font-size: small;
      letter-spacing: 0.3px;
      text-decoration: none;
      color: #27cdff;
    }

    a:hover {
      text-decoration: underline;
      color: rgba(39, 205, 255, 0.84);
    }

    h1 {
      font-family: 'Cyberpunk', serif;
      margin: 0 0 60px 0;
      font-size: 35px;
    }
  }

  .cyberbutton {
    width: 85%;
    height: 33px;
    margin: 35px auto 15px;
    border: none;
    clip-path: polygon(0 0, 100% 0, 100% 60%, 95.6% 100%, 0 100%);
    transition: .25s;
    background-color: #27cdff;
    color: #010e16;

    &:hover {
      background-color: yellow;
      color: #010e16;
      transform: scale(1.012);
    }

    &:active {
      background-color: rgba(255, 255, 0, 0.7);
      color: #010e16;
      transform: scale(1.012);
    }
  }
  
  .cyberdiv {
    width: 85%;
    padding: 2px;
    margin-right: auto;
    margin-left: auto;
    

    input {
      font-size: x-large;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      outline: none;
      border: 0;
      height: 43px;
      width: 100%;
      padding: 0 22px;
      color: #27cdff;

      
      &::placeholder {
        color: #d45469;
      }
    }

    &:hover, &:focus-within {
      clip-path: polygon(0 0, 100% 0, 100% 72%, 95.6% 100%, 0 100%);
      background-color: #27cdff;
      transition: 0.6s ease all;
      color: #27cdff;

      input::placeholder {
        color: #9be5ff;
      }
    }

    &:hover input, input:hover, input:focus {
      clip-path: polygon(0 0, 100% 0, 100% 70%, 95.6% 100%, 0 100%);
      background-color: rgba(2, 0, 27, 1);
      color: #27cdff;
    }
  }
  
  .cyberError {
    width: 75%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5px;
    padding: 2px 0 15px 4px;
    text-align: start;
  }
`;
