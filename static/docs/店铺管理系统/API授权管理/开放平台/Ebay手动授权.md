# Ebay手动授权

> 作者：luocheng

## 作者

- 饶俊

## 请求URL

- ` /store/seller-auth/ebay/authorCodeToken `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/ebay/authorCodeToken?authorizationCode=v%5E1.1%23i%5E1%23p%5E3%23f%5E0%23r%5E1%23I%5E3%23t%5EUl41Xzc6NjU2ODk1NEM4QzQ4MEQ3RkJCNjM2QkQzNTQ3Nzk0NjdfMF8xI0VeMjYw&amp;storeCode=ebay_DE_0052
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|authorizationCode |是  |string |授权码   |
|storeCode |是  |string | 店铺编码(ebay_UK_0050)    |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": null,
    "msg": "店铺[FINERYSALE]授权成功",
    "attachedMap": {
        "traceId": "c0a87242162815024231910186340"
    }
}
```