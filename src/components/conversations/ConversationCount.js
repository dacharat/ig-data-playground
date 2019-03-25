import React from "react";
import * as messagesJson from "../../data/messages.json";
import * as profileJson from "../../data/profile.json";
import { sortBy, prop, reverse } from "ramda";
import Card from "../Card";

const ConversationCount = () => {
  const messages = messagesJson.default;
  const countMessage = messages.map(message => calculate(message));
  const sortByCount = sortBy(prop("count"));
  return (
    <>
      <h1>Let's see who talk with me the most</h1>
      <hr />
      {reverse(sortByCount(countMessage)).map((message, i) => (
        <Card key={i}>
          <div>{message.name}</div>
          <div>{message.count}</div>
        </Card>
      ))}
    </>
  );
};

const calculate = message => {
  let followerUsername =
    message.participants[0] === profileJson.default.username
      ? message.participants[1]
      : message.participants[0];
  return { name: followerUsername, count: message.conversation.length };
};

export default ConversationCount;
