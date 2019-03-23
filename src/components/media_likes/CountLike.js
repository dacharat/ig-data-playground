import React from "react";
import * as likesJson from "../../data/likes.json";
import {sortBy, prop, reverse} from 'ramda'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CountLike = () => {
  const likes = likesJson.default.media_likes;  
  const keysSorted = sortBy(prop(1))
  const sortedLikes = reverse(keysSorted((count(likes))));
  
  return (
    <>
      <h1>Count Like</h1>
      <hr/>
      {sortedLikes.map((like, i) => <Card key={i}>
        <div>{like[0]}</div>
        <div>{"❤️" + like[1]}</div>
      </Card>)}
    </>
  );
};

const count = (likes) => {
  return Object.values(likes.reduce((c, v) => {
    c[v[1]] = c[v[1]] || [v[1], 0];
    c[v[1]][1]++;
    return c;
  }, {}))
  // .map(o => ({ name: o[0], count: o[1] }));
}

export default CountLike;
