# Tiktok刷新授权

> 作者：luocheng

## 作者

- 罗成

## 请求URL

- ` /store/seller-auth/refreshAuthorization `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/refreshAuthorization?platformCode=TT&name=LuckyU
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |是  |string |平台简码   |
|name |是  |string | 店铺名称    |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "records": [
            {
                "platformCode": null,
                "name": "LuckyU",
                "code": null,
                "siteCode": null,
                "result": true
            }
        ],
        "names": [
            "LuckyU"
        ],
        "refreshFailedNames": []
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a872ad1646709940602103425552"
    }
}
```


## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|records | list   | 授权记录 |
|platformCode | list   | 平台简码 |
|name | list   | 店铺名称 |
|code | list   | 店铺编码 |
|siteCode | list   | 站点 |
|result | list   | 刷新授权结果 |
|names | string   | 参与授权的店铺列表 |
|refreshFailedNames | string   | 刷新授权失败店铺列表 |