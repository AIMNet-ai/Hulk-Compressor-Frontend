import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Home from "./home";
const Tabbed = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}>
            <i className='fas fa-text-height' style={{ fontSize: "20px" }}></i>{" "}
            Text Compression
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}>
            <i className='fas fa-file-alt' style={{ fontSize: "20px" }}></i>{" "}
            File Compression
          </NavLink>
        </NavItem> */}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId='1'>
          <Home convert={1} />
        </TabPane>
        <TabPane tabId='2'>
          <Home convert={0} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabbed;
