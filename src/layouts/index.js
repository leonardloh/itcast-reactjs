import React from'react';
import { Layout, Menu, Icon } from 'antd';
import  { Link } from 'umi';
import {
    UserOutlined
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
                    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={this.state.collapsed}>

                        <SubMenu key="sub1" icon={<UserOutlined />} title="用户管理">
                            <Menu.Item key="1"><Link to="/user/UserAdd">新增用户</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/user/UserList">用户列表</Link></Menu.Item>
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