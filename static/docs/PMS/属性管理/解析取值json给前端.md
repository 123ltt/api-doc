# 解析取值json给前端

> 作者：fanglongbin

## 简要描述

- 解析取值json给前端接口

## 请求URL
- ` /item/returnCutValueById `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|newCutName |是  |string |新增取值   |
|fieldId |是  |string | 取值id    |

``` 
{
  "newCutName": "取值",
  "fieldId":"1111111"
}
```


## 返回示例 

``` 
{
  "code": 200,
  "data": [
    {
      "attributeId": "123004",
      "fieldId": "1234556789",
      "fieldName": "字段名称",
      "configType": 1,
      "showType": 2,
      "cutName": "字段下拉列表定义"
    }
  ],
  "msg": "操作成功",
  "success": true
}
```


## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|attributeId |String   |属性id  |
|fieldId |String   |字段id  |
|fieldName |String   |字段名称  |
|configType |Integer   |配置类型  |
|showType |Integer   |展示类型  |
|cutName |String   |新的SPU编码,复制成功才有值  |

## 备注 

-