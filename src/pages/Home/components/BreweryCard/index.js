import React from "react";
import PropTypes from "prop-types";

import Card from "~/components/Card";
import styles from "./styles";

const getAddress = (data) => `${data.city}, ${data.state} - ${data.country}`;

export default function BreweryCard({ data }) {
  return (
    <Card>
      <h1 style={styles.name}>{data.name}</h1>
      <h2 style={styles.street}>{data.street}</h2>
      <h3 style={styles.address}>{getAddress(data)}</h3>
    </Card>
  );
}

BreweryCard.propTypes = {
  data: PropTypes.object,
};

BreweryCard.defaultProps = {
  data: {},
};
