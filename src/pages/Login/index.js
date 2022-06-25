import React, { useState } from "react";
import Input from "~/components/Input";
import Button from "~/components/Button";
import bee from "~/assets/images/Login/bee.png";
import styles from "./styles";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userOver18, setUserOver18] = useState(false);

  return (
    <div style={styles.root}>
      <div className="content" style={styles.content}>
        <div style={styles.card}>
          <h1 style={styles.title}>Please, enter your full name below</h1>
          <h2 style={styles.subtitle}>
            Only alphabetical characters are accepted
          </h2>
          <Input
            type="text"
            placeholder="Full name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <div style={styles.userOver18Section}>
            <input
              type="checkbox"
              onChange={(e) => {
                setUserOver18(e.target.checked);
              }}
            />
            <h3 style={styles.userOver18Text}>
              Are you older than 18 years old?
            </h3>
          </div>
          <div style={styles.enterButtonSection}>
            <Button
              style={styles.enterButton}
              disabled={!userName || !userOver18}
              onClick={() => {
                console.log("aaa");
              }}
            >
              Enter
            </Button>
          </div>
        </div>
      </div>
      <img src={bee} alt="bee" style={styles.bee} />
    </div>
  );
};

export default Login;
