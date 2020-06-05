import React from 'react';
import HelloWorld from './helloworld.js';

class Show extends React.Component{
    render(){
        return (
            <HelloWorld name="张三">传智播客</HelloWorld>
        );
    }
}

export default Show;