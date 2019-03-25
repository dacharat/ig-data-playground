import React from "react";
import * as messageJson from "../../data/messages.json";
import * as profileJson from "../../data/profile.json";
import Card from '../Card'
import {sortBy, prop, reverse} from 'ramda'

const ReplyCount = () => {
  const messages = messageJson.default;
  const result = messages.map(message => calculate(message))
  const sortByCount = sortBy(prop("count"));
  const sorted = reverse(sortByCount(result))
  
  return (
    <>
      <h1>Let's see who reply my story the most</h1>
      <hr />
      {sorted.map((message, i) => {
        return <Card key={i}>
          <div>{message.name}</div>
          <div>{message.count}</div>
        </Card>
      })}
    </>
  );
};

const calculate = message => {
  let followerUsername =
    message.participants[0] === profileJson.default.username
      ? message.participants[1]
      : message.participants[0];
  let hash = { name: followerUsername, count: 0 };
  message.conversation.map(con => {
    if (con.sender === hash.name) {
      if (con.story_share) hash.count++;
    } 
    return null;
  });

  return hash;
};

export default ReplyCount;
