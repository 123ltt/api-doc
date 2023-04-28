# 列表-生成子SKU(DTO)

> 作者：yun527292121@163.com

**简要描述：** 

- 生成子SKU

**请求URL：** 
- ` /pms/sku/generateSku`
  
**请求方式：**
- POST 

**参数：** 
```
{
	"spuProductId":"110",
	"lstSku":[
		{
			"productName": "",
			"attrValueList": [
			{
				"attributeId": "1307951651843334145",
				"fieldId": "1308310315221385217",
				"fieldValue": "[\"code1\"]"
			}
			]
		}
	]
}
```

|参数名|说明|必选|类型|
|:----    |:---|:----- |-----   |
|	spuProductId	|	SPUID	|	是	|	integer(int64)		|
|	lstSku	|要生成的SKU信息	|	是	|	SkuDTO		|
|	└ productName	|	子SKU产品名称	|	是	|	string		|
|	└ attrValueList	|	属性	|	是	|	AttrValueDTO		|
|	　└ attributeId	|	属性id	|	是	|	string		|
|	　└ fieldId	|	fieldId	|	是	|	string		|
|	　└ fieldValue	|	字段值	|	是	|	string		|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": {},
    "msg": "操作成功"
}
```


 **备注**