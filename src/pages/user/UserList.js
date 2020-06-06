import React from 'react';
import { connect } from 'dva';
import { Table, Tag, Space } from 'antd';

const { Column} = Table;

const nameSpace = 'userList';

@connect((state) => {
    return {
        data: state[nameSpace].list //嗲面就可以使用data数据
    }
}, (dispatch) => {
    return {
        initData: () => {
            dispatch({
                type: nameSpace + '/initData'
            });
        }
    }
})

class UserList extends React.Component{

    componentDidMount(){
        this.props.initData();
    }

    render(){
        return (
            <Table dataSource={this.props.data} pagination={{position:"bottom", total:500, pageSize:10, defaultCurrent:3}}>
                <Column title="姓名" dataIndex="name" key="name" />
                <Column title="年龄" dataIndex="age" key="age" />
                <Column title="地址" dataIndex="address" key="address" />
                <Column
                title="标签"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <>
                    {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                        {tag}
                        </Tag>
                    ))}
                    </>
                )}
                />
                <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                    <a>编辑 {record.lastName}</a>
                    <a>删除</a>
                    </Space>
                )}
                />
            </Table>
        );
    }

}

export default UserList;