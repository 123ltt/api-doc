# 解析SKU

> 作者：1017632646@qq.com

## 简要描述

- 解析SKU接口

## 请求URL
- ` /orderGood/analyzeSku `
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|pmsSku |是  |string |商品sku   |

## 返回示例 

``` 
  {
    "error_code": 0,
    "data": {
      "uid": "1",
      "username": "12154545",
      "name": "吴系挂",
      "groupid": 2 ,
      "reg_time": "1436864169",
      "last_login_time": "0",
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|pmsSku |string   |SKU编码 |
|productsName |string   |商品名称 |
|productPicUrl |string   |商品图片 |
|skuCost |decimal   |成本价 |
|grossWeight |string   |打包重量 |
|stock |int   |库存 |
|developLeadUserId |long   |开发责任人id |

## 备注 

- 更多返回错误代码请看首页的错误代码描述