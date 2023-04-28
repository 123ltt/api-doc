# amazon批量手工同步

> 作者：zhanglonghui

**简要描述：** 

- 平台订单批量手工同步

**请求URL：** 
- ` /oms/amplatorder/synBatch`
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "storeName":"店铺名称"，
    "shippingAddressCountryCode":"国家编码"
    "firstGrabDateStart":"抓单时间开始"，
    "firstGrabDateEnd":"抓单时间结束"，
	"createdAfter":"订单创建时间开始"，
    "createdBefore":"订单创建时间结束"，
    "searchContent":"搜索内容"，放单号
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|storeName |String   |店铺名称|否||
|shippingAddressCountryCode |String   |国家编码|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|createdAfter |date   |订单创建时间开始|否|
|createdBefore |date   |订单创建时间结束|否|
|searchContent |String   |搜索内容|否|
 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": "提交成功！数据抓取需要5-10分钟，请提交抓取申请后到列表页面通过单号重新查询抓取结果。",
    "msg": "操作成功"
}
```


 **备注** 

- 更多返回错误代码请看首页的错误代码描述