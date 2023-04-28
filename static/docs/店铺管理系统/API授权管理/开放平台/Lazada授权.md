# Lazada授权

> 作者：luocheng

## 作者

- 李志远

## 请求URL

- ` /store/seller-auth/lazada/authorization `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/lazada/authorization?code=0_101602_Tlfhg0BJzrPMjap7AtB35ycu23796&amp;state=000000-lazada_MY_001U
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|platformCode |是  |string |平台简码   |
|name |是  |string | 店铺名称    |

## 返回示例 

``` 
{
    "code": 404,
    "success": false,
    "data": null,
    "msg": "No handler found for GET /sams/store/auth/pageAuths"
}
```