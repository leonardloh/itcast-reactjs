export default {
    'get /ds/list': function (req, res){ //模拟请求返回数据
        res.json({
            data: [1,2, 3, 4, 5, 6],
            maxNum: 6
        })
    },

    'get /ds/user/list': function (req, res){ //模拟请求返回数据
        res.json([     
                    {
                      key: '1',
                      name: '张三1',
                      age: 32,
                      address: '上海',
                      tags: ['帅气', '程序员'],
                    },
                    {
                      key: '2',
                      name: '李四2',
                      age: 42,
                      address: '北京市',
                      tags: ['屌丝'],
                    },
                    {
                      key: '3',
                      name: '王五3',
                      age: 32,
                      address: '杭州市',
                      tags: ['高富帅', '富二代'],
                    },
                ])
    }
}