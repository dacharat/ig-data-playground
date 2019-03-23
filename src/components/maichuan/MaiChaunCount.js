import React from "react";
import * as messagesJson from "../../data/messages.json";
import CountCard from "../CountCard.js";

const MaiChaunCount = () => {
  const messages = messagesJson.default;
  return (
    <>
      <h1>Mai Chaun Count</h1>
      {messages.map((message, i) => (
        <CountCard key={i} data={calculate(message)} word={"มั่ยชวล"} />
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
    if (con.text) {
      if (con.sender === hash.user1.name) {
        if (con.text.includes("มั่ยชวล")) hash.user1.count++;
      } else if (con.sender === hash.user2.name) {
        if (con.text.includes("มั่ยชวล")) hash.user2.count++;
      }
    }
    return null;
  });

  return hash;
};

export default MaiChaunCount;
