import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import goBackIcon from "~/assets/images/Home/goBackIcon.svg";
import styles from "./styles";

const Bar = styled.div`
  padding: 15px;
  background: #f2ec54;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GoBackButton = styled.button`
  padding: 8px 16px;
  background: none;
  border-radius: 4px;
  font-size: 30px;
  color: #000;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderBar = () => {
  const history = useHistory();
  const userName = useSelector((state) => state.app.userName);

  return (
    <Bar>
      <GoBackButton onClick={() => history.push("login")}>
        <img src={goBackIcon} alt="go back" style={styles.goBackIcon} />
        Go Back
      </GoBackButton>
      <h1 style={styles.userName}>{userName}</h1>
    </Bar>
  );
};

export default HeaderBar;
