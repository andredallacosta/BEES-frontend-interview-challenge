import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 6px solid #f2ec54;
  border-right: 6px solid #f2ec54;
  border-bottom: 6px solid #f2ec54;
  border-left: 6px solid transparent;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export default Loading;
