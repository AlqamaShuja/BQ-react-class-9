import React, { Children, useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import { useNavigate } from "react-router";
const { Header, Sider, Content } = Layout;

import myLogo from '../../assets/images (1).png'

const MyLayout = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState({});

  useEffect(()=>{
    if(localStorage){
      const userJson = localStorage.getItem("user");
      console.log(typeof userJson);
      
      if(userJson){
        const myUser = JSON.parse(userJson);
        console.log(myUser);
        setUser(myUser);
      }
      // localStorage.setItem({ name: 'Abcd', email: 'test@gmail.com' })
    }
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
    // localStorage.removeItem("isLoggedIn");
    // localStorage.removeItem("user");
  };

  const dropDownMenuItems = [
    {
      key: "1",
      label: <div>Profile</div>,
    },
    {
      key: "2",
      label: <div onClick={handleLogOut}>Logout</div>,
    },
  ];

  return (
    <Layout className="!min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        {/* <img src={myLogo} className="w-[190px] h-16" /> */}
        <h3 className="bg-white text-3xl font-bold text-center text-blue-900 rounded-md my-3 p-1">My App</h3>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboard",
              onClick: () => navigate("/")
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Products",
              onClick: () => navigate("/products")
            },
            {
              key: "3",
              icon: <VideoCameraOutlined />,
              label: "Calculator",
              onClick: () => navigate("/calculator")
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <div className="flex justify-between items-center pr-6">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "#FFF",
              }}
            />
            <Dropdown
              menu={{ items: dropDownMenuItems }}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Avatar
                style={{
                  backgroundColor: "#fde3cf",
                  color: "#f56a00",
                  cursor: "pointer",
                }}
              >
                {/* Optional Chaining */}
                {user?.email?.slice(0, 2)?.toUpperCase() || "U"}
              </Avatar>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MyLayout;
