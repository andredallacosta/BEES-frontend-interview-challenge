import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { HeaderBar, Loading } from "~/components";
import openBreweryAPI from "~/services/openBreweryAPI";
import { NoDataWarning, BreweryCard } from "./components";
import styles from "./styles";

export default function Home() {
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

  const deleteCard = (id) => {
    setBreweries(breweries.filter((brewery) => brewery.id !== id));
  };

  /**
   * @description - This useEffect guarantees that the user is logged in before accessing the page.
   */
  useEffect(() => {
    if (!userName) {
      history.push("/login");
    }
  }, [userName]);

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
      ) : breweries?.length ? (
        <div style={styles.container}>
          {breweries.map((brewery) => (
            <div style={styles.cardItem} key={brewery.id}>
              <BreweryCard data={brewery} deleteCard={deleteCard} />
            </div>
          ))}
        </div>
      ) : (
        <NoDataWarning />
      )}
    </div>
  );
}
