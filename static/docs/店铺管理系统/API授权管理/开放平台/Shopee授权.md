# Shopee授权

> 作者：luocheng

## 作者

- 罗成

## 请求说明

Shopee 平台授权方式，类似于lazada，首先通过授权url接口获取授权url，进行跳转，用户根据平台授权流程进行操作，后端服务会做后续调整，前端只需要根据授权信息进行展示提示

## 请求URL

- ` /store/seller-auth/shopee/authorization`
  
## 请求方式

- GET 

## 参数示例

 ``` 
/store/seller-auth/shopee/authorization?code=646145634a50706e684b424e776f4e77&main_account_id=10110&state=000000-shopee_MY_083G 
 ```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|state |是  |string |业务状态字段(000000-shopee_MY_083G)   |
|code |是  |string | 授权码    |
|main_account_id |否  |int | 主账号Id    |
|shop_id |否  |int | 店铺Id    |