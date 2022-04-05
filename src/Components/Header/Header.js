import React, { useState, useEffect } from "react";
import { UserContext } from "../../Contexts/UserProvider";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu, Divider } from "antd";
import {
  FormOutlined,
  CopyrightOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default function Header() {
  const [current, setCurrent] = useState();
  const [userInfo, setUserInfo] = useState();
  const { user, setlogOut } = React.useContext(UserContext);

  useEffect(() => {
    if (user) {
      setUserInfo({
        name: user.name,
        avatar: user.moreData.avatar_url,
        coin: user.coin,
      });
    } else {
      setUserInfo(undefined);
    }
  }, [user]);

  const { SubMenu } = Menu;
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  //----------------------------------------//
  return userInfo ? (
    <Menu
      className="flex justify-center items-center px-2 md:px-80"
      onClick={handleClick}
      selectedKeys={current}
      mode="horizontal"
    >
      <Menu.Item
        key="Rocket"
        className="flex items-center mr-auto"
        icon={
          <img
            className="w-4 sm:w-5 md:w-6"
            src="./img/rocket-logo.svg"
            alt="slider-img-1"
          />
        }
        onClick={handleClick}
      >
        <Link to="/" className="font-semibold text-base text-slate-800">
          Rocket
        </Link>
      </Menu.Item>
      <Menu.Item key="Blog" className="flex items-center">
        <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <Link to="/Blog">Blog</Link>
        </a>
      </Menu.Item>

      <Menu.Item key="About" className="flex items-center">
        <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <Link to="/About">About</Link>
        </a>
      </Menu.Item>

      <Menu.Item
        key="TodoList"
        className="flex items-center"
        icon={<FormOutlined />}
      >
        <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <Link to="/TodoList">Todo List</Link>
        </a>
      </Menu.Item>

      <Menu.Item key="SlotMachine" className="flex items-center">
        <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <Link to="/SlotMachine">Slot Machine </Link>
        </a>
      </Menu.Item>

      <SubMenu key="user-menu" title={<UserOutlined />}>
        <Menu.Item key="user-profile">
          <Link to="/Profile" className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/78034349?v=4"
              alt="avatar"
              className="w-5 h-5 rounded-full mr-2"
            />
            {userInfo.name}
          </Link>
        </Menu.Item>

        <Menu.Item
          key="user-coins"
          icon={<CopyrightOutlined className="text-orange-500" />}
          className="flex items-center hover:text-orange-500"
        >
          {userInfo.coin}
        </Menu.Item>
        <Divider className="m-0" />
        <Menu.Item
          key="log-out"
          icon={<LogoutOutlined />}
          className="flex items-center"
          onClick={() => setlogOut()}
        >
          Log Out
        </Menu.Item>
      </SubMenu>
    </Menu>
  ) : (
    <Menu
      className="flex justify-center items-center px-2 md:px-80"
      onClick={handleClick}
      selectedKeys={current}
      mode="horizontal"
    >
      <Menu.Item
        key="Rocket"
        className="flex items-center mr-auto"
        icon={
          <img className="w-6" src="/img/rocket-logo.svg" alt="slider-img-1" />
        }
        onClick={handleClick}
      >
        <Link to="/" className="font-semibold text-base text-slate-800">
          Rocket
        </Link>
      </Menu.Item>

      <Menu.Item key="Blog" className="flex items-center">
        <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <Link to="/Blog">Blog</Link>
        </a>
      </Menu.Item>

      <Menu.Item key="About" className="flex items-center">
        <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <Link to="/About">About</Link>
        </a>
      </Menu.Item>

      <Menu.Item key="log-ing" className="flex items-center">
        <a onClick={handleClick} target="_blank" rel="noopener noreferrer">
          <Link to="/Login">Log In</Link>
        </a>
      </Menu.Item>
    </Menu>
  );
}
