import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import HeaderBar from "~/components/HeaderBar";
import Loading from "~/components/Loading";
import openBreweryAPI from "~/services/openBreweryAPI";
import styles from "./styles";

const Home = () => {
  const history = useHistory();
  const userName = useSelector((state) => state.app.userName);

  const [loading, setLoading] = useState(true);
  const [breweries, setBreweries] = useState([]);

  const getBreweries = () => {
    setLoading(true);
    openBreweryAPI.brewery
      .list()
      .then((response) => {
        setBreweries(response.data);
        setLoading(false);
      })
      .catch(() => {});
  };

  // useEffect(() => {
  //   if (!userName) {
  //     history.push("/login");
  //   }
  // }, [userName]);

  useEffect(() => {
    getBreweries();
  }, []);

  return (
    <div style={styles.root}>
      <HeaderBar />
      {loading ? (
        <div style={styles.loadingDiv}>
          <Loading />
        </div>
      ) : (
        <h1>Home</h1>
      )}
    </div>
  );
};

export default Home;
