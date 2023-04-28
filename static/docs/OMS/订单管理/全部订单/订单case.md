# 订单case

> 作者：chenpan

## 简要描述

- 订单case

## 请求URL
- `/case/getOrder `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|omOrderId |是  |string |oms订单号   |
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": {
        "omOrderId": "SM2107061603000001",
        "platOrderId": "8134854178914681",
        "skuList": [
            {
                "pmsSku": "S5SEP3775SJ",
                "productQuantity": 5,
                "productSalePrice": "4.0500"
            }
        ],
        "typeList": [
            "差评",
            "中评",
            "退款",
            "重寄",
            "售后宝",
            "其他"
        ],
        "reason": [
            {
                "caseReasonList": [
                    "发货延迟",
                    "丢件",
                    "未收到货",
                    "运输时间长",
                    "运费高",
                    "尺寸超规定",
                    "重量超规定",
                    "损坏"
                ],
                "code": 1,
                "caseKey": "物流原因"
            },
            {
                "caseReasonList": [
                    "不工作",
                    "不能使用",
                    "不好用",
                    "不充电",
                    "少配件",
                    "脏污"
                ],
                "code": 2,
                "caseKey": "质量原因"
            },
            {
                "caseReasonList": [
                    "无理由退货",
                    "恶意投诉",
                    "黑名单",
                    "账号错误",
                    "地址错误",
                    "联系不到收件人"
                ],
                "code": 3,
                "caseKey": "消费者原因"
            },
            {
                "caseReasonList": [
                    "产品和listing内容不符",
                    "价格不合理",
                    "尺码不合理",
                    "买家信息处理不当",
                    "缺货",
                    "不会使用"
                ],
                "code": 4,
                "caseKey": "销售原因"
            },
            {
                "caseReasonList": [
                    "交期delay",
                    "未及时下单",
                    "缺货",
                    "产品不符合商家期望值"
                ],
                "code": 5,
                "caseKey": "采购原因"
            },
            {
                "caseReasonList": [
                    "与期望的效果不符",
                    "不喜欢"
                ],
                "code": 6,
                "caseKey": "开发原因"
            },
            {
                "caseReasonList": [
                    "发错货",
                    "少数量",
                    "少配件",
                    "包装问题",
                    "发霉",
                    "过期产品",
                    "条码错",
                    "多个条码",
                    "无条码"
                ],
                "code": 7,
                "caseKey": "仓库原因"
            },
            {
                "caseReasonList": [
                    "起火",
                    "燃烧",
                    "冒烟",
                    "烫伤",
                    "伤人",
                    "危险",
                    "不环保"
                ],
                "code": 8,
                "caseKey": "安规原因"
            },
            {
                "caseReasonList": [
                    "侵权"
                ],
                "code": 9,
                "caseKey": "侵权原因"
            },
            {
                "caseReasonList": [
                    "危险品",
                    "化学品",
                    "管制品",
                    "禁售品",
                    "被限制的"
                ],
                "code": 10,
                "caseKey": "违反平台规定"
            },
            {
                "caseReasonList": [
                    "地震",
                    "暴力",
                    "动乱",
                    "火灾",
                    "天气因素是不可避免的不属于不可抗拒因素"
                ],
                "code": 11,
                "caseKey": "不可抗拒因素"
            },
            {
                "caseReasonList": [],
                "code": 12,
                "caseKey": "其他原因"
            }
        ],
        "currencyList": [
            "AED",
            "ALL",
            "AOA",
            "ARS",
            "AUD",
            "BAM",
            "BGN",
            "BHD",
            "BND",
            "BOB",
            "BRL",
            "BWP",
            "BYN",
            "CAD",
            "CHF",
            "CLP",
            "CNY",
            "COP",
            "CZK",
            "DKK",
            "DZD",
            "EGP",
            "EUR",
            "GBP",
            "GHS",
            "GYD",
            "HKD",
            "HRK",
            "HUF",
            "IDR",
            "ILS",
            "INR",
            "IQD",
            "IRR",
            "ISK",
            "JOD",
            "JPY",
            "KES",
            "KRW",
            "KWD",
            "KZT",
            "LAK",
            "LBP",
            "LKR",
            "LYD",
            "MAD",
            "MDL",
            "MKD",
            "MMK",
            "MNT",
            "MOP",
            "MUR",
            "MVR",
            "MWK",
            "MXN",
            "MYR",
            "NGN",
            "NOK",
            "NPR",
            "NZD",
            "OMR",
            "PEN",
            "PHP",
            "PKR",
            "PLN",
            "PYG",
            "QAR",
            "RON",
            "Rp",
            "RSD",
            "RUB",
            "SAR",
            "SDG",
            "SDR",
            "SEK",
            "SGD",
            "SLL",
            "SRD",
            "SSP",
            "SYP",
            "THB",
            "TND",
            "TRY",
            "TWD",
            "TZS",
            "UAH",
            "UGX",
            "USD",
            "UYU",
            "UZS",
            "VEF",
            "VND",
            "XAF",
            "XOF",
            "YER",
            "ZAR",
            "ZMW",
            "BYR",
            "ECU",
            "BDT",
            "CDN",
            "RMB"
        ],
        "statusList": [
            "开始",
            "跟进",
            "退款",
            "重寄",
            "关闭"
        ],
        "refundTypeList": [
            "全额退款",
            "部分退款"
        ]
    },
    "msg": "操作成功",
    "attachedMap": {
        "traceId": "c0a832c4162917000081310083492"
    }
}
```