# 模拟推送侵权sku信息

> 作者：pengyutian

**简要描述：** 

- 模拟推送侵权sku信息
- 作者：彭雨田

** MQ 配置 **
- ip: 10.10.40.57    （dev/test） /  172.18.199.31   正式
- 端口：5672  
- u/p: admin/admin    /    cpms/fhcoVt6O9op5eMh9dCgu (正式)
- 交换机：skuInfringementExchange 
- route key: 此侵权信息的平台
- 类型：topic TopicExchange / ExchangeTypes.TOPIC
- 说明：pms在同步牛蛙数据时若发现侵权信息有变化，则会推送。
** mq推送格式** 

```
{
  "tenantIds":["000000","0000001"],
  "productSku":"RG485031Z7W",
  "platform":"WH",
  "site":"ALL",
  "infringementType":3,
  "isGbc":false,
  "dateType":1,
}
```

** 说明 **

|参数名|类型|说明|
|:----    |:---|:----- |-----   |
| tenantIds|List&lt;String> |租户id 租户权限(为空则不限制，否则为指定租户id)|
| productSku|String |SKU编码|
| platform|String|平台|
| site|String |站点集合(All为全站点，站点用，拼接)（pms有站点，牛蛙没有，目前没数据）|
| infringementType|Integer |侵权类型|
| isGbc|Boolean |侵权来源是否gbs|
| dateType|Integer |数据类型 (1添加2修改3取消)|

** 模拟推送请求URL：** 
- ` http://dev-service.zehui.local/api/cpms/test/pushTortSku (dev)
- ` http://test-service.zehui.local/api/cpms/test/pushTortSku (test)
  
**请求方式：**
- POST 

**请求示例：** 
```
  ["RG485031Z7W"]
```
** 说明 **

|参数名|类型|说明|必选|
|:-----  |:-----|-----|-----|
|  |Array |pms_sku|是|



 **返回示例**
``` 
调用成功,推送成功SKU为[RG485031Z7W]
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|  |String   |推送成功 返回SKU编码|