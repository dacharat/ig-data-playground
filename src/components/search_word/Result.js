import React, { useContext } from "react";
import { SearchContext } from "./SearchWord";
import * as messagesJson from "../../data/messages.json";
import CountCard from "../CountCard.js";

const Result = () => {
  const {result} = useContext(SearchContext)
  const messages = messagesJson.default;
  return (
    <>
      {result && messages.map((message, i) => {
        let data = calculate(message,result);
        return data.user1.count + data.user2.count > 0 ? (
          <CountCard key={i} data={data} word={result} />
        ) : null;
      })}
    </>
  );
};

const calculate = (message, result) => {
  let hash = {
    user1: { name: message.participants[0], count: 0 },
    user2: { name: message.participants[1], count: 0 }
  };

  message.conversation.map(con => {
    if (con.text) {
      if (con.sender === hash.user1.name) {
        if (con.text.includes(result)) hash.user1.count++;
      } else if (con.sender === hash.user2.name) {
        if (con.text.includes(result)) hash.user2.count++;
      }
    }
    return null;
  });

  return hash;
};

export default Result;
