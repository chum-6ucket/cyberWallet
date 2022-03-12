import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  padding: 30px 45px;
  width: 100%;

  overflow: hidden;
  --list-space: 30px;

  img {
    width: 32px;
  }

  transition: 0.3s ease all;
  ${media.lessThan('medium')`
    transition: 0.3s ease all;
    padding: 30px 25px;
  `}
  
  header {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s ease all;
    
    .logo {
      color: aliceblue;
      font-size: 2rem;
      font-weight: bold;
      text-decoration: none;
    }
    
    nav {
      ${media.lessThan('medium')`
            top: 0;
            right: 100%;
            bottom: 0;
            width: 100%;
            height: 100vh;
            position: fixed;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            background: rgba(29,29,29, 0.9);
            backdrop-filter: blur(2px);
            transform: translate(0);
            transition: 0.3s ease transform;
    `}
      &.isMenu {
        transform: translate(100%);
        transition: 0.3s ease transform;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        list-style: none;
        margin-left: var(--list-space);

        ${media.lessThan('medium')`
            margin: 0; 
            flex-direction: column;
        `}
        li {
          color: #27cdff;
          margin-left: var(--list-space);
          
          ${media.lessThan('medium')`
             margin: 0;
             display: flex;
             justify-content: center;
             padding: 12px;
             font-size: 1.5rem;
          `}
          
          a {
            text-decoration: none;
            color: inherit;
            padding: 0.45rem 1.25rem;
            border-radius: 12px;
            transition: 0.3s ease all;

            &:hover {
              background: rgba(255, 255, 255, 0.1);
            }

            &:active {
              border-radius: calc(18px);
              background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
            }
          }
        }
      }
    }
  }

  .menu__toggle {
    display: none;

    ${media.lessThan('medium')`
      color: #27cdff;
      display: flex;
      z-index: 100;
      `}
  }
`;

export const MenuToggle = styled.div`

`;
