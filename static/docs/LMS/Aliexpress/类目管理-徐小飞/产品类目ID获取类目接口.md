# 产品类目ID获取类目接口

> 作者：xuxiaofei

## 简要描述

- 产品类目ID获取类目接口

## 请求URL
- ` category/get/category `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|productCategoryId |是  |string |产品类目ID（PMS）   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1349565783891197954",
        "createUser": null,
        "createDept": null,
        "createTime": "2021-01-14 11:55:31",
        "updateUser": null,
        "updateTime": "2021-01-14 11:55:31",
        "status": 1,
        "isDeleted": 0,
        "grossProfit": 1.111111,
        "productCategoryId": 1223,
        "categoryId": 200004282,
        "enName": "A/C & Heater Controls",
        "cnName": "空调和加热器控制",
        "parentCategoryId": 200004280,
        "level": 4,
        "isLeaf": true,
        "categoryPath": "Automobiles, Parts & Accessories/Auto Replacement Parts/Air Conditioning & Heat/A/C & Heater Controls"
    },
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|  grossProfit | double    | 销售利润率  |
|  productCategoryId | long    | 产品类目ID  |
|  categoryId |   long  | 速卖通平台类目ID |
|  enName |   string  | 英文名称  |
|  cnName |  string   |  中文名称 |
|  parentCategoryId |  long   | 父类目ID  |
|  level |   int  | 级别  |
|  isLeaf |  boolean   |  是否叶子节点 |
|  categoryPath |  string   |  类目树 |

## 备注 

- 更多返回错误代码请看首页的错误代码描述