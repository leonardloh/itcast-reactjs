export default {
    namespace: 'list',
    state : {
        data: [1,2,3],
        maxNum:3
    },
    reducers : { // 定义的一些函数
        addNewData : function (state){ //更新之前的状态数据
            let maxNum =state.maxNum+1;
            let newArr = [...state.data, maxNum];

            return {
                data : newArr,
                maxNum : maxNum
            }
            //通过return 返回更新后的数据
        }
    }
        
}