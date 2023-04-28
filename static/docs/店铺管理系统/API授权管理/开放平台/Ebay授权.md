# Ebay授权

> 作者：luocheng

## 作者

- 饶俊

## 请求URL

- ` /store/seller-auth/ebay/authorization `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/ebay/authorization?code=v%5E1.1%23i%5E1%23p%5E3%23f%5E0%23r%5E1%23I%5E3%23t%5EUl41XzE6MjI1NzRFMUYxQjdGNEVGOEM0RDVCQUM4NzYyRkIxRDZfMF8xI0VeMjYw&amp;state=000000-ebay_UK_0050&amp;siteCode=UK
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|code |是  |string |授权码   |
|state |是  |string | 状态(000000-ebay_UK_0050-US)    |

## 返回示例 

``` 
{
    "code": 404,
    "success": false,
    "data": null,
    "msg": "No handler found for GET /sams/store/auth/pageAuths"
}
```