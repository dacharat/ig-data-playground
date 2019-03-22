import React from "react";
import * as igMessages from "../data/messages.json";
import CountCard from "./CountCard.js";

const HeartCount = () => {
  const messages = igMessages.default;
  return (
    <>
      {messages.map((message, i) => (
        <CountCard key={i} data={calculate(message)} />
      ))}
    </>
  );
};

const calculate = message => {
  let hash = {
    user1: { name: message.participants[0], count: 0 },
    user2: { name: message.participants[1], count: 0 }
  };
  message.conversation.map(con => {
    if (con.sender === hash.user1.name) {
      if (con.heart) hash.user1.count++;
    } else if (con.sender === hash.user2.name) {
      if (con.heart) hash.user2.count++;
    }
    return null;
  });
  return hash;
};

export default HeartCount;
