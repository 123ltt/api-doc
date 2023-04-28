# 缺货列表SKU采购信息

> 作者：liben

## 简要描述

- 缺货列表SKU采购信息

## 请求URL
- ` /packageMain/findPurchaseInfo4Nw `
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|nwSku |是  |string |牛蛙SKU   |

## 返回示例 

``` 
{
    "ack": 1,
    "data": [
        {
            "purchase_order": "20211203肖淑芳2011",
            "purchase_user": "肖淑芳05557",
            "purchase_qty": "120",
            "status": "已报账",
            "paid_type": "预付款",
            "logistics_code": ",518972892889,",
            "apply_time": "2021-12-03 17:49:40",
            "paid_time": "2021-12-04 10:35:07",
            "expected_time": "",
            "sign_time": "2021-12-05 14:46:31",
            "ruku_time": "2021-12-05 15:04:16",
            "note": "WU\r\n20211201ZHD刘嘉文15                                                                     "
        },
        {
            "purchase_order": "20211102姚旭丽1389清溪R仓",
            "purchase_user": "姚旭丽06698",
            "purchase_qty": "5",
            "status": "已报账",
            "paid_type": "预付款",
            "logistics_code": ",518974811273,",
            "apply_time": "2021-11-02 16:11:54",
            "paid_time": "2021-11-02 17:42:07",
            "expected_time": "",
            "sign_time": "",
            "ruku_time": "2021-11-19 19:08:15",
            "note": "       8                                                                                                                 "
        },
        {
            "purchase_order": "20211012雷雨晴704清溪R仓",
            "purchase_user": "雷雨晴04705",
            "purchase_qty": "50",
            "status": "已报账",
            "paid_type": "预付款",
            "logistics_code": ",518978887585,",
            "apply_time": "2021-10-12 11:57:36",
            "paid_time": "2021-10-12 12:38:45",
            "expected_time": "",
            "sign_time": "2021-10-16 10:04:12",
            "ruku_time": "2021-10-16 18:54:27",
            "note": "8                                                                               "
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明 
参考牛蛙返回接口：
http://10.10.30.182:3000/project/255/interface/api/17671

## 备注 

- 更多返回错误代码请看首页的错误代码描述