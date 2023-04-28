# 常量API

> 作者：yangruibo

## 简要描述

- 常量接口

## `可用常量键列表`

|常量键|描述|
|:----    |:-------    |
|listingUpdateType    |Listing 日志更新类型     |
|listingOptType    |Listing 日志操作类型     |
|listingType    |Listing 类型     |
|saleType    |Listing 销售类型     |
|listingStatus    |Listing 状态     |
|queryKeywordType    |Listing 查询关键类型     |
|shippingItemType    |Listing 运输项类型     |
|businessPolicyReturnCostPaid|Policy 退货模板运费承担类型|
|businessPolicyReturnType|Policy 退货模板退款方式类型|
|businessPolicyType|Policy 政策模板类型|
|businessPolicyReturnDays|Policy 退货模板退款天数类型|
|businessPolicyReturnAccepted|Policy 退货模板退款是否支持退款类型|
|businessPolicyShippingType|Policy 运输政策模板类型|
|shippingItemType|Listing 运输项类型|

## 请求URL
- ` /constants `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
| |  | |   |

## 返回示例 

``` 
{
  "code": 200,
  "success": true,
  "data": {
    "constants": {
      "shippingItemType": {
        "ShippingCarrierDetails": "Shipping Carrier",
        "ShippingLocationDetails": "Shipping Location",
        "CountryDetails": "Country"
      },
      "queryKeywordType": {
        "product": "SKU",
        "item": "ItemID",
        "plat": "平台SKU",
        "title": "标题"
      },
      "listingUpdateType": {
        "other": "其他",
        "price": "价格",
        "title": "标题",
        "stock": "库存"
      },
      "saleType": {
        "1": "固定价",
        "2": "拍卖价",
        "3": "拍卖价(Chinese)"
      },
      "businessPolicyReturnDays": {
        "Days_14": "14 Days",
        "Days_30": "30 Days",
        "Days_60": "60 Days"
      },
      "listingStatus": {
        "1": "草稿",
        "2": "待审核",
        "3": "待上传",
        "4": "上传失败",
        "5": "上传成功",
        "6": "待更新",
        "7": "更新失败",
        "8": "匹配失败",
        "9": "待取消",
        "10": "草稿"
      },
      "listingType": {
        "Combo": "Combo",
        "Normal": "Normal",
        "Variation": "Variation"
      },
      "businessPolicyType": {
        "PAYMENT": "支付",
        "BUYER_REQUIREMENTS": "买家要求",
        "SHIPPING": "运输",
        "RETURN_POLICY": "退货"
      },
      "businessPolicyReturnType": {
        "MoneyBack": "Money Back",
        "MoneyBackOrReplacement": "Money Back Or Replacement",
        "MoneyBackOrExchange": "Money Back Or Exchange"
      },
      "listingOptType": {
        "other": "其他",
        "update": "更新",
        "create": "创建",
        "UP": "刊登",
        "down": "下架"
      },
      "businessPolicyReturnCostPaid": {
        "Buyer": "买家承担",
        "Seller": "卖家承担"
      },
      "businessPolicyReturnAccepted": {
        "ReturnsNotAccepted": "否",
        "ReturnsAccepted": "是"
      }
    }
  },
  "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|-----|-----|-----|
|constants |JSON   |常量集 |
|listingUpdateType |JSON   |Listing 更新常量集 |

## 备注 

- 更多返回错误代码请看首页的错误代码描述