# TikTok授权

> 作者：luocheng

## 作者

- 罗成

## 请求说明

TikTok授权

## 请求URL

- ` /store/seller-auth/tiktok/authorization`
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/tiktok/authorization?code=n_dy_8iSPqq95hDjEYujsw&state=000000-tiktok_084T
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|state |是  |string |业务状态字段(000000-tiktok_084T)   |
|code |是  |string | 授权码    |