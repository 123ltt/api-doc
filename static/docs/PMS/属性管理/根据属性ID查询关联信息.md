# 根据属性ID查询关联信息

> 作者：yun527292121@163.com

## 简要描述

- 根据属性ID查询关联信息接口

## 请求URL
- ` 192.168.50.201/api/blade-product/attr/selectAttributeAndItem?attrId=1303527768138571778`
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|attrId |是  |bigint |属性表id |



## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "id": "1308310315221385217",
            "createUser": -1,
            "createDept": -1,
            "createTime": "",
            "updateUser": -1,
            "updateTime": "",
            "status": -1,
            "isDeleted": -1,
            "attrType": 1,
            "showType": 2,
            "configType": 2,
            "attrName": "假期888",
            "cutType": 5,
            "attrNameEn": "",
            "cutName": "否,是",
            "attributeId": "1307951651843334145",
            "cutTypePerson": 1,
            "defaultValue": "",
            "fieldName": "是否假期",
            "relationId": -1,
            "attrId": -1,
            "productCutItemList": [],
            "cutItemIdList": []
        },
        {
            "id": "1308310315229773825",
            "createUser": -1,
            "createDept": -1,
            "createTime": "",
            "updateUser": -1,
            "updateTime": "",
            "status": -1,
            "isDeleted": -1,
            "attrType": 1,
            "showType": 2,
            "configType": 2,
            "attrName": "假期888",
            "cutType": 5,
            "attrNameEn": "",
            "cutName": "母亲节,父亲节,春节,国庆节",
            "attributeId": "1307951651843334145",
            "cutTypePerson": 2,
            "defaultValue": "100",
            "fieldName": "假期",
            "relationId": -1,
            "attrId": -1,
            "productCutItemList": [],
            "cutItemIdList": []
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |bigint   |取值表id |
|attributeId |bigint   |属性表id |
|attrType |int   |属性类型  |
|showType |int   |展示类型  |
|configType |int   |配置类型  |
|attrName |string   |属性名称  |
|fieldName |string   |字段名称  |
|cutType |int   |父级取值类型 |
|cutName |string   |取值名称 |
|cutTypePerson |int   |子级取值类型 |


## 备注 

-