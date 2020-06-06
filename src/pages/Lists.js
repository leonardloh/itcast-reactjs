import React from 'react';
import { connect } from 'dva';

const namespace = "list";

//第一个回调函数，作用：将page层和model层进行连接，返回model中的数据并且将返回的数据，
//绑定到this.props

// 接受第二个函数，这个函数的作用，将定义的函数绑定到this.props,可以调用model层中定义的函数
@connect((state) => {
    return {
        dataList : state[namespace].data,
        maxNum: state[namespace].maxNum,

    }
}, (dispatch) => { //dispatch 作用： 可以调用model层定义的函数
    return { //将返回的函数，绑定到this.props中
        add : function(){
            dispatch({ //通过dispatch调用model中定义的函数，通过type属性，指定函数命名，格式; namespace + "/函数名字"
                type: namespace + "/addNewData"
            });
        },

        init : () => {
            dispatch({
                type: namespace + "/initData"
            });
        }
    }
})
class List extends React.Component {
    
    componentDidMount(){
        //初始化的操作
        this.props.init();

    }

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.dataList.map((value, index)=>{
                        return <li key={index}>{value}</li>
                        })
                    }
                </ul>
                <button onClick={()=>{
                    this.props.add();
                }}>点我</button>
            </div>
        );
    }
}

export default List;