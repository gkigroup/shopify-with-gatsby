import styled from 'styled-components';

export const QuantityAdjusterWrapper = styled.div`
  display: flex;
  > div {
    margin: auto 0;
    padding: 5px 10px;
  }
`;

export const AdjusterButton = styled.div`
  cursor: pointer;
  border: 1px solid black;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background: black;
    color: white;
  }
`;
