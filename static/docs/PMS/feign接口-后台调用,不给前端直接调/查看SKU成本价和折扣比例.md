# 查看SKU成本价和折扣比例

> 作者：pengyutian

**简要描述：** 

- 获取当前用户可以查看的SKU 成本价和折扣比例

**请求URL：** 
- ` /lms/sku/getSkuCostDiscount
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data":["SKU编码1","SKU编码2"]
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|data |String[] |SKU编码|是|
 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [{
		"productSku":"SKU编码1",
		"productCost":"23.65",
		"discountRatio":"1.00"
    },{
		"productSku":"SKU编码2",
		"productCost":"23.68",
		"discountRatio":"0.60"
    }],
    "msg": "操作成功"
}
```
 **返回参数说明** 
 组合sku成本=子sku成本*数量*折扣之和 
 组合sku折扣比例=1
 普通sku取表中原值

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |SKU编码|
|productCost |decimal |成本价 |
|discountRatio |String | 折扣比例 |