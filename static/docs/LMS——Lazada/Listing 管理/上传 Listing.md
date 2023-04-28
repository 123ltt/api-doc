# 上传 Listing

> 作者：xiezhihua@zehui.com

## 简要描述

- 上传Listing

## 请求URL
- ` /lazada/product/upload `

## 请求方式
- POST

## 请求数据类型
- application/json

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|spuIds |是  |array |ListingID列表   |
|isCheck |否  |boolean |是否需要检测侵权   |

## 请求示例
```
{
    "spuIds": [
		1343488912163753985,
		1343488912163753985
	]
}
```

## 返回示例

```
  {
    "code": 200,
    "success": true,
    "msg": "操作成功"
}
```

## 返回参数说明

|参数名|类型|说明|
|-----|-----|-----|
| |   | |

## 备注

- 更多返回错误代码请看首页的错误代码描述