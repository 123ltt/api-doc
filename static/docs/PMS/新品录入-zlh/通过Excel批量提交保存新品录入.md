# 通过Excel批量提交保存新品录入

> 作者：yun527292121@163.com

## 简要描述

- 通过Excel批量提交保存新品录入

## 请求URL
- ` /blade-product/newProduct/uploadNewProductExcelInfo `
  
## 请求方式
- POST 
## 请求数据类型 
``` 
{
	"fileName": "",
	"linkFileSource": ""
}
```

## 参数

|参数名|说明|是否必选|类型|
|:----    |:---|:----- |-----   |
|fileName |原始文件名  |true |string   |
|linkFileSource |文件链接  |true |string   |

## 返回示例 

``` 
 {
    "code": 200,
    "success": true,
    "data": {},
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |int   |200操作成功否则失败  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述