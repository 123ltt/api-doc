# shopify订单列表

> 作者：mebieber@163.com

## 分页


**接口地址**:`/sy/page`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:传入syPlatOrderMain

**请求参数**:

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|createdAtStart |date   |创建时间开始|否|
|createdAtEnd |date   |创建时间结束|否|
|firstGrabDateStart |date   |抓单时间开始|否|
|firstGrabDateEnd |date   |抓单时间结束|否|
|storeNameListStr |String   |店铺编号列表|否|
|orderType |int   |订单来源(0线上订单,1手工订单)|否|
|searchType |Integer   |搜索类型:1-平台单号, 2-OMS单号, 3-在线SKU, 4-跟踪号|否|
|searchContent |String   |搜索内容|否|
|platOrderStatus |integer   |订单状态:全部:不传此参数 1.待付款订单 2.待发货订单 3.已关闭订单 4.已取消订单 5.标记失败 |否|
|sortField |String   |需要排序的字段 created_at:平台创建时间 updated_at:平台更新时间|否|
|sortType |String   |正序排列字段 asc:正序排列 desc:倒序排列|否|

**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«IPage«SyPlatOrderMainVO对象»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found|||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- |
|code|状态码|integer(int32)|integer(int32)|
|msg|返回消息|string||
|success|是否成功|boolean||
|data|承载数据|IPage«SyPlatOrderMainVO对象»|IPage«SyPlatOrderMainVO对象»|
|&emsp;searchCount||boolean||
|&emsp;size||integer(int64)||
|&emsp;total||integer(int64)||
|&emsp;current||integer(int64)||
|&emsp;hitCount||boolean||
|&emsp;pages||integer(int64)||
|&emsp;records||array|SyPlatOrderMainVO对象|
|&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;updateUser|更新人|integer(int64)||
|&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;platOrderId|平台单号|string||
|&emsp;&emsp;omOrderId|OMS订单号|string||
|&emsp;&emsp;orderType|订单类型 （0：线上 1：手工）|integer(int32)||
|&emsp;&emsp;payType|付款方式|string||
|&emsp;&emsp;userPin|买家id|string||
|&emsp;&emsp;currencyCode|币种|string||
|&emsp;&emsp;financialStatus|付款状态|string||
|&emsp;&emsp;trackingCompany|物流方式|string||
|&emsp;&emsp;trackingNumber|跟踪号|string||
|&emsp;&emsp;fulfillmentStatus|发货状态|string|
|&emsp;&emsp;storeCode|店铺编码|string||
|&emsp;&emsp;orderTotalPrice|订单总金额|decimal||
|&emsp;&emsp;consigneeCountry|国家|string||
|&emsp;&emsp;consigneeProvince|省|string||
|&emsp;&emsp;consigneeCity|市|string||
|&emsp;&emsp;consigneeZip|收货人ZIP|string||
|&emsp;&emsp;consigneeAddr1|地址1|string||
|&emsp;&emsp;consigneeAddr2|地址2|string||
|&emsp;&emsp;consigneePhone|电话|string||
|&emsp;&emsp;consigneeEmail|邮箱|string||
|&emsp;&emsp;cancelReason|取消原因|string||
|&emsp;&emsp;pushed|是否已推送到OM:0-待推送,1-推送成功或者OM已存在,2-推送失败,3-不需要推送:老系统中已存在或者被过滤|integer(int32)||
|&emsp;&emsp;createdAt|平台订单创建时间|string(date-time)||
|&emsp;&emsp;updatedAt|平台订单更新时间（最后一次抓单时间）|string(date-time)||
|&emsp;&emsp;markStatus|标记状态|integer(int32)||
|&emsp;&emsp;omsMarkDate|oms标记时间(oms生成)|string(date-time)||
|&emsp;&emsp;createTime|首次抓单时间(oms生成)|string(date-time)||
|&emsp;&emsp;tenantId|租户|string||
|&emsp;&emsp;companyId|公司id|string||
|&emsp;&emsp;orderRemark|备注|string||
|&emsp;&emsp;consignee|姓名|string||
|&emsp;&emsp;sellerDiscount|折扣金额|decimal||
|&emsp;&emsp;freightPrice|客付运费|decimal||
|&emsp;&emsp;refundedDate|退款时间|string(date-time)||
|&emsp;&emsp;taxFee|订单总税费|decimal||
|&emsp;&emsp;omOrderStatus|OMS订单状态|integer(int32)||
|&emsp;&emsp;omOrderStatusStr|OMS订单状态|string||
|&emsp;&emsp;deliveryTime|实际发货时间|string(date-time)||
|&emsp;&emsp;storeName|店铺名称|string||
|&emsp;&emsp;orderTypeStr|订单来源|string||
|&emsp;&emsp;orderStatusStr|订单状态: 待付款订单 待发货订单 已关闭订单 已取消订单 标记失败|string||
|&emsp;&emsp;countryName|国家名称|string||
|&emsp;&emsp;countryCode|国家编码|string||
|&emsp;&emsp;itemsTotalPrice|商品总金额|decimal||
|&emsp;&emsp;orderPayment|买家实付|decimal||
|&emsp;&emsp;platformTradeAmount|平台交易费|decimal||
|&emsp;&emsp;freightChargesAmount|客付运费|decimal||
|&emsp;&emsp;sellerIncomeAmount|卖家实收金额|decimal||
|&emsp;&emsp;tax|订单总税费|decimal||
|&emsp;&emsp;sellerIncomeFreight|卖家实收运费|decimal||
|&emsp;&emsp;productTotal|商品金额|decimal||
|&emsp;&emsp;goods|产品信息|array|SyPlatOrderGoodVO对象|
|&emsp;&emsp;&emsp;productId|商品id|string||
|&emsp;&emsp;&emsp;skuUrl|商品主图URL|string||
|&emsp;&emsp;&emsp;skuName|平台SKU编码|string||
|&emsp;&emsp;&emsp;title|商品名称|string||
|&emsp;&emsp;&emsp;price|商品单价|decimal||
|&emsp;&emsp;&emsp;subTotal|产品总价|decimal||
|&emsp;&emsp;&emsp;quantity|商品数量|integer(int32)|||



**响应示例**:
```javascript
{
    "code":200,
    "success":true,
    "data":{
        "records":[
            {
                "id":"1584815588702007298",
                "platOrderId":"5147534131517",
                "storeCode":"shopify_0897",
                "omOrderId":"",
                "tenantId":"000000",
                "pushed":0,
                "orderType":0,
                "consignee":"tsheil5542@gmail.com Trudy  Sheil",
                "consigneeEmail":"tsheil5542@gmail.com",
                "consigneePhone":"(816) 510-3358",
                "consigneeCountry":"United States",
                "consigneeCountryCode":"US",
                "consigneeZip":"64068",
                "consigneeProvince":"Missouri",
                "consigneeCity":"Liberty",
                "consigneeAddr1":"205 Bingamans Dr",
                "consigneeAddr2":"",
                "platOrderStatus":2,
                "orderPayment":"37.57",
                "freightPrice":"0.00",
                "taxFee":"0.0000",
                "sellerDiscount":"3.40",
                "orderStartTime":null,
                "orderEndTime":null,
                "orderRemark":"",
                "userPin":"6496058868029",
                "trackingCompany":"",
                "trackingNumber":"",
                "markStatus":0,
                "omsMarkDate":null,
                "refundedDate":null,
                "createdAt":"2022-10-25 06:03:36",
                "updatedAt":"2022-10-25 06:03:38",
                "createTime":"2022-10-25 15:54:15",
                "createUser":0,
                "createDept":0,
                "updateTime":"2022-10-25 15:54:15",
                "updateUser":0,
                "isDeleted":0,
                "status":0,
                "payType":null,
                "currencyCode":"USD",
                "financialStatus":"paid",
                "fulfillmentStatus":null,
                "orderTotalPrice":"37.57",
                "cancelReason":null,
                "omOrderStatus":null,
                "omOrderStatusStr":null,
                "deliveryTime":null,
                "storeName":"synpos-shopify",
                "orderTypeStr":"线上订单",
                "orderStatusStr":"待发货",
                "countryName":"",
                "countryCode":null,
                "itemsTotalPrice":"33.98",
                "paymentAmount":"0",
                "platformTradeAmount":"0",
                "freightChargesAmount":"0.00",
                "sellerIncomeAmount":"37.5700",
                "tax":"0.0000",
                "sellerIncomeFreight":"0.00",
                "productTotal":"33.98",
                "goods":[
                    {
                        "id":"1584815588773310466",
                        "platOrderId":"5147534131517",
                        "storeCode":"shopify_0897",
                        "productId":"7965113745725",
                        "productImgUrl":null,
                        "sku":null,
                        "productName":null,
                        "price":"16.99",
                        "quantity":1,
                        "tenantId":"000000",
                        "skuId":"12581846286653",
                        "title":"Winter Thicken Warm Hooded Jacket For Toddler Boys Girls - Orange / 6-7Years / Buy 1",
                        "skuName":"ZM2156O130-888",
                        "skuUrl":""
                    },
                    {
                        "id":"1584815588781699073",
                        "platOrderId":"5147534131517",
                        "storeCode":"shopify_0897",
                        "productId":"7965113745725",
                        "productImgUrl":null,
                        "sku":null,
                        "productName":null,
                        "price":"16.99",
                        "quantity":1,
                        "tenantId":"000000",
                        "skuId":"12581846319421",
                        "title":"Winter Thicken Warm Hooded Jacket For Toddler Boys Girls - Red / 6-7Years / Buy 1",
                        "skuName":"ZM2156R130-888",
                        "skuUrl":""
                    }
                ]
            }
        ],
        "total":1,
        "size":10,
        "current":1,
        "orders":[

        ],
        "optimizeCountSql":true,
        "hitCount":false,
        "searchCount":true,
        "pages":1
    },
    "msg":"操作成功",
    "msgDetail":null,
    "attachedMap":{
        "traceId":"0af40292166668791353142711"
    }
}
```