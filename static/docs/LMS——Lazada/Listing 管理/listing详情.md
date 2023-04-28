# listing详情

> 作者：1638648874@qq.com

**作者：**
- 吴新

**简要描述：**

- 获取listing内容详情

**请求URL：**
- ` /lazada/spus/detail `

**请求方式**
- POST

**参数：**

|参数名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |必选  |number |主键id |

 **返回示例**

```
{
    "code": 200, 
    "success": true, 
    "data": {
        "id": "1552902803899756545", 
        "createUser": 12168, 
        "createDept": "2811", 
        "createTime": "2022-07-29 14:24:15", 
        "updateUser": null, 
        "updateTime": null, 
        "status": null, 
        "isDeleted": null, 
        "itemId": null, 
        "spu": "TBBE2122", 
        "categoryId": 4375, 
        "categoryPath": "Women's Shoes and Clothing/Women Clothing/Tops/T-Shirts", 
        "name": "Dreamflyhigh Woman's Tops Temperament Knitted Short-Sleeved T-Shirt Stripe Top", 
        "storeName": "Dreamflyhigh", 
        "storeCode": "lazada_09IR", 
        "site": "TH,MY,PH,VN,SG", 
        "isLazadaUpload": null, 
        "developer": null, 
        "saleUser": null, 
        "listingStatus": 1, 
        "listingType": "Variation", 
        "variantCount": null, 
        "developerName": null, 
        "saleUserName": null, 
        "createUserName": null, 
        "sellerSku": "ASIU6Z5Y-TBBE2122", 
        "masterImage": null, 
        "errorMsg": null, 
        "packageHeight": "2.00", 
        "packageLength": "26.00", 
        "packageWidth": "15.00", 
        "packageWeight": "0.16", 
        "packageContent": " Package includes: 1 * Top", 
		 "spuMainImage": "https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (1).jpg", 
         "spuAllImage": "[\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (1).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (1).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (2).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (3).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (4).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (5).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (6).jpg\"]", 
        "skus": [
            {
                "id": "1552902803945893890", 
                "createUser": null, 
                "createDept": null, 
                "createTime": null, 
                "updateUser": null, 
                "updateTime": null, 
                "status": null, 
                "isDeleted": null, 
                "spuId": "1552902803899756545", 
                "skuId": null, 
                "sellerSku": "ASIU6Z5Z-TBBE21224VC", 
                "shopSku": null, 
                "specifications": "{\"color_family\":\"Black\",\"size\":\"One size\"}", 
                "price": "248.00", 
                "quantity": 6000, 
                "masterImage": "https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (1).jpg", 
                "allImages": "[\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (1).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122B (1).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122B (2).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122B (3).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122B (4).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122B (5).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122B (6).jpg\"]", 
                "productStatus": 0, 
                "availablity": true, 
                "qcStatus": null, 
                "productSku": "TBBE21224VC", 
                "viewUrl": null, 
                "combineSku": null, 
                "specialFromDate": "2022-07-29 14:24:15", 
                "specialToDate": "2101-12-31 00:00:00", 
                "taxClass": "default", 
                "specialPrice": "155.00", 
                "cnRetailPrice": "0.96", 
                "cnSalesPrice": "0.80", 
                "myRetailPrice": "26.58", 
                "mySalesPrice": "16.61", 
                "sgRetailPrice": "12.16", 
                "sgSalesPrice": "7.60", 
                "thRetailPrice": "248.00", 
                "thSalesPrice": "155.00", 
                "phRetailPrice": "510.00", 
                "phSalesPrice": "319.00", 
                "idRetailPrice": null, 
                "idSalesPrice": null, 
                "vnRetailPrice": "143000.00", 
                "vnSalesPrice": "89000.00", 
                "profitRate": "0.15", 
                "myProfitRate": "0.15", 
                "sgProfitRate": "0.15", 
                "thProfitRate": "0.15", 
                "phProfitRate": "0.15", 
                "idProfitRate": null, 
                "vnProfitRate": "0.15", 
                "productCost": "12.80", 
                "productWeight": "0.16", 
                "shippingFee": "5.85", 
                "isInfringe": null, 
                "isGbcInfringe": null, 
                "colorThumbnail": "https://image.izehui.com/PIC_800/KA/KA4122/KA4122B (7).jpg"
            }, 
            {
                "id": "1552902803950088194", 
                "createUser": null, 
                "createDept": null, 
                "createTime": null, 
                "updateUser": null, 
                "updateTime": null, 
                "status": null, 
                "isDeleted": null, 
                "spuId": "1552902803899756545", 
                "skuId": null, 
                "sellerSku": "ASIU6Z60-TBBE21224VD", 
                "shopSku": null, 
                "specifications": "{\"color_family\":\"Green\",\"size\":\"One size\"}", 
                "price": "248.00", 
                "quantity": 6000, 
                "masterImage": "https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (1).jpg", 
                "allImages": "[\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (1).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122G (1).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122G (2).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122G (3).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122G (4).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122G (5).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (4).jpg\"]", 
                "productStatus": 0, 
                "availablity": true, 
                "qcStatus": null, 
                "productSku": "TBBE21224VD", 
                "viewUrl": null, 
                "combineSku": null, 
                "specialFromDate": "2022-07-29 14:24:15", 
                "specialToDate": "2101-12-31 00:00:00", 
                "taxClass": "default", 
                "specialPrice": "155.00", 
                "cnRetailPrice": "0.96", 
                "cnSalesPrice": "0.80", 
                "myRetailPrice": "26.58", 
                "mySalesPrice": "16.61", 
                "sgRetailPrice": "12.16", 
                "sgSalesPrice": "7.60", 
                "thRetailPrice": "248.00", 
                "thSalesPrice": "155.00", 
                "phRetailPrice": "510.00", 
                "phSalesPrice": "319.00", 
                "idRetailPrice": null, 
                "idSalesPrice": null, 
                "vnRetailPrice": "143000.00", 
                "vnSalesPrice": "89000.00", 
                "profitRate": "0.15", 
                "myProfitRate": "0.15", 
                "sgProfitRate": "0.15", 
                "thProfitRate": "0.15", 
                "phProfitRate": "0.15", 
                "idProfitRate": null, 
                "vnProfitRate": "0.15", 
                "productCost": "12.80", 
                "productWeight": "0.16", 
                "shippingFee": "5.85", 
                "isInfringe": null, 
                "isGbcInfringe": null, 
                "colorThumbnail": "https://image.izehui.com/PIC_800/KA/KA4122/KA4122G (6).jpg"
            }, 
            {
                "id": "1552902803950088195", 
                "createUser": null, 
                "createDept": null, 
                "createTime": null, 
                "updateUser": null, 
                "updateTime": null, 
                "status": null, 
                "isDeleted": null, 
                "spuId": "1552902803899756545", 
                "skuId": null, 
                "sellerSku": "ASIU6Z61-TBBE21224VE", 
                "shopSku": null, 
                "specifications": "{\"color_family\":\"Red\",\"size\":\"One size\"}", 
                "price": "248.00", 
                "quantity": 6000, 
                "masterImage": "https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (1).jpg", 
                "allImages": "[\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (1).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (1).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (2).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (3).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (4).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (5).jpg\",\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (6).jpg\"]", 
                "productStatus": 0, 
                "availablity": true, 
                "qcStatus": null, 
                "productSku": "TBBE21224VE", 
                "viewUrl": null, 
                "combineSku": null, 
                "specialFromDate": "2022-07-29 14:24:15", 
                "specialToDate": "2101-12-31 00:00:00", 
                "taxClass": "default", 
                "specialPrice": "155.00", 
                "cnRetailPrice": "0.96", 
                "cnSalesPrice": "0.80", 
                "myRetailPrice": "26.58", 
                "mySalesPrice": "16.61", 
                "sgRetailPrice": "12.16", 
                "sgSalesPrice": "7.60", 
                "thRetailPrice": "248.00", 
                "thSalesPrice": "155.00", 
                "phRetailPrice": "510.00", 
                "phSalesPrice": "319.00", 
                "idRetailPrice": null, 
                "idSalesPrice": null, 
                "vnRetailPrice": "143000.00", 
                "vnSalesPrice": "89000.00", 
                "profitRate": "0.15", 
                "myProfitRate": "0.15", 
                "sgProfitRate": "0.15", 
                "thProfitRate": "0.15", 
                "phProfitRate": "0.15", 
                "idProfitRate": null, 
                "vnProfitRate": "0.15", 
                "productCost": "12.80", 
                "productWeight": "0.16", 
                "shippingFee": "5.85", 
                "isInfringe": null, 
                "isGbcInfringe": null, 
                "colorThumbnail": "https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (7).jpg"
            }
        ], 
        "detail": {
            "id": "1552902803899756545", 
            "createUser": null, 
            "createDept": null, 
            "createTime": null, 
            "updateUser": null, 
            "updateTime": null, 
            "status": null, 
            "isDeleted": null, 
            "spuId": "1552902803899756545", 
            "shortDescription": "&lt;ul>&lt;li>Features:&lt;/li>&lt;li>1. Korean version, simple casual short-sleeved tops.&lt;/li>&lt;li>2. Suitable for leisure, shopping, party, etc.&lt;/li>&lt;li>3. High-quality soft fabric, that fits the body curve, shows the perfect body.&lt;/li>&lt;li>4. Simple, fashionable, temperament, suitable for a variety of occasions, can be used with a variety of skinny pants, jeans, shorts, skirts, and jeans.&lt;/li>&lt;li>5. Exquisite gift. A surprise for your lover, family, or friends. The best gift for weddings, Christmas, Valentine's Day, Mother's Day, Thanksgiving, anniversary, birthday, etc.&lt;/li>&lt;/ul>", 
            "description": "&lt;p>Specification:&lt;br/>
Material:Acrylic&lt;br/>
Clothing Length:Short&lt;br/>
Collar:Turn-down Collar&lt;br/>
Fabric Type:Knitted&lt;br/>
Sleeve Length(cm):Short&lt;br/>
Pattern Type:striped&lt;br/>
Sleeve Style:Regular&lt;br/>
Model Number:regular&lt;br/>
Style:Casual&lt;br/>
Fit:Fits true to size, take your normal size&lt;br/>
Place Of Origin:China (Mainland)&lt;br/>
Season:Summer&lt;br/>
Pattern Them:Other&lt;br/>
Fit Type:Regular&lt;br/>
Item Type:Tops&lt;br/>
Tops Type:Tees&lt;br/>
Gender:WOMEN&lt;br/>
&lt;br/>
Size----------------Bust--------------Sleeves---------Length&lt;br/>
One-size---64-92cm/25.1-36.2\"----17cm/6.6\"----48cm/18.8\"&lt;br/>
&lt;br/>&lt;br/>
&lt;br/>
Package includes:&lt;br/>
1 * Top&lt;br/>
&lt;br/>
Note: &lt;br/>
1. Due to the light and screen difference, the item's color may be slightly different from the pictures.&lt;br/>
2. Please allow 1-2 cm differences due to manual measurement.&lt;br/>
 &lt;/p>&lt;p>&lt;img src=\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122B (3).jpg\"/>&lt;img src=\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122G (3).jpg\"/>&lt;img src=\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122R (5).jpg\"/>&lt;img src=\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (3).jpg\"/>&lt;img src=\"https://image.izehui.com/PIC_800/KA/KA4122/KA4122_H (4).jpg\"/>&lt;br/>&lt;/p>", 
            "attributes": "{\"brand\":\"No Brand\",\"warranty_type\":\"No Warranty\",\"Hazmat\":[\"None\"],\"fa_create_year\":\"2021\",\"fa_pattern\":\"Stripe\",\"clothing_material\":\"cotton\",\"sleeves\":\"Short Sleeve\",\"occasion\":\"Casual\",\"womens_trend\":[\"Basic\"]}"
        }, 
        "price": null, 
        "quantity": null, 
        "productCost": null, 
        "specialPrice": null, 
        "timedUploadTime": null, 
        "upOnlineTime": null, 
        "isAutoPublish": null
    }, 
    "msg": "操作成功", 
    "msgDetail": null, 
    "attachedMap": {
        "traceId": "ac1e04c8165907724971251009", 
        "zhkj-req-id": "20220729144729171_s2fo"
    }
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|----- |
|createDept |integer  |创建部门
|createTime |string  |创建时间
|createUser |integer  |创建人
|developer |integer  |开发人员
|id |integer  |主键id
|isLazadaUpload |boolean  |是否后台刊登
|isDeleted |integer  |是否已删除
|itemId |string  |Item-Id
|listingType |string  |商品类型:Normal、Variation、Combo
|categoryId |integer  |分类ID
|categoryPath |integer  |分类全路径  "/" 分隔
|listingStatus |integer  |产品状态
|site |string  |站点
|upOnlineTime |string(  |刊登时间
|saleUser |integer  |负责人(销售员)
|spu |string  |商品SPU，在非vary-listing情况下，该字段可为空
|storeCode |string  |店铺编码
|storeName |string  |店铺名称
|name |string  |标题
|updateTime |string  |更新时间
|updateUser |integer  |更新人
|spuMainImage |string  |商品SPU主图，主副图最多8张
|spuAllImage |string  |商品SPU所有图片，包含主图
|listingSkus.spuId |integer  | spuId
|listingSkus.skuId |integer  | skuId
|listingSkus.shopSku |string  | shopSku
|listingSkus.sellerSku |string  | sellerSku
|listingSkus.specifications |string  |商品规格
|listingSkus.price |double  |价格
|listingSkus.quantity |integer  |库存
|listingSkus.productStatus |integer  |产品状态
|listingSkus.id |integer  |主键ID
|listingSkus.masterImage |string  |商品主图，主副图最多8张
|listingSkus.allImages |string  |商品所有图片，包含主图
|listingSkus.packageHeight |string  |打包高度
|listingSkus.packageLength |string  |打包长度
|listingSkus.packageWidth |string  |打包宽度
|listingSkus.packageWeight |string  |打包重量
|listingSkus.packageContent |string  |打包内容
|listingSkus.qcStatus |string  |产品QC状态
|listingDetail.id |integer  |主键ID
|listingDetail.spuId |integer  | spu主键ID
|listingDetail.shortDescription |string  |商品亮点
|listingDetail.description |string  |商品描述
|listingDetail.attributes |string  |商品属性


 **备注**