# Fanno授权url

> 作者：luocheng

## 作者

- 罗成

## 请求URL

- ` /store/seller-auth/authorizationUrl `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/authorizationUrl?storeCode=fannoshop_084Y
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
    "data": "https://auth.fannoshop.com/oauth/authorize?app_key=3la8n0&state=000000-fannoshop_084Y",
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "0af402d6164681749856324748"
    }
}
```