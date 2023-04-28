# Lazada授权URL

> 作者：luocheng

## 作者

- 李志远

## 请求URL

- ` /store/seller-auth/lazada/authorizationUrl `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/lazada/authorizationUrl?storeCode=lazada_MY_001U
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|storeCode |是  |string |店铺编号   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": "https://auth.lazada.com/oauth/authorize?response_type=code&amp;force_auth=true&amp;redirect_uri=https://www.baidu.com/&amp;client_id=101602&amp;state=000000-lazada_MY_001U",
    "msg": "操作成功"
}
```