# 模拟推送获取折扣率有改变的sku的折扣成本

> 作者：pengyutian

**简要描述：** 

- 模拟推送获取折扣率有改变的sku的折扣成本
- 作者：彭雨田

** MQ 配置 **
- ip: 10.10.40.57    （dev/test） /  172.18.199.31   正式
- 端口：5672  
- u/p: admin/admin   
- 交换机：pms_exchange_discount_products
- key: route.pms.discount.products
- 对列：queue.pms.discount.products
- 类型：Direct
- 说明：pms在同步牛蛙折扣比例时若发现折扣比例有变化，则会推送。

** 模拟推送请求URL：** 
- ` http://dev-saas.zehui.local/api/pms/lms/sku/pushDiscountProductsByQuery (dev)
- ` http://test-saas.zehui.local/api/pms/lms/sku/pushDiscountProductsByQuery (test)
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data": {
        "productSku":["RG485031Z7W"]
    }
}
```
** 说明 **
- 入参什么就返回什么

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|productSku |String |PMS-SKU （传10条以下立马生产 且有返回消息  空或者10条以上等待定时推送）|否|




 **返回示例**
``` 
{
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "RG485031Z7W",
            "nwSku": "ZA0031E",
            "msg": "推送成功",
            "success": true,
            "discount": "1.0"
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a864281639534900116100613800",
        "zhkj-req-id": "20210831141308145_tgtn"
    }
}
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|  productSku|String   |PMS-SKU|
|  nwSku|String   |NW-SKU|
|  msg|String   |说明 |
|  success|Boolean   |是否成功 |
|  discount|BigDecimal   |折扣比例 |