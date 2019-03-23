import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import HeartCount from "./components/heart/HeartCount";
import MaiChaunCount from "./components/maichuan/MaiChaunCount";
import CountLike from "./components/media_likes/CountLike";

const App = () => {
  const [active, setActive] = useState("1");
  return (
    <div className="container">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: active === "1" })}
            onClick={() => setActive("1")}
          >
            {"❤️"}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: active === "2" })}
            onClick={() => setActive("2")}
          >
            มั่ยชวล
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: active === "3" })}
            onClick={() => setActive("3")}
          >
            Picture Like
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId="1">
          <HeartCount />
        </TabPane>
        <TabPane tabId="2">
          <MaiChaunCount />
        </TabPane>
        <TabPane tabId="3">
          <CountLike />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default App;
