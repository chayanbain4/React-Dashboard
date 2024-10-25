import { Flex, Menu } from "antd";
import React from "react";
import { MdCode } from "react-icons/md";
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  SettingOutlined,
  FormOutlined,
  TrophyOutlined,
  BookOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <MdCode />
        </div>
      </Flex>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <OrderedListOutlined />,
            label: "ToDo",
          },
          {
            key: "3",
            icon: <FormOutlined />, // You can use a relevant icon or change it
            label: "Test",
          },
          {
            key: "4",
            icon: <TrophyOutlined />, // You can replace this with an appropriate icon for "Daily Challenge"
            label: "Daily Challenge",
          },
          {
            key: "5",
            icon: <BookOutlined />, // Use a suitable icon for "Practice"
            label: "Practice",
          },
          {
            key: "6",
            icon: <SettingOutlined />,
            label: "Settings",
          },
          {
            key: "7",
            icon: <LogoutOutlined />,
            label: "Logout",
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
