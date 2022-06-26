import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
`;

const Subtitle = styled.h1`
  font-weight: 400;
  font-size: 25px;
`;

export default function NoDataWarning() {
  return (
    <Container>
      <Title>No data fetched from Open Brewery DB API!</Title>
      <Subtitle>
        An error was encountered while fetching data from Open Brewery DB API.
      </Subtitle>
    </Container>
  );
}
