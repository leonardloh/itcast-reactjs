import React from 'react';

class HelloWorld extends React.Component {

    render(){
    return <div>我的第一个reactjs组件, name = {this.props.name}， 内容 = {this.props.children}</div>;
    };
}

export default HelloWorld;