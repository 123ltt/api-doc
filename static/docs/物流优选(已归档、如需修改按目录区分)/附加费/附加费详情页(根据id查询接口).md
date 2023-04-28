# 附加费详情页(根据id查询接口)

> 作者：2318309077

## 简要描述

- 物流附加费列表详情页公用查询接口

## 请求URL
- `http://dev-gateway.zehui.local/blade-optimize/additionalRule/findRule?id=1`
  
## 请求方式
- GET 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|id |是|Long |物流费规则id(列表页返回前端的id)   |
## 返回示例 

``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "id": "1327506985389907969",
            "channelId": 1,
            "chargeType": 2,
            "chargeUnit": 1,
			"currency": "",
                 fuelCharge": null,
                "multiple": null,
                "multipleMin": null,
                "multipleMax": null,
				"warehouse_id":null,
            "charge": "16.000000",
            "conditionName": "12312123213",
            "startTime": "2020-11-10",
            "endTime": "2020-11-30",
            "forever": false,
            "remark": "",
            "codes": [
                {
                    "partitionName": "",
                    "code": "6_9"
                }
            ],
            "peeks": [
                {
                    "id": "1327506985431851009",
                    "ruleId": "1327506985389907969",
                    "dwgId": 1,
                    "chargeType": 2,
                    "peakStart": "2020-11-10",
                    "peakEnd": "2020-11-10",
                    "peakCharge": "1232131.000000"
                }
            ]
        }
    ],
    "msg": "操作成功"
}
```

## 返回参数说明 

|参数名|类型|说明|备注
|:-----  |:-----|-----                           |
|channelId |Long   |渠道id|无
|channelCode |Long   |渠道编码|无
|chargeType |Integer   |费用类型 |1:超规格费     2: 偏远附加费 3临时附加费 4:燃油费率 5:头程费
|charge |decimal   |附加费金额|  默认保留6位小数
|currency |是 |String   |币种|   不为空
|fuelCharge|否 |int   |燃油费率| 
|multiple |否|int   |倍数|  
|multipleMin|否 |int   |头程费 数值 未超过倍数| 
|multipleMax |否|int   |头程费 数值 超过倍数| 
|jpParameter|否 |int   |计抛参数|  |
|minJpWeight |否|double   |最低计抛重量|  |
|startShipmentList|List&lt;AdditionalStartShipmentDTO>|可发仓库||
|conditionName |String   |分区名称/公式| 后端传给前端公式 前端需要根据字典转换成中文
|startTime |dateTime   |生效开始时间|  无
|endTime |dateTime   |生效结束时间|  无
|codes |String   |邮编列表|  后端已经用逗号分隔好 前端直接拿来展示即可
|peeks |Object   |旺季附加费规则|  数组对象 可能会有多个旺季附加费规则
|peeks[0].peakStart |dateTime   |旺季开始时间|  无
|peeks[0].peakEnd |dateTime   |旺季结束时间|  无
|peeks[0].peakCharge |dateTime   |旺季收费金额|  无


##AdditionalStartShipmentDTO
|参数名|类型|说明|备注
|:-----  |:-----|-----                           |
|ruleId |Long   |附加费规则id|无
|startShipmentId |Long   |启运地id（仓库id）|无
|startShipmentCode |String   |启运地编码（仓库编码）|
|parentId |Long   |父id（仓库id）|