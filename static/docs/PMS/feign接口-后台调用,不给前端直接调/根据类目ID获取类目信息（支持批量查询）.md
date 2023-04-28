# 根据类目ID获取类目信息（支持批量查询）

> 作者：yun527292121@163.com

**作者：** 李锡洲

**简要描述：** 

- 根据类目ID获取类目信息（支持批量查询）

**请求URL：** 
- 开发环境 ： `192.168.114.169:8888/api/category/getByIds?idList=1302052101832163329,1302052309995470849`
- 测试环境 ： `192.168.114.169:8888/api/category/getByIds?idList=1306038397362081793,1306118805646839809`
  
**请求方式：**
- GET 


**请求参数说明：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|idList |是  |数组 |类目id   |

 **返回示例**

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "id": "1302052101832163329",
            "createUser": -1,
            "createDept": -1,
            "createTime": "2020-09-05 09:13:07",
            "updateUser": -1,
            "updateTime": "2020-09-05 09:13:07",
            "status": 1,
            "isDeleted": 0,
            "parentId": 0,
            "parent": {},
            "child": {},
            "sss": [],
            "name": "美妆护肤",
            "code": "00001",
            "level": 1,
            "categoryPathId": "1302052101832163329",
            "categoryPath": "美妆护肤",
            "isLeaf": 0
        },
        {
            "id": "1302052309995470849",
            "createUser": -1,
            "createDept": -1,
            "createTime": "2020-09-05 09:13:56",
            "updateUser": -1,
            "updateTime": "2020-09-05 09:13:56",
            "status": 1,
            "isDeleted": 0,
            "parentId": "1302052101832163329",
            "parent": {},
            "child": {},
            "sss": [],
            "name": "面部护理",
            "code": "00001_00001",
            "level": 2,
            "categoryPathId": "1302052101832163329,1302052309995470849",
            "categoryPath": "美妆护肤-&gt;面部护理",
            "isLeaf": 0
        }
    ],
    "msg": "操作成功"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code | number  |200成功 500失败 |
|id |number   |主键id |
|parentId |number   |上级id |
|name|string|类目名称|
|code |string   |类目code |
|level |number   |类目等级 |
|isLeaf|number|是否叶子节点 0否 1是|

 **备注** 

- 更多返回错误代码请看首页的错误代码描述