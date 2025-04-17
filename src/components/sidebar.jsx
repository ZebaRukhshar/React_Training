import React from 'react';
import { Menu, Layout } from 'antd';
import {HomeOutlined,UserOutlined,MessageOutlined,LogoutOutlined,BarsOutlined,ShopOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import fbLogo from '../components/facebook.png';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider collapsible theme="light" width={200} trigger={<BarsOutlined />}  >

      <div className="logo" style={{ padding: 20, fontWeight: 'bold' }}>
      <img src={fbLogo} alt="Facebook" style={{ width: '55px' }} />
      </div>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<MessageOutlined />}>
          <Link to="/messages">Messages</Link>
        </Menu.Item> 
        <Menu.Item key="4" icon={<LogoutOutlined />}>
          <Link to="/logout">Logout</Link>
        </Menu.Item> 
        <Menu.Item key="5" icon={<ShopOutlined />}>
          <Link to="/products">Products</Link>
        </Menu.Item> 

      </Menu>
      
    </Sider>
   
  );
};

export default Sidebar;
