# IMS提供-获取仓库树

> 作者：yun527292121@163.com

## 简要描述
- ![](http://showdoc.zehui.local/server/index.php?s=/api/attachment/visitFile/sign/37176c06d45b61dd6e9bbf6f1623c54a&showdoc=.jpg)

## 请求URL
- `http://dev-ims-service.zehui.local/client/warehouse/getWarehouseChild`

## 请求方式
- POST 

## 请求示例 

``` 
{
}
```

## 请求参数 data

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |

## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "warehouseCode": "MGXN001",
            "warehouseName": "美国虚拟仓",
			"tag":["VIRUTAL"]
            "warehouseChildVOList": [
                {
                    "warehouseCode": "CK0001",
                    "warehouseName": "泽汇坂田仓",
                    "warehouseChildVOList": [],
					 "tag":["VIRUTAL"],
                }
            ]
        },
        {
            "warehouseId": "1356444969365561345",
            "warehouseCode": "ZGXN001",
            "warehouseName": "中国虚拟仓",
            "warehouseChildVOList": [
                {
                    "warehouseId": 2,
                    "warehouseCode": "CK0002",
                    "warehouseName": "泽汇清溪仓",
                    "warehouseChildVOList": []
                }
            ]
        },
        {
            "warehouseCode": "SZXN001",
            "warehouseName": "深圳虚拟仓",
            "warehouseChildVOList": [
                {
                    "warehouseCode": "CK0002",
                    "warehouseName": "泽汇清溪仓",
                    "warehouseChildVOList": []
                }
            ]
        },
        {
            "warehouseCode": "YK001",
            "warehouseName": "胡大仓",
			"tag":["SELF_BUILT"],
            "warehouseChildVOList": [
                {
                    "warehouseCode": "MGCK001",
                    "warehouseName": "美国第一仓",
					"tag":["SELF_BUILT"],
                    "warehouseChildVOList": []
                }
            ]
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|:-----|-----|
|warehouseCode |String   |仓库编码 |
|warehouseName |String   |仓库名称 |
|tag |String[]   |仓库标签:THIRD-第三方仓，PLATFORM-平台仓，SELF_BUILT-自建仓库，VIRUTAL-虚拟仓，OVERSEA-海外仓库  |
|warehouseChildVOList |WarehouseVO[]   |子仓库 |


## 备注