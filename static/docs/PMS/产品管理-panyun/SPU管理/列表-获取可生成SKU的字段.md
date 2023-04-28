# 列表-获取可生成SKU的字段

> 作者：yun527292121@163.com

## 简要描述

- 获取可生成SKU的字段

## 请求URL
- ` /pms/sku/getCanGenerateSkuFields?spuProductId=110`
  
## 请求方式
- GET

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|spuProductId |是  |String |SPU ID

## 请求示例 

``` 

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

## 返回参数说明  data

|参数名|类型|说明|
|:-----  |:-----|-----|
|attributeId |String   |属性id  |
|fieldId |String   |字段id  |
|fieldName |String   |字段名称  |
|configType |Integer   |配置类型  |
|showType |Integer   |展示类型  |
|cutName |String   |新的SPU编码,复制成功才有值  |

## 备注