import styled from "styled-components";
import media from "styled-media-query";

export const TableContainer = styled.section`
  margin-top: 64px;

  header {
    display: flex;
    justify-content: space-between;

    p {
      color: #f3e500;
      font-weight: bold;
      padding: 5px 32px;
      text-align: left;
      font-size: 24px;
      line-height: 24px;

      ${media.lessThan('medium')`
        padding: 10px 12px;
      `}
    }
  }

  table {
    min-width: 100%;
    border-spacing: 0 8px;
    padding: 20px 32px;

    ${media.lessThan('medium')`
      padding: 10px 12px;
    `}
    tbody {
      width: 100%;
    }

    td {
      border: 0;
      font-size: 16px;
      font-weight: normal;

      &.title {
        color: #148090;
      }

      &.income {
        color: #27cdff;
      }

      &.outcome {
        color: #d45469;
      }
      
      span {
        color: #d1f7ff;
      }
      span.transactionDate {
        padding: 5px 0;
        color: #d1f7ff;
      }
    }

    td:last-child {
      text-align: right;
    }
  }
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & + tr {
    padding: 10px 0;
  }

  td {
    border: 0;
    font-size: 16px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    
    .title {
      color: #148090;
    }

    .income {
      color: #04DAF6;
    }

    .outcome {
      color: #e83f5b;
    }
  }

  td:first-child {
    border-radius: 8px 0 0 8px;
  }

  td:last-child {
    border-radius: 0 8px 8px 0;
  }

`;
