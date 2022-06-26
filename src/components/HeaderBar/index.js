import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { ArrowCircleLeft } from "~/assets/images/icons";

const Bar = styled.div`
  background: #f2ec54;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const GoBackButton = styled.button`
  padding: 16px;
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

const GoBackIcon = styled(ArrowCircleLeft)`
  margin-right: 8px;
  width: 38px;
  height: 38px;
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
        <GoBackIcon />
        Go Back
      </GoBackButton>
      <UserName>{userName}</UserName>
    </Bar>
  );
}
