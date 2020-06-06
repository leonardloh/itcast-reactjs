import React from'react';
import { Layout, Menu, Icon } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    MailOutlined,
    InboxOutlined,
    AppstoreOutlined
  } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends React.Component{

    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

    render(){
        return (
            <Layout>
                <Sider width={256} style={{minHeight: '100vh', color: 'white'}}>
                    <div style={{ height: '32px', background:'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu defaultSelectedKeys={['2']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={this.state.collapsed}>
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <span>Option 1</span>
                        </Menu.Item>

                        <Menu.Item key="2"  icon={<DesktopOutlined />}>
                            <span>Option 2</span>
                        </Menu.Item>

                        <Menu.Item key="3" icon={<InboxOutlined />}>
                            <span>Option 3</span>
                        </Menu.Item>

                        <SubMenu key="sub1" icon = {<MailOutlined />} title= "Navigation One">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding:0, textAlign: 'center'}}>Header</Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight:360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Backend System (c) created by Jing Zhi</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;