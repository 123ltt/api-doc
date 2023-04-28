# 批量上传UPC

> 作者：1571221458@qq.com

## 简要描述

- 批量上传UPC

## 请求URL
- ` /lms/data/upc/upload `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|file |是  |multi file |上传的文件   |

## 返回示例
``` 
{
    "code": 400,
    "success": false,
    "data": [
        {
            "codeType": "UPC",
            "code": "125ssdfdsf888dfsdf6",
            "errorMsg": "编码已经存在"
        }
    ],
    "msg": "部分数据上传失败"
}
```