# Ebay授权URL

> 作者：luocheng

## 作者

- 饶俊

## 请求URL

- ` /store/seller-auth/ebay/authorizationUrl `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/ebay/authorizationUrl?storeCode=ebay_UK_0050
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|storeCode |是  |string |店铺code   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": "https://auth.ebay.com/oauth2/authorize?client_id=lbjyong-lmstest-PRD-b2a090144-ba6a46c0&amp;redirect_uri=lbj_yong-lbjyong-lmstest-kukaivcsz&amp;response_type=code&amp;state=000000-ebay_UK_0050&amp;scope=https://api.ebay.com/oauth/api_scope https://api.ebay.com/oauth/api_scope/sell.account&amp;prompt=login",
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a87242162374057261110122292"
    }
}
```