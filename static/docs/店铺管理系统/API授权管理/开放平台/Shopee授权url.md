# Shopee授权url

> 作者：luocheng

## 作者

- 罗成

## 请求URL

- ` /store/seller-auth/authorizationUrl `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/authorizationUrl?storeCode=shopee_MY_083G
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
    "data": "https://partner.test-stable.shopeemobile.com/api/v2/shop/auth_partner?partner_id=850858&redirect=https://cozy1.my_123.com?state=000000-shopee_MY_083G&timestamp=1645528121&sign=361ef315633da7d7dafa947457e8628fdad3a32b578100e55321bc07eebbb757",
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "0af403a4164552812164915607"
    }
}
```