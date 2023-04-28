# SKU对照表导入

> 作者：yangruibo

## 作者
- 骆小敏
	
	
## 简要描述

- SKU对照表导入

## 请求URL
- ` listing/skuUpload `

## 请求方式
- POST


## 参数

|参数名|必选|类型|示例值|说明|
|:----    |:---|:----- |-----   |
|file |是  |string |http://local.test.com/N20220224152136.xlsx |Excel路径 |


## 返回示例

``` 
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "暂无承载数据",
    "attachedMap": {
        "traceId": "0a00020f164575892346810047464"
    }
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|

## 备注

- 更多返回错误代码请看首页的错误代码描述