# 根据类目id查询子类目

> 作者：yun527292121@163.com

**作者：** 李锡洲

**简要描述：** 

- 根据类目id查询子类目

**请求URL：** 
- `192.168.50.196/api/blade-product/category/getChildrenById?id=1300242464195522561`
  
**请求方式：**
- GET 


**请求参数说明：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |number |主键id,为空时，返回一级类目   |

 **返回示例**

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "id": "1300243280948146178",
            "createUser": -1,
            "createDept": -1,
            "createTime": "2020-08-31 09:25:30",
            "updateUser": -1,
            "updateTime": "2020-08-31 09:25:30",
            "status": 1,
            "isDeleted": 0,
            "parentId": "1300242464195522561",
            "name": "面部护理",
            "code": "9c5e0a8f8e6b4886a16a37e4f7fbd285",
            "level": 2,
            "categoryPathId": "1300242464195522561->1300243280948146178",
            "categoryPath": "美妆护肤->面部护理",
			"isLeaf": 0
        },
        {
            "id": "1300243482564145153",
            "createUser": -1,
            "createDept": -1,
            "createTime": "2020-08-31 09:26:18",
            "updateUser": -1,
            "updateTime": "2020-08-31 09:26:18",
            "status": 1,
            "isDeleted": 0,
            "parentId": "1300242464195522561",
            "name": "彩妆",
            "code": "25688422cddf4924bfba1f674f106316",
            "level": 2,
            "categoryPathId": "1300242464195522561->1300243482564145153",
            "categoryPath": "美妆护肤->彩妆",
			"isLeaf": 0
        },
        {
            "id": "1300243516273766401",
            "createUser": -1,
            "createDept": -1,
            "createTime": "2020-08-31 09:26:26",
            "updateUser": -1,
            "updateTime": "2020-08-31 09:26:26",
            "status": 1,
            "isDeleted": 0,
            "parentId": "1300242464195522561",
            "name": "香水",
            "code": "b50fccfdb09140efbdf14bd89a337b3a",
            "level": 2,
            "categoryPathId": "1300242464195522561->1300243516273766401",
            "categoryPath": "美妆护肤->香水",
			"isLeaf": 0
        },
        {
            "id": "1300243548850925569",
            "createUser": -1,
            "createDept": -1,
            "createTime": "2020-08-31 09:26:34",
            "updateUser": -1,
            "updateTime": "2020-08-31 09:26:34",
            "status": 1,
            "isDeleted": 0,
            "parentId": "1300242464195522561",
            "name": "男士护肤",
            "code": "d2825fb959314286bcb3fc8c71ad138b",
            "level": 2,
            "categoryPathId": "1300242464195522561->1300243548850925569",
            "categoryPath": "美妆护肤->男士护肤",
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