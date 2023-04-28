# OMS提供-是否拦截此包裹

> 作者：lijinghua@zehui.com

## 简要描述

- WMS调用，出库时使用实际重量重新计算利润；OMS根据物流规则或其它规则返回是否需要仓库冻结此包裹
- 冻结后，需要销售在oms审核此包裹是否继续出库
- 审核通过，oms保存审核通过标识ifBlock=false即可；wms第二次出库时还会调用此接口，如果ifBlock=false，此接口返回“不拦截”即可。
- 审核不通过，直接撤销wms

## 请求URL
- `http://test-ams-gateway.zehui.local/oms/feign/wms/ifBlockPkg`
## URL

## HEADER

`Blade-Auth = access_token`

注意：授权接口请联系 AMS - 杨锐波
  
## 请求方式
- POST 

## 请求示例 

``` 
{
	"requestId": "123456",
	"tenantId": "000000",
	"data": [{
		"push2WmsNo": "WH2103161420000001A2",
		"packageWeight": 25.36,
		"packageLength" : 20.00,
		"packageWidth" : 20.00,
		"packageHeight" : 20.00,
		"channelId" : 1384697929392660482
	}]

}
```

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|requestId |否  |String |追踪id，非必填   |
|tenantId |否  |String |租户,必填   |
|push2WmsNo |是  |String |OMS推送到WMS的单号   |
|packageWeight |是  |String |wms包裹实际重量，单位: kg |
|packageLength |否  |String |wms包裹实际长度，单位: cm |
|packageWidth |否  |String |wms包裹实际宽度，单位: cm |
|packageHeight |否  |String |wms包裹实际高度，单位: cm |
|channelId |否 |String |渠道ID  |

## 返回示例 
不通过，需要拦截：
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "push2WmsNo": "WH2103161420000001A2",
            "ifBlock": true,
            "blockTypeList": [
                {
                    "blockType": "负利润拦截",
                    "blockReason": "根据push2WmsNo：“WH2103161420000001A2”查询到对应的包裹需要拦截！"
                }
            ]
        }
    ],
    "msg": "OK"
}
```
通过，不需拦截
``` 
{
	"code": 200,
	"success": true,
	"data": [{
		"push2WmsNo": "WH2103161420000001A2",
		"ifBlock": false,
		"blockTypeList": null
	}],
	"msg": ""
}
```
发生异常
``` 
{
    "code": 500,
    "success": false,
    "data": null,
    "msg": "java.lang.RuntimeException: 渠道异常，该渠道：FFE001暂无运费结果！WH2103161420000001A2"
}
```
## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----|
|code |int   |全部成功时为200 |
|data | PkgProfitVO[]  | 包裹利润信息 |
|└ push2WmsNo | String  | OMS推送到WMS的单号 |
|└ ifBlock | Boolean  | 是否拦截 |
|└ blockTypeList | BlockTypeVO[]  | 拦截类型,多个 |
|└└ blockType | String  | 拦截类型 |
|└└ blockReason | String  | 拦截原因 |
|└└ overWeight | Boolean  | 是否超重 |


## 备注