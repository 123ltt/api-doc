# 推送获取牛蛙状态有改变的sku的牛蛙状态

> 作者：pengyutian

标题 :
推送获取牛蛙状态有改变的sku的牛蛙状态
 目录 :
MQ

同时牛蛙状态符合下面状态
下线、七天后缺货、十五天后缺货、子sku下架、下线待审核、滞销待分配、滞销下架、滞销、在线、推广sku、新品sku、sku待审核状态 初始化时把这些状态的所有子sku返回给lms 

-
**简要描述：** 
- 推送获取牛蛙状态有改变的sku的牛蛙状态
- 作者：彭雨田
** MQ 配置 **
- ip: 10.10.40.57    （dev/test） /  172.18.199.31   正式
- 端口：5672  
- u/p: admin/admin   
- 交换机：nwSkuStatusExchange
- 队列：nwSkuStatusExchangeName
- key：nwSkuStatus.Exchange.key
- 类型：TopicExchange
- 说明：pms在同步牛蛙牛蛙状态时若发现牛蛙状态有变化，则会推送。
** 模拟推送请求URL：** 
- ` http://dev-saas.zehui.local/api/pms/lms/sku/pushSkuNwStatus (dev)
- ` http://test-saas.zehui.local/api/pms/lms/sku/pushSkuNwStatus (test)
  
**请求方式：**
- POST 
**请求示例：** 
```
{
    "data":{
        "productSku":["QBC8R049"]
    }
}
```
** 说明 **

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|productSku |String |PMS-SKU （传10条以下立马生产 且有返回消息  空或者10条以上等待定时推送）|否|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSku": "QBC8R049",
            "nwSku": "LC049",
            "msg": "推送成功",
            "success": true,
            "type": 1
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a86428163956096106910031688",
        "zhkj-req-id": "20210831141308145_tgtn"
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
|  type|int   |sku类型 |