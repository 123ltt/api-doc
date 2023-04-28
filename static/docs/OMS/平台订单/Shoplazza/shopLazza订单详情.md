# shopLazza订单详情

> 作者：luobinbin

## 详情


**接口地址**:`/slPlatOrderMain/detail`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入slPlatOrderMain


**请求示例**:


```javascript
{
	"platOrderId": "",
	"storeCode": ""
}
```


**请求参数**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|&emsp;&emsp;platOrderId|SL平台订单id||true|string||
|&emsp;&emsp;storeCode|店铺编码||true|string|-|


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«SlPlatOrderMainVO对象»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- |
|attachedMap||object||
|code|状态码|integer(int32)|integer(int32)|
|msg|返回消息|string||
|success|是否成功|boolean||
|data|承载数据|IPage«SlPlatOrderMainVO对象»|IPage«SlPlatOrderMainVO对象»|
|&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;updateUser|更新人|integer(int64)||
|&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;platOrderId|平台单号|string||
|&emsp;&emsp;omOrderId|OMS订单号|string||
|&emsp;&emsp;orderType|订单类型 （0：线上 1：手工）|integer(int32)||
|&emsp;&emsp;paymentMethod|付款方式|string||
|&emsp;&emsp;customerId|买家id|string||
|&emsp;&emsp;currency|币种|string||
|&emsp;&emsp;financialStatus|付款状态|string||
|&emsp;&emsp;trackingCompany|物流方式|string||
|&emsp;&emsp;trackingNumber|跟踪号|string||
|&emsp;&emsp;platStatus|0.待付款 opened 1.待发货订单：placed且financial_status =>paid 2.已发货订单：finished\r\n3.已取消订单：cancelled|string||
|&emsp;&emsp;storeCode|店铺编码|string||
|&emsp;&emsp;totalPrice|订单总金额|decimal||
|&emsp;&emsp;country|国家|string||
|&emsp;&emsp;province|省|string||
|&emsp;&emsp;city|市|string||
|&emsp;&emsp;zipCode|邮编|string||
|&emsp;&emsp;address1|地址1|string||
|&emsp;&emsp;address2|地址2|string||
|&emsp;&emsp;phone|电话|string||
|&emsp;&emsp;customerEmailAddress|邮箱|string||
|&emsp;&emsp;cancelReason|取消原因|string||
|&emsp;&emsp;pushed|是否已推送到OM:0-待推送,1-推送成功或者OM已存在,2-推送失败,3-不需要推送:老系统中已存在或者被过滤|integer(int32)||
|&emsp;&emsp;createdAt|平台订单创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|平台订单更新时间|string(date-time)||
|&emsp;&emsp;markStatus|标记状态|integer(int32)||
|&emsp;&emsp;omsMarkDate|oms标记时间(oms生成)|string(date-time)||
|&emsp;&emsp;firstGrabDate|首次抓单时间(oms生成)|string(date-time)||
|&emsp;&emsp;lastGrabDate|最后一次抓单时间(oms生成)|string(date-time)||
|&emsp;&emsp;tenantId|租户|string||
|&emsp;&emsp;companyId|公司id|string||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;customerName|姓名|string||
|&emsp;&emsp;totalDiscount|折扣金额|decimal||
|&emsp;&emsp;totalShipping|客付运费|decimal||
|&emsp;&emsp;originalShippingFee|原始客付运费|decimal||
|&emsp;&emsp;refundAmount|退款金额|decimal||
|&emsp;&emsp;totalTax|订单总税费|decimal||
|&emsp;&emsp;totalRefundPrice|退款金额|decimal||
|&emsp;&emsp;totalRefundTax|退款总税费|decimal||
|&emsp;&emsp;omOrderStatus|OMS订单状态|integer(int32)||
|&emsp;&emsp;omOrderStatusStr|OMS订单状态|string||
|&emsp;&emsp;deliveryTime|实际发货时间|string(date-time)||
|&emsp;&emsp;storeName|店铺名称|string||
|&emsp;&emsp;orderTypeStr|订单来源|string||
|&emsp;&emsp;orderStatusStr|订单状态:平台审核中 待发货订单 已发货订单 已完成订单 已取消订单 已取消订单 标记失败|string||
|&emsp;&emsp;countryName|国家名称|string||
|&emsp;&emsp;countryCode|国家编码|string||
|&emsp;&emsp;subTotal|商品总金额|decimal||
|&emsp;&emsp;paymentAmount|买家实付|decimal||
|&emsp;&emsp;platformTradeAmount|平台交易费|decimal||
|&emsp;&emsp;freightChargesAmount|客付运费|decimal||
|&emsp;&emsp;sellerIncomeAmount|卖家实收金额|decimal||
|&emsp;&emsp;tax|订单总税费|decimal||
|&emsp;&emsp;sellerIncomeFreight|卖家实收运费|decimal||
|&emsp;&emsp;productTotal|商品金额|decimal||
|&emsp;&emsp;goods|产品信息|array|SlPlatOrderGoodVO对象|
|&emsp;&emsp;&emsp;productId|商品id|string||
|&emsp;&emsp;&emsp;productImgUrl|商品主图URL|string||
|&emsp;&emsp;&emsp;sku|平台SKU编码|string||
|&emsp;&emsp;&emsp;productName|商品名称|string||
|&emsp;&emsp;&emsp;price|商品单价|decimal||
|&emsp;&emsp;&emsp;subTotal|产品总价|decimal||
|&emsp;&emsp;&emsp;quantity|商品数量|integer(int32)||


**响应示例**:
```javascript
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1540282338436173826",
        "createUser": "0",
        "createDept": "0",
        "createTime": "2022-06-24 18:35:01",
        "updateUser": "0",
        "updateTime": "2022-06-24 18:35:01",
        "status": 1,
        "isDeleted": 0,
        "platOrderId": "KT00000225",
        "omOrderId": "",
        "orderType": 0,
        "paymentMethod": "online",
        "customerId": "",
        "currency": "USD",
        "financialStatus": "paid",
        "trackingCompany": "",
        "trackingNumber": "",
        "platStatus": 1,
        "storeCode": "shoplazza_0892",
        "totalPrice": "247.9700",
        "country": "United States",
        "province": "Missouri",
        "city": "Mexico",
        "zipCode": "65265",
        "address1": "1330 Neptune Street",
        "address2": "N/a",
        "phone": "+1 573 721 4659",
        "customerEmailAddress": "widow4003@gmail.com",
        "cancelReason": "",
        "pushed": 0,
        "createdAt": "2022-06-11 13:34:37",
        "updatedAt": "2022-06-11 13:43:32",
        "markStatus": 0,
        "omsMarkDate": null,
        "tenantId": "000000",
        "companyId": "",
        "remark": "",
        "customerName": "Christina Nichols",
        "totalDiscount": "18.6900",
        "totalShipping": "9.9900",
        "originalShippingFee": "-1.0000",
        "refundAmount": "0.0000",
        "totalTax": "0.0000",
        "totalRefundPrice": "0.0000",
        "totalRefundTax": "0.0000",
        "omOrderStatus": null,
        "omOrderStatusStr": null,
        "deliveryTime": null,
        "storeName": "synpos",
        "orderTypeStr": "线上订单",
        "orderStatusStr": "待发货订单",
        "countryName": "美国",
        "countryCode": "US",
        "subTotal": "256.6700",
        "paymentAmount": "247.9700",
        "platformTradeAmount": "0",
        "freightChargesAmount": "9.9900",
        "sellerIncomeAmount": "247.9700",
        "tax": "0.0000",
        "sellerIncomeFreight": "247.9700",
        "productTotal": "256.6700",
        "goods": [
            {
                "id": "1540282343012159489",
                "platOrderId": "KT00000225",
                "storeCode": "shoplazza_0892",
                "productId": "8f29e429-c74a-45ed-b05a-481ad97fa967",
                "productImgUrl": "/products/vintage-opening-adjustable-angel-wings-ring",
                "sku": "QZKFnkSJK9-Photocolor-Adjustable",
                "productName": "Vintage Opening Adjustable Angel Wings Ring",
                "price": "3.7000",
                "subTotal": "3.7000",
                "quantity": 1,
                "tenantId": "000000"
            }
        ]
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a8727d1656473738474112021204"
    }
}
```