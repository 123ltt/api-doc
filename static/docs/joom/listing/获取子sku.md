# 获取子sku

> 作者：raojun

## 详情


**接口地址**:`joom/product/variants/list?listingId=1463436196332630017`


**请求方式**:`GET`


**请求数据类型**:``


**响应数据类型**:``


**接口描述**:


**请求示例**:


```javascript
{
}
```


**请求参数**:


**请求参数**:

| 参数名称 | 参数说明 | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listingId|主键ID|true||列表页面拿到的父体的ID||




**响应状态**:

| 状态码 | 说明 | schema |
| -------- | -------- | ----- |
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:

| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|msg|返回消息|string||
|success|是否成功|boolean||
|data|承载数据|||
|id|listingId|Long||
|sku|平台SKU|string||
|productSpu|SKU|string||
|mainimage|主图 / 缩略图|string||
|price|售价(USD)|BigDecimal||
|declaredValue|报关价(USD)|BigDecimal||
|msrPrice|零售价(USD)|BigDecimal||
|inventory|库存|Integer||
|costPrice|成本|BigDecimal||
|productStatus|产品状态|Integer|0下线1在线|



**响应示例**:
```javascript
{
    "code": 200,
    "success": true,
    "data": [
        {
            "id": "1463436206390571010",
            "createUser": null,
            "createDept": null,
            "createTime": null,
            "updateUser": null,
            "updateTime": null,
            "status": null,
            "isDeleted": null,
            "variantProductId": null,
            "joomProductId": "1463436196332630017",
            "sku": "XL807K",
            "productSku": null,
            "productId": null,
            "mainImage": "http://picxin.mobile21cn.com/XL/XL807/XL807K.jpg",
            "price": "4.65",
            "costPrice": "2.03",
            "declaredValue": "1.01",
            "currency": null,
            "colors": null,
            "size": null,
            "shippingWeight": null,
            "shippingLength": null,
            "shippingWidth": null,
            "shippingHeight": null,
            "enabled": null,
            "inventory": 89997,
            "shippingPrice": null,
            "effectiveStock": null,
            "msrPrice": "1.11",
            "hsCode": null,
            "gtin": null,
            "attributes": null,
            "parsedAttributes": null,
            "productStatus": 0,
            "isInfringe": null,
            "isGbcInfringe": null,
            "infringementType": null,
            "thumbnail": null
        },
        {
            "id": "1463436206403153921",
            "createUser": null,
            "createDept": null,
            "createTime": null,
            "updateUser": null,
            "updateTime": null,
            "status": null,
            "isDeleted": null,
            "variantProductId": null,
            "joomProductId": "1463436196332630017",
            "sku": "XL807R",
            "productSku": null,
            "productId": null,
            "mainImage": "http://picxin.mobile21cn.com/XL/XL807/XL807R.jpg",
            "price": "4.65",
            "costPrice": "2.04",
            "declaredValue": "1.01",
            "currency": null,
            "colors": null,
            "size": null,
            "shippingWeight": null,
            "shippingLength": null,
            "shippingWidth": null,
            "shippingHeight": null,
            "enabled": null,
            "inventory": 202,
            "shippingPrice": null,
            "effectiveStock": null,
            "msrPrice": "1.12",
            "hsCode": null,
            "gtin": null,
            "attributes": null,
            "parsedAttributes": null,
            "productStatus": 1,
            "isInfringe": null,
            "isGbcInfringe": null,
            "infringementType": null,
            "thumbnail": null
        }
    ],
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a87242163783698589510026596"
    }
}
```