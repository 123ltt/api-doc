# 获取sku和库存

> 作者：18679129326@163.com

## Author
zhuwenxing

## 请求URL

- ` /oms/om/packageMain/getSkuAndInventory `

## 请求方式

- POST

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|packageCode |是  |String |包裹号   |
|warehouseCode |是  |String |仓库编码   |



## 请求示例
{
    "packageCode" : "ZH12345678A",
	"warehouseCode" : "USWEST"
}

## 返回结果说明

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|pmsSku |是  |String |pmssku   |
|quantity |是  |int |数量   |
|inventory |是  |int |库存   |
|warehouseCode |是  |String |仓库编码   |
|platformProductId |是  |String |itimId   |

## 返回示例 

 ``` 
{
    "code": 200,
    "success": true,
    "data": {
		"pmsSku" : "",
		"quantity" : 12,
		"inventory" : 65,
		"warehouseCode" : "USWEST",
		"platformProductId" : "itimId1212"
	}
    "msg": "操作成功"
}

 ```

## 返回参数说明

|参数名|类型|说明|
|:-----  |:-----|-----                           |