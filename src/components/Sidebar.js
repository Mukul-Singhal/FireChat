import React, { useState, useEffect } from "react";

import { Avatar, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import {
  ExitToApp,
  SearchOutlined,
  Add,
  Home,
  Message,
  PeopleAlt,
} from "@material-ui/icons";

import { auth } from "../firebase";

import { NavLink, Route, Switch } from "react-router-dom";

import SidebarList from "./SidebarList";

export default function Sidebar({ user, page }) {
  const [menu, setMenu] = useState(1);

  const signOut = () => {
    auth.signOut();
  };

  let Nav;

  if (page.isMobile) {
    Nav = NavLink;
  } else {
    Nav = (props) => {
      return (
        <div
          className={`${
            props.activeClassName ? "sidebar__menu--selected" : " "
          }`}
          onClick={props.onClick}
        >
          {props.children}
        </div>
      );
    };
  }

  return (
    <div
      className="sidebar"
      style={{
        minHeight: page.isMobile ? page.hright : "auto",
      }}
    >
      <div className="sidebar__header">
        <div className="sidebar__header--left">
          <Avatar src={user?.photoURL} />
          <h4>{user?.displayName}</h4>
        </div>
        <div className="sidebar__header--right">
          <IconButton onClick={signOut}>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <form
          // onSubmit={searchUsersAndRooms}
          className="sidebar__search--container"
        >
          <SearchOutlined />
          <input
            placeholder="Search for users or rooms"
            type="text"
            id="search"
          />
        </form>
      </div>
      <div className="sidebar__menu">
        <Nav
          to="/chats"
          onClick={() => setMenu(1)}
          activeClassName="sidebar__menu--selected"
          activeClass={menu === 1}
        >
          <div className="sidebar__menu--home">
            <Home />
            <div className="sidebar__menu--line" />
          </div>
        </Nav>
        <Nav
          to="/rooms"
          onClick={() => setMenu(2)}
          activeClassName="sidebar__menu--selected"
          activeClass={menu === 2}
        >
          <div className="sidebar__menu--room">
            <Message />
            <div className="sidebar__menu--line" />
          </div>
        </Nav>
        <Nav
          to="/chats"
          onClick={() => setMenu(3)}
          activeClassName="sidebar__menu--selected"
          activeClass={menu === 3}
        >
          <div className="sidebar__menu--users">
            <PeopleAlt />
            <div className="sidebar__menu--line" />
          </div>
        </Nav>
      </div>
      {page.isMobile ? (
        <Switch>
          <Route path="/chats">
            <SidebarList title="Chats" />
          </Route>
          <Route path="/rooms">
            <SidebarList title="Rooms" />
          </Route>
          <Route path="/users">
            <SidebarList title="Users" />
          </Route>
          <Route path="/search">
            <SidebarList title="Search Results" />
          </Route>
        </Switch>
      ) : menu === 1 ? (
        <SidebarList title="Chats" />
      ) : menu === 2 ? (
        <SidebarList title="Rooms" />
      ) : menu === 3 ? (
        <SidebarList title="Users" />
      ) : menu === 4 ? (
        <SidebarList title="Search Results" />
      ) : null}
      <div className="sidebar__chat--addRoom">
        <IconButton>
          <Add />
        </IconButton>
      </div>
    </div>
  );
}
