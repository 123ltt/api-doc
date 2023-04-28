# Tiktok授权url

> 作者：luocheng

## 作者

- 罗成

## 请求URL

- ` /store/seller-auth/authorizationUrl `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/authorizationUrl?storeCode=tiktok_084T
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|storeCode |是  |string | 店铺code    |

## 返回示例 

```
{
    "code": 200,
    "success": true,
    "data": "https://auth.tiktok-shops.com/oauth/authorize?app_key=3a1rgg&state=000000-tiktok_084T",
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a872ad1646710819901108225552"
    }
}
```