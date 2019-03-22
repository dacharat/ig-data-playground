import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 2px solid;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
`;
const Name = styled.p`
margin: auto;
  background-color: #ff6d77;
  display: inline-block;
`;

const CountCard = ({ data }) => {
  return (
    <Card>
      <h1>
        <Name>{data.user1.name}</Name> talk to <Name>{data.user2.name}</Name>
      </h1>
      <hr />
      <h2>
        <Name>{data.user1.name}</Name> send: {data.user1.count} ❤️
      </h2>
      <h2>
        <Name>{data.user2.name}</Name> send: {data.user2.count} ❤️
      </h2>
      <h2>Total: {data.user1.count + data.user2.count} ❤️</h2>
    </Card>
  );
};

export default CountCard;
