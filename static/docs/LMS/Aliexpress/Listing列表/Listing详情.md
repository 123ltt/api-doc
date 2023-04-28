# Listing详情

> 作者：xuxiaofei

## 作者
- 邢振
    
## 简要描述

- 获取listing详情

## 请求URL
- ` http://xx.com/aliexpresslisting/detail `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是  |number |listing主键ID   |


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«AliexpressListingVO对象»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|account|true|string |店铺名|
|accountCode|true|string |店铺名CODE|
|listingType|true|string |listing类型|
|listingStatus|true|number |listing状态|
|productSpu|true|string |产品spu|
|subject|true|string |商品标题|
|detail|true|string |商品描述|
|addUnit|false|number |计重时每增加件数|
|addWeight|false|string |计重时对应增加的重量,保留三位小数,公斤|
|baseUnit|false|number |计重时购买几件以内不增加运费|
|bulkDiscount|false|number |批发折扣。扩大100倍，存整数。取值范围:1-99。注意：这是折扣，不是打折率。 如,打68折,则存32。批发最小数量和批发折扣需同时有值或无值。|
|bulkOrder|false|number |批发最小数量|
|categoryId|true|number |类目ID|
|categoryName|true|string |类目名|
|deliveryTime|true|number |备货期,取值范围:1-60;单位:天|
|freightTemplateId|true|number |运费模版ID|
|detailTemplateName | false | string | 产品信息模板名 | 
|grossWeight|true|string|商品毛重,保留三位小数,公斤|
|groupId|false|number |分组ID|
|groupIds|false|array |分组列表|
|imageUrls|true|string |主图列表 ;分隔|
|isPackSell|true|boolean |是否支持是自定义计重|
|lotNum|true|number |每包件数|
|packageLength|true|number |长|
|packageWidth|true|number |宽|
|packageHeight|true|number |高|
|productPrice|true|number |单品价格|
|productUnit|true|number |商品单位|
|promiseTemplateId|true|number |服务模版|
|reduceStrategy|true|string |库存扣减策略|
|packageType|true|boolean |打包销售: true 非打包销售:false|
|carAttrTemplateId|false|number|车型库模板id|
|nationQuoteTemplateId|false|number|区域调价模板id|
|nationQuoteCountry|false|array|区域调价国家|
|isNewCalculateWay|false|boolean|价格计算方式(true:新, false:旧)|
|perKgFreightFee|false|number|每公斤运费|
|registeredFee|false|number|挂号费|
|marketImages|false|array|营销图
|&emsp;&emsp; url|false|string |营销图片URL|
|&emsp;&emsp; imageType|false|number |	1：代表长图，大小为750×1000; 2：代表方图，大小为800×800|
|property|true|array |商品属性信息|
|&emsp;&emsp; attrNameId|false|number |属性名ID。不可填入sku属性。 自定义属性名时,该项不填.|
|&emsp;&emsp; attrValueId|false|number |属性值ID 不可填入sku属性。 自定义属性值时,该项不填|
|&emsp;&emsp; attrName|false|string |自定义属性名属性名。 自定义属性名时,该项必填.|
|&emsp;&emsp; attrValue|true|string |自定义属性值。自定义属性名时,该项必填。 当自定义属性值内容为区间情况时，建议格式2 - 5 kg。(注意，数字'-'单位三者间是要加空格的！)|
|&emsp;&emsp; attrValueUnit|false|string |自定义属性值单位|
|&emsp;&emsp; attrValueStart|false|string |自定义属性值的开始端|
|&emsp;&emsp; attrValueEnd|false|string |自定义属性值的结束端|
|
|variants|true|array |sku变体信息|
|&emsp;&emsp; skuId|true|string |skuId|
|&emsp;&emsp; productSku|true|string |产品SKU|
|&emsp;&emsp; sellerSku|true|string |平台SKU|
|&emsp;&emsp; warehouseId|true|number |仓库ID|
|&emsp;&emsp; ipmSkuStock|true|number |库存|
|&emsp;&emsp; skuPrice|true|number |价格|
|&emsp;&emsp; skuDiscountPrice|false|number |促销价|
|&emsp;&emsp; skuProperty|false|array |sku属性|
|&emsp;&emsp;&emsp;&emsp; skuPropertyId|true|number |属性Id|
|&emsp;&emsp;&emsp;&emsp; propertyValueId|true|number |属性值Id|
|&emsp;&emsp;&emsp;&emsp; skuImage|false|string |自定义图片|
|&emsp;propertyValueDefinitionName|false|string |属性自定义名称|
|msg|返回消息|string||
|success|是否成功|boolean||

**响应示例**:
```javascript
{
    "code": 200,
    "success": true,
    "data": {
        "id": "1345192019629039618",
        "createUser": "1065",
        "createDept": null,
        "createTime": "2020-12-30 17:34:39",
        "updateUser": null,
        "updateTime": null,
        "status": null,
        "isDeleted": null,
        "account": "cn1520259440ikxx",
        "accountCode": null,
        "itemId": 1005001972515683,
        "productSpu": "RYSYMBX",
        "listingType": null,
        "listingStatus": null,
        "subject": "50Pcs Dog Bone Cutouts Wooden Blank Crafts Decor For Arts & Crafts Projects Ornaments Wedding Table Scatter Decor",
        "detail": "&lt;div class=\"-image\">&lt;p class=\"detail-desc-decorate-content\" style=\"text-overflow: ellipsis;font-family: 'OpenSans';color:'#000';word-wrap: break-word;white-space: pre-wrap;font-weight: 300;font-size: 14px;line-height: 20px;color: #000;margin-bottom: 12px;\">Features:<br>\r\n<br>\r\n<br>\r\n<br>\r\n1. Ordinary wooden ornaments can be used for home decoration, party decoration, Valentine's Day decoration, wedding decoration. Natural wooden crafts. The logs of this product are laser cut and carved into the shape of a love clip and a special ruler for the plot person, which is highly decorative.<br>\r\n<br>\r\n<br>\r\n<br>\r\n2. They can be used as decorations for Children&rsquo;s Day or children&rsquo;s birthday parties, DIY crafts for family gatherings, decorations in every part of the house, handmade DIY crafts decorations, etc.<br>\r\n<br>\r\n<br>\r\n<br>\r\n3. We have marked the size on the picture. The 50-piece suit can be DIY style according to your needs.<br>\r\n<br>\r\n<br>\r\n<br>\r\n4. The wooden pendant material can be exported, and the edges are smooth and burr-free. Each slice is carefully selected, polished and polished, and it is safe enough to use.<br>\r\n<br>\r\n<br>\r\n<br>\r\n5. The number of sets is sufficient, enough to decorate tables and parties, and can be designed according to different DIY crafts. You can also decorate your own walls and love photo walls, and design styles according to personal preferences.<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\nProduct Description:<br>\r\n<br>\r\n<br>\r\n<br>\r\nName: Wooden bone decor set<br>\r\n<br>\r\n<br>\r\n<br>\r\nName: Pendant<br>\r\n<br>\r\n<br>\r\n<br>\r\nPattern: Bones<br>\r\n<br>\r\n<br>\r\n<br>\r\nSize: 3*1.4cm/1.18"*0.55"<br>\r\n<br>\r\n<br>\r\n<br>\r\nThickness: 0.3cm/0.12"<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\nPackage Include:<br>\r\n<br>\r\n<br>\r\n<br>\r\n1*Wooden bone decor set<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\nNotes:<br>\r\n<br>\r\n<br>\r\n<br>\r\n1. Please allow 1-3 cm difference due to manual measurement and 3-5 g for the difference between different colors.<br>\r\n<br>\r\n<br>\r\n<br>\r\n2. Due to the screen difference, the color may be a little different from what you expect, please allow it.<br>\r\n<br>\r\n<br>\r\n<br>\r\n3. 1.00cm=0.39"&lt;/p>&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/H44b7a90dc0ab4f788dfc1a68ca875cdbc.jpg\" />&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/Hd3b9f1e452d84acba765ff97f9fbe1a3z.jpg\" />&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/H9c9db39c712e4525ac7957e52ae1da97v.jpg\" />&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/Hbcc1d6edb9134b7b90feace148b58c69d.jpg\" />&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/H761d47f04d0f4a0e9eb2431bca4dae58m.jpg\" />&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/H5d4f2575ccc8441ab99fdf57d8fca189F.jpg\" />&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/H3d860bcaa2a544ddaf667a591aae8499L.jpg\" />&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/H27e7d333885d46e8b4aa933b7dcd35bbD.jpg\" />&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/H0371e71611194f7b8abfd397e9ac3c3ek.jpg\" />&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/H26e31d2beacb4f1ab1f07ba4fd2a021ew.jpg\" />&lt;img class=\"detail-desc-decorate-image\" src=\"//ae01.alicdn.com/kf/H14041bcace3c4721ac5d6a6a78b14314t.jpg\" />&lt;/div><br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n ",
        "addUnit": null,
        "addWeight": null,
        "baseUnit": null,
        "bulkDiscount": null,
        "bulkOrder": null,
        "categoryId": 200297146,
        "categoryName": null,
        "currencyCode": null,
        "deliveryTime": 4,
        "freightTemplateId": 713252226,
		"detailTemplateName": "a",
        "grossWeight": "0.050",
        "groupId": 510838971,
        "groupIds": null,
        "imageUrls": "http://ae01.alicdn.com/kf/Ha7d229687b7b4bff9df29c8227f4979f6.jpg;http://ae01.alicdn.com/kf/H7cb2581485144daf906c5e098f759a89I.jpg;http://ae01.alicdn.com/kf/Hb94218b7e7d540238b16517f5dbab317o.jpg;http://ae01.alicdn.com/kf/Hfe27af84a53c401284b5fba4877e8b94l.jpg;http://ae01.alicdn.com/kf/Hf71e374773594526ba046545050b7549P.jpg;http://ae01.alicdn.com/kf/H6f00e17b44474b0790ef47d598629e34d.jpg",
        "isPackSell": null,
        "lotNum": 50,
        "packageLength": 10,
        "packageWidth": 10,
        "packageHeight": 2,
        "productPrice": null,
        "productStatusType": null,
        "productUnit": 100000015,
        "promiseTemplateId": 0,
        "reduceStrategy": "payment_success_deduct",
        "sizechartId": null,
        "wsOfflineDate": null,
        "wsDisplay": null,
        "packageType": true,
        "gmtCreate": null,
        "gmtModified": null,
        "locale": null,
        "displayImageUrl": null,
        "mobileDetail": null,
        "ownerMemberId": null,
        "ownerMemberSeq": null,
        "productMinPrice": null,
        "productMaxPrice": null,
        "src": null,
        "detailJson": null,
        "multimediaJson": null,
        "propertyJson": "[{\"attrName\":\"Brand Name\",\"attrNameId\":2,\"attrValue\":\"None\",\"attrValueId\":201512802},{\"attrName\":\"Origin\",\"attrNameId\":219,\"attrValue\":\"CN(Origin)\",\"attrValueId\":9441741844},{\"attrName\":\"Product Type\",\"attrNameId\":1238,\"attrValue\":\"Unfinished Wood\",\"attrValueId\":202966873}]",
        "quoteJson": "null",
        "carAttrTemplateId": null,
        "nationQuoteTemplateId": null,
        "nationQuoteCountryJson": null,
        "nationQuoteCountry": null,
        "subjectJson": null,
        "marketImageJson": "null",
        "costPrice": null,
        "price": null,
        "stock": null,
        "developUser": 1585,
        "saleUser": null,
        "isOnline": null,
        "isAliexpressUpload": false,
        "timedUploadTime": null,
        "upOnlineTime": null,
        "auditTime": null,
        "isNewCalculateWay": true,
        "perKgFreightFee": null,
        "registeredFee": null,
        "variantNum": null,
        "productSku": null,
        "developUserName": null,
        "saleUserName": null,
        "createUserName": null,
		"aliexpressListingVariantVOList": [
            {
                "id": "1345192019796811777",
                "createUser": null,
                "createDept": null,
                "createTime": null,
                "updateUser": null,
                "updateTime": null,
                "status": null,
                "isDeleted": null,
                "aliexpressListingId": "1345192019629039618",
                "itemId": 1005001972515683,
                "skuId": "14:200004889;200007763:201336100",
                "productSku": "RYSYMBX01",
                "sellerSku": "RG0479A",
                "warehouseId": null,
                "currencyCode": null,
                "ipmSkuStock": 999,
                "skuStock": null,
                "skuDisplayImg": "http://ae01.alicdn.com/kf/H1d9752e8a8c54ef99070ed44de6452322.jpg",
                "barcode": null,
                "skuPrice": "2.56",
                "skuDiscountPrice": null,
                "costPrice": null,
                "discountPriceJson": null,
                "propertyJson": "[{\"propertyValueDefinitionName\":\"A\",\"propertyValueId\":200004889,\"skuImage\":\"http://ae01.alicdn.com/kf/H1d9752e8a8c54ef99070ed44de6452322.jpg\",\"skuPropertyId\":14},{\"propertyValueId\":201336100,\"skuPropertyId\":200007763}]"
            },
            {
                "id": "1345192019813588994",
                "createUser": null,
                "createDept": null,
                "createTime": null,
                "updateUser": null,
                "updateTime": null,
                "status": null,
                "isDeleted": null,
                "aliexpressListingId": "1345192019629039618",
                "itemId": 1005001972515683,
                "skuId": "14:200004889;200007763:201336106",
                "productSku": "RYSYMBX01",
                "sellerSku": "RG0479A-148",
                "warehouseId": null,
                "currencyCode": null,
                "ipmSkuStock": 999,
                "skuStock": null,
                "skuDisplayImg": "http://ae01.alicdn.com/kf/H1d9752e8a8c54ef99070ed44de6452322.jpg",
                "barcode": null,
                "skuPrice": "5.36",
                "skuDiscountPrice": null,
                "costPrice": null,
                "discountPriceJson": null,
                "propertyJson": "[{\"propertyValueDefinitionName\":\"A\",\"propertyValueId\":200004889,\"skuImage\":\"http://ae01.alicdn.com/kf/H1d9752e8a8c54ef99070ed44de6452322.jpg\",\"skuPropertyId\":14},{\"propertyValueId\":201336106,\"skuPropertyId\":200007763}]"
            }
        ]
    },
    "msg": "操作成功"
}
```