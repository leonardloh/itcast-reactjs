import request from "../util/request";

export default {
    namespace: 'userList',
    state : {
        list:[]
    },
    
    effects :{ //新增effects 配置，用于异步加载数据
        *initData(params, sagaEffects){ //定义异步方法
            const {call, put} = sagaEffects //获取call、put方法
            const url = "/ds/user/list"; //定义请求url
            let data = yield call(request, url); //执行请求
            yield put({ //调用reducer的方法更新state里面的函数
                type: "queryList", //指定方法名
                data: data //传递ajax回来的数据
            })
        }

    },
    reducers : { // 定义的一些函数
        queryList : function (state, result){ //更新之前的状态数据, result : 请求到的数据
            let data = [...result.data];
            return { //更新状态
                list: data
            }
        }
    }  
}