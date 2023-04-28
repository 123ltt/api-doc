# Amazon授权回调

> 作者：luocheng

## 作者

- 罗成

## 请求URL

- ` /store/seller-auth/amazon/authorization?spapi_oauth_code=ANguBsBZaSEMZPZXTmjs&state=000000-amazon_US_0032&selling_partner_id=A35BKPMYAMI3DE `
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/amazon/authorization?spapi_oauth_code=ANguBsBZaSEMZPZXTmjs&state=000000-amazon_US_0032&selling_partner_id=A35BKPMYAMI3DE
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|spapi_oauth_code |是  |string |授权code   |
|state |是  |string | 业务状态    |
|selling_partner_id |是  |string | 平台卖家ID    |