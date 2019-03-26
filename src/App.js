import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import HeartCount from "./components/heart/HeartCount";
import MaiChaunCount from "./components/maichuan/MaiChaunCount";
import CountLike from "./components/media_likes/CountLike";
import ReplyCount from "./components/story_reply/ReplyCount";
import ConversationCount from "./components/conversations/ConversationCount";
import SearchWord from "./components/search_word/SearchWord";

const count = [
  { name: "❤️", component: <HeartCount /> },
  { name: "มั่ยชวล", component: <MaiChaunCount /> },
  { name: "Picture Like", component: <CountLike /> },
  { name: "Reply Story", component: <ReplyCount /> },
  { name: "Conversation", component: <ConversationCount /> },
  { name: "Search Word", component: <SearchWord /> }
];

const App = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="container">
      <Nav tabs>
        {count.map((c, i) => (
          <NavItem key={i}>
            <NavLink
              className={classnames({ active: active === { i } })}
              onClick={() => setActive(i)}
            >
              {c.name}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={active}>
        {count.map((c, i) => (
          <TabPane key={i} tabId={i}>
            {c.component}
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default App;
