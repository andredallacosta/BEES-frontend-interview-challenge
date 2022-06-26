import React from "react";
import PropTypes from "prop-types";

import Card from "~/components/Card";

const BreweryCard = ({ data }) => (
  <Card>
    <h1>{data.name}</h1>
  </Card>
);

BreweryCard.propTypes = {
  data: PropTypes.object,
};

BreweryCard.defaultProps = {
  data: {},
};

export default BreweryCard;
