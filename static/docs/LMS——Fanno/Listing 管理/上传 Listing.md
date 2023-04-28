# 上传 Listing

> 作者：wuxin

## 作者
- 吴新

## 简要描述

- 上传Listing

## 请求URL
- `/listing/global/upload`

## 请求方式
- POST

## 请求数据类型
- application/json

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|ids |是  |array |ListingID列表   |
|isCheck |是  |boolean |是否需要检测侵权   |

## 请求示例
```
{
    "ids": [
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
|:-----  |:-----|-----                           |
|code |int   |状态码 |
|success |boolean   |是否成功: true false |

## 备注 

- code | 201 | 警告