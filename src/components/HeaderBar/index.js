import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import goBackIcon from "~/assets/images/Home/goBackIcon.svg";

const Bar = styled.div`
  padding: 10px;
  background: #f2ec54;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
`;

const GoBackButton = styled.button`
  padding: 8px 16px;
  background: none;
  border-radius: 4px;
  font-size: 25px;
  color: #000;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const GoBackIcon = styled.img`
  margin-right: 8px;
`;

const UserName = styled.h1`
  font-weight: 400;
  font-size: 25px;
  margin: 0 40px 0 0;
`;

export default function HeaderBar() {
  const history = useHistory();
  const userName = useSelector((state) => state.app.userName);

  return (
    <Bar>
      <GoBackButton onClick={() => history.push("login")}>
        <GoBackIcon src={goBackIcon} alt="go back" />
        Go Back
      </GoBackButton>
      <UserName>{userName}</UserName>
    </Bar>
  );
}
