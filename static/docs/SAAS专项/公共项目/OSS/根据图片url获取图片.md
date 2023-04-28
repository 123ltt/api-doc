# 根据图片url获取图片

> 作者：wuxin

## 简要描述

- 根据图片url获取图片

## 请求URL
- test - `http://test-ops-resource.izehui.com/oss/getImage`
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|url |是  |string |图片链接   |


## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": "https://saas2-dev.oss-cn-shenzhen.aliyuncs.com/null/http_img/20220428/f37ce2e98416e774bda23dadbc033a55.jpg",
    "msg": "操作成功",
    "msgDetail": "",
    "attachedMap": {}
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|data |string   |oss链接 |

## 备注 

- 更多返回错误代码请看首页的错误代码描述