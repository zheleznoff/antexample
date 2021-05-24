import React, { useState }  from 'react';
import {
  useLocation
} from "react-router-dom";

import { Link } from "react-router-dom";
import { Layout,Menu } from 'antd';
import {
  UserOutlined,
  BookOutlined,
  DownloadOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

export const SideMenu = () => {
    const location = useLocation();
    const { pathname } = location;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = () => setCollapsed(!collapsed);
    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo">StoryTeller</div>
                <Menu theme="dark" selectedKeys={[pathname]} mode="inline">
                <SubMenu key="sub1" icon={<BookOutlined />} title="Книги">
                    <Menu.Item key="/">
                        <Link to="/">Список книг</Link>
                    </Menu.Item>
                    <Menu.Item key="/book/add">
                       <Link to="/book/add">Добавить книгу</Link>
                    </Menu.Item>
                </SubMenu>
                {/* <Menu.Item key="/" icon={<BookOutlined />}>
                    <Link to="/">Книги</Link>
                </Menu.Item> */}
                <Menu.Item key="/clients" icon={<UserOutlined />}>
                    <Link to="/clients">Клиенты</Link>
                </Menu.Item>
                <Menu.Item key="/suppliers" icon={<DownloadOutlined />}>
                    <Link to="/suppliers">Поставщики</Link>
                </Menu.Item>
                </Menu>
            </Sider>
        </>
    )
}
