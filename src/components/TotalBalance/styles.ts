import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 30px auto 0;
  padding: 40px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}

  background: rgba(0, 0, 0, 0);
  border: #d1c5c0 solid 1px;
  border-radius: 10px;
  
  h3 {
    color: #d8bc66 ;
    font-weight: 500;
  }

  h4 {
    color: #d8bc66;
    font-size: 20px;
  }

  h3 {
    font-size: 42px;
    display: flex;
    margin-top: 10px;
    line-height: 42px;
  }
`;
