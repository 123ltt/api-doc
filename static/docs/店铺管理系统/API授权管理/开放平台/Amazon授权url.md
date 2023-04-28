# Amazon授权url

> 作者：luocheng

## 作者

- 罗成

## 请求URL

- ` /store/seller-auth/authorizationUrl `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/authorizationUrl?storeCode=amazon_US_0032
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
    "data": "https://sellercentral.amazon.com/apps/authorize/consent?application_id=amzn1.sp.solution.fa1e2851-4ab0-46cf-ae72-f0e7e327c94d&state=000000-amazon_US_0032&version=beta&redirect_uri=https://test-saas.izehui.com/api/sams/store/seller-auth/amazon/authorization",
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "0af40339164877816003154457"
    }
}
```