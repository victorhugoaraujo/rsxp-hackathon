import styled from 'styled-components';

export const Rocket = styled.div`
  position: absolute;
  width: 100%;
  padding-right: 21px;
  padding-top: 14px;
  display: flex;
  justify-content: ${props => props.result};
  z-index: 100;
`;
