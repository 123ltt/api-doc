# 刊登-获取SKU产品属性

> 作者：yun527292121@163.com

**简要描述：** 
根据SPU获取SKU的属性(物流、销售、扩展、类目)并集；
根据SKU/组合SKU获取自身的属性(物流、销售、规格、扩展、类目)；


**请求URL：** 
- ` /lms/sku/getSkuAttr
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "data": ["SKU编码1","SPU编码2"]
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
		"productSku":"A301",
		"lstAttr":[{
				"fieldName":"颜色"
				"fieldNameEn":"Color",
                "fieldValue": "Red"
			}
		]
    }],
    "msg": "操作成功"
}
```
 **返回参数说明 data** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|productSku |String   |产品编码|
|lstAttr |AttrValueVO[] | 产品属性 |
|└ fieldName |String |中文名 |
|└ fieldNameEn |String |英文名 |
|└ fieldValue |String |属性值 |

 **备注**