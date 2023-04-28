# ES新增或保存接口

> 作者：xingzhen

## 简要描述

- ES新增或保存接口

## 请求URL
- /client/fbwordsDetails/saveOrUpdateFbwordsDetails
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |Long |id   |
|word |是  |String |违禁词   |
|platform |否  |String |平台   |
|site |否  |String |站点   |
|level |否  |Interger |违禁词级别 0普通违禁词可保存；1强制违禁词不保存 （预留可暂时不传） |
|categoryIds |否  |String |逗号分割的类目id字符串   |

## 返回示例 
无返回值


## 返回参数说明 

``` 
  {
    "code": 200,
    "success": true,
    "data": {},
    "msg": "操作成功"
}
```

## 备注

- 更多返回错误代码请看首页的错误代码描述