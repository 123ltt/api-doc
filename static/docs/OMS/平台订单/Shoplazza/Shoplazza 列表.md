# Shoplazza 列表

> 作者：luobinbin

## 分页


**接口地址**:`/slPlatOrderMain/page`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入slPlatOrderMain

**请求参数**:

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|createdAtStart |date   |创建时间开始|否|
|createdAtEnd |date   |创建时间结束|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|storeNameListStr |String   |店铺编号列表|否|
|orderType |int   |订单来源(0线上订单,1手工订单)|否|
|searchType |Integer   |搜索类型:1-平台单号, 2-OMS单号, 3-在线SKU, 4-跟踪号, 5-收件人姓名|否|
|searchContent |String   |搜索内容|否|
|platOrderStatus |integer   |订单状态:全部:不传此参数 0.待付款 opened 1.待发货订单：placed且financial_status =>paid 2.已发货订单：finished 3.已取消订单：cancelled 4.标记失败 |否|
|sortField |String   |需要排序的字段 created_at:平台创建时间 updated_at:平台更新时间|否|
|sortType |String   |正序排列字段 asc:正序排列 desc:倒序排列|否|

**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«SlPlatOrderMainVO对象»»|
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
|&emsp;searchCount||boolean||
|&emsp;size||integer(int64)||
|&emsp;total||integer(int64)||
|&emsp;current||integer(int64)||
|&emsp;hitCount||boolean||
|&emsp;pages||integer(int64)||
|&emsp;records||array|SlPlatOrderMainVO对象|
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
        "records": [
            {
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
                        "id": "1540282346057224194",
                        "platOrderId": "KT00000225",
                        "storeCode": "shoplazza_0892",
                        "productId": "2feb299e-9b4c-4524-9654-da3f0db52042",
                        "productImgUrl": "/products/lace-sexy-skull-printed-womens-short-sleeve-top",
                        "sku": "QZKHYom9Nn-Black-L-Y",
                        "productName": "Lace Sexy Skull Printed Women's Short Sleeve Top",
                        "price": "22.9900",
                        "subTotal": "22.9900",
                        "quantity": 1,
                        "tenantId": "000000"
                    }
                ]
            },
            {
                "id": "1540275452099944450",
                "createUser": "0",
                "createDept": "0",
                "createTime": "2022-06-24 18:07:39",
                "updateUser": "0",
                "updateTime": "2022-06-27 10:07:36",
                "status": 1,
                "isDeleted": 0,
                "platOrderId": "KT00000224",
                "omOrderId": "SL2206271007000001",
                "orderType": 0,
                "paymentMethod": "online",
                "customerId": "",
                "currency": "USD",
                "financialStatus": "paid",
                "trackingCompany": "",
                "trackingNumber": "",
                "platStatus": 1,
                "storeCode": "shoplazza_0892",
                "totalPrice": "30.9800",
                "country": "United States",
                "province": "Minnesota",
                "city": "Ottertail",
                "zipCode": "56571",
                "address1": "112 Long Street",
                "address2": "112",
                "phone": "+1 218 205 1345",
                "customerEmailAddress": "jodooley@hotmail.com",
                "cancelReason": "",
                "pushed": 1,
                "createdAt": "2022-06-11 09:28:57",
                "updatedAt": "2022-06-11 09:31:36",
                "markStatus": 0,
                "omsMarkDate": null,
                "tenantId": "000000",
                "companyId": "",
                "remark": "",
                "customerName": "Jo Dooley",
                "totalDiscount": "0.0000",
                "totalShipping": "7.9900",
                "originalShippingFee": "-1.0000",
                "refundAmount": "0.0000",
                "totalTax": "0.0000",
                "totalRefundPrice": "0.0000",
                "totalRefundTax": "0.0000",
                "omOrderStatus": 1,
                "omOrderStatusStr": "异常订单",
                "deliveryTime": null,
                "storeName": "synpos",
                "orderTypeStr": "线上订单",
                "orderStatusStr": "待发货订单",
                "countryName": "美国",
                "countryCode": "US",
                "subTotal": "22.9900",
                "paymentAmount": "30.9800",
                "platformTradeAmount": "0",
                "freightChargesAmount": "7.9900",
                "sellerIncomeAmount": "30.9800",
                "tax": "0.0000",
                "sellerIncomeFreight": "30.9800",
                "productTotal": "22.9900",
                "goods": [
                    {
                        "id": "1540275495599071234",
                        "platOrderId": "KT00000224",
                        "storeCode": "shoplazza_0892",
                        "productId": "2feb299e-9b4c-4524-9654-da3f0db52042",
                        "productImgUrl": "/products/lace-sexy-skull-printed-womens-short-sleeve-top",
                        "sku": "QZKHYom9Nn-Black-M-Y",
                        "productName": "Lace Sexy Skull Printed Women's Short Sleeve Top",
                        "price": "22.9900",
                        "subTotal": "22.9900",
                        "quantity": 1,
                        "tenantId": "000000"
                    }
                ]
            }
        ],
        "total": 3,
        "size": 20,
        "current": 1,
        "orders": [],
        "optimizeCountSql": true,
        "hitCount": false,
        "searchCount": true,
        "pages": 1
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a8727d1656472090835102921204"
    }
}
```