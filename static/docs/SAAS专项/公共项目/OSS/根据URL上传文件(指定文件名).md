# 根据URL上传文件(指定文件名)

> 作者：wuxin

## 简要描述

- 根据URL上传文件(指定文件名)

## 请求URL
- test-`http://test-ops-resource.izehui.com/oss/endpoint/put-file-by-url`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|url |是  |string |文件链接   |
|fileType |是  |String |文件名   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "link": "https://saas2-dev.oss-cn-shenzhen.aliyuncs.com/null/pms/20220428/0191bed49b1b4c6a7bd33c1818ef36d7.xlsx",
        "domain": "https://saas2-dev.oss-cn-shenzhen.aliyuncs.com",
        "name": "null/pms/20220428/0191bed49b1b4c6a7bd33c1818ef36d7.xlsx",
        "originalName": "pms title.xlsx",
        "encodeName": "q8EUBrgOmdk05coCtyIJ9qBNJkng/dolet7UW+pMvbgJon4Kdhx1uKXRx7eDchZAOrYPcM3i8XZAZ+EpAJIMWGypRtVGTyNUKswtUX0JTkk=",
        "fileId": "1519500191833579521"
    },
    "msg": "操作成功",
    "msgDetail": "",
    "attachedMap": {}
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|link |string   |文件链接地址 |
|domain |string   |域名  |
|name |string   |文件名  |
|originalName |string   |原文件名  |
|encodeName |string   |加密链接  |
|fileId |string   |文件ID  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述