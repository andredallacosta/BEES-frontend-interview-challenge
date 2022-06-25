import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import HeaderBar from "~/components/HeaderBar";
import styles from "./styles";

const Home = () => {
  const history = useHistory();
  const userName = useSelector((state) => state.app.userName);

  // useEffect(() => {
  //   if (!userName) {
  //     history.push("/login");
  //   }
  // }, [userName]);

  return (
    <div style={styles.root}>
      <HeaderBar />
    </div>
  );
};

export default Home;
