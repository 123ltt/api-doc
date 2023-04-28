# 获取sku信息

> 作者：liben

## 简要描述

- 获取sku信息

## 请求URL
- ` /pms/api/getSkuInfo `

内部导入：OmsClient.class
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sellerSkus |是  |array(string) |skus   |
|storeCode |是  |string |店铺code   |
|platformCode |是  |string |平台code   |

## 请求示例 

``` 
{
    "sellerSkus": [
        "896w-48wq-893qw","896w-48wq-893qw11"
    ],
    "storeCode": "1111",
    "platformCode": "AMAZON"
}
```

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "pmsSku": "skulist-1",
            "title": "skulist-1",
            "imageFirst": "https://saas2-dev.oss-cn-shenzhen.aliyuncs.com/null/product_img/20220512/8896f3ef3176f37b89feb5738025d765.jpg",
            "weight": "0",
            "cost": "1",
            "sellerSku": "896w-48wq-893qw",
            "platformCode": "AMAZON",
            "storeCode": "1111"
        },
        {
            "pmsSku": "spu-000010-2",
            "title": "test添加SPU-2",
            "imageFirst": "",
            "weight": "0",
            "cost": "10",
            "sellerSku": "896w-48wq-893qw11",
            "platformCode": "AMAZON",
            "storeCode": "1111"
        }
    ],
    "msg": "操作成功",
    "msgDetail": "",
    "attachedMap": {}
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|groupid |int   |用户组id，1：超级管理员；2：普通用户  |

## 备注 

- 更多返回错误代码请看首页的错误代码描述