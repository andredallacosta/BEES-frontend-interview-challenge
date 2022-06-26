import React from "react";
import PropTypes from "prop-types";

import Card from "~/components/Card";
import Tag from "~/components/Tag";
import {
  ChartSquareBar,
  CheckCircle,
  LocationMarker,
  Phone,
  PlusCircle,
} from "~/assets/images/icons";
import styles from "./styles";

export default function BreweryCard({ data }) {
  const getAddress = () =>
    `${data.city ? `${data.city}, ` : ""}${
      data.state ? `${data.state} - ` : ""
    }${data.country}`;

  return (
    <Card>
      <h1 style={styles.name}>{data.name}</h1>
      <h2 style={styles.street}>{data.street}</h2>
      <h3 style={styles.address}>{getAddress(data)}</h3>
      <div style={styles.tagsDiv}>
        {data.brewery_type && (
          <Tag>
            <ChartSquareBar style={styles.icon} />
            {data.brewery_type}
          </Tag>
        )}
        {data.postal_code && (
          <Tag>
            <LocationMarker style={styles.icon} />
            {data.postal_code}
          </Tag>
        )}
        {data.phone && (
          <Tag>
            <Phone style={styles.icon} />
            {data.phone}
          </Tag>
        )}
        <Tag>
          <PlusCircle style={styles.icon} />
          add more
        </Tag>
      </div>
    </Card>
  );
}

BreweryCard.propTypes = {
  data: PropTypes.object,
};

BreweryCard.defaultProps = {
  data: {},
};
