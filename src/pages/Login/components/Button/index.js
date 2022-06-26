import styled from "styled-components";

const Button = styled.button`
  padding: 8px 16px;
  background: #5d5fef;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  border: none;
  &:disabled {
    background: #52525b;
  }
`;

export default Button;
