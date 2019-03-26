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

const CountCard = ({ data, word }) => {
  return (
    <Card>
      <h2>
        <Name>{data.user1.name}</Name> talk to <Name>{data.user2.name}</Name>
      </h2>
      <hr />
      <h4>
        <Name>{data.user1.name}</Name> send: {data.user1.count}{" "}
        <u>{" " + word}</u>
      </h4>
      <h4>
        <Name>{data.user2.name}</Name> send: {data.user2.count}{" "}
        <u>{" " + word}</u>
      </h4>
      <h4>
        Total: {data.user1.count + data.user2.count} <u>{" " + word}</u>
      </h4>
    </Card>
  );
};

export default CountCard;
