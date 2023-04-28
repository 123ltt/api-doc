# 牛蛙与PMS类目映射-zlh

> 作者：zhanglonghui

## 简要描述

- 返回所有牛蛙类目映射关系

## 请求URL
- ` /pms/categoryBullfrogMapping/selectCategoryMapRelation`
  
## 请求方式
- GET

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "id": 623,
            "name": "服装及配饰",
            "parentId": 0,
            "level": 1,
            "isMapped": false,
            "isLeaf": false,
            "childrenList": [
                {
                    "id": 717,
                    "name": "服装(女)",
                    "parentId": 623,
                    "level": 2,
                    "isMapped": false,
                    "isLeaf": false,
                    "childrenList": [
                        {
                            "id": 1662,
                            "name": "女裙装/连衣裙",
                            "parentId": 717,
                            "level": 3,
                            "isMapped": false,
                            "isLeaf": true,
                            "childrenList": []
                        },
                        {
                            "id": 1663,
                            "name": "女雪纺衫/衬衫",
                            "parentId": 717,
                            "level": 3,
                            "isMapped": false,
                            "isLeaf": true,
                            "childrenList": []
                        } 
                    ]
                },
                {
                    "id": 718,
                    "name": "配饰(女)",
                    "parentId": 623,
                    "level": 2,
                    "isMapped": false,
                    "isLeaf": false,
                    "childrenList": [
                        {
                            "id": 1674,
                            "name": "女太阳镜",
                            "parentId": 718,
                            "level": 3,
                            "isMapped": false,
                            "isLeaf": true,
                            "childrenList": []
                        }

                    ]
                }
            ]
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|说明|类型|
|:-----  |:-----|-----                           |
|id |牛蛙类目ID   |Long |
|name |牛蛙类目名称   |string |
|parentId |牛蛙父类目ID   |Long |
|level |层级   |int |
|isMapped |是否已映射   |string |
|isLeaf |是否叶子节点   |boolean |
|childrenList |子类目列表   |List |