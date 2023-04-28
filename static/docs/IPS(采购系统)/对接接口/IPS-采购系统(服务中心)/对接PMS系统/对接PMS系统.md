# 对接PMS系统

> 作者：18566180654

**简要描述：**

- 同步接收PMS产品

接口负责人：胡立新

**同步方式：**

**接口URL：**
http://dev-service.zehui.local/api/platform-ips/client/syncSku

FEIGN接口：PurPmsSkuClient.syncSku


**请求参数说明**

|参数名|类型|必填|参数说明|备注|
|:--------|:-----|:-----||
|initialize|String| 是|是否初始化(yes / no)||
|data|List| 是| sku明细 ||
|-id|Long|是|主键Id||
|-productSku|String| 是|sku编码||
|-productSpu|String| 是|spu编码||
|-nwSku|String| 是|牛蛙sku编码||
|-developLeadUserId|Long| 是|开发负责人||
|-isDeleted|Integer| 是|是否删除标识(0-有效 ，1-删除)||
|-status|Integer| 是|业务状态 |状态:0-审核中,1-审核失败,2-有效，3-无效 4-无效待审核（需要pms对应状态）|


**请求数据：**

```json
{
	"initialize":"yes",
	"data":[{
	 "id": 4231421411234,
	 "productSku":"AEVVEEWDB",
	 "productSpu":"AEVrweqDB",
	 "nwSku":"HDSGF",
	 "developLeadUserId": 232,
	 "isDeleted": 0,
	 "status": 2
	},
	{
	 "id": 4231421411444,
	 "productSku":"AEVVEEWDC",
	 "productSpu":"wqrwrwB",
	 "nwSku":"HDSGD",
	 "developLeadUserId": 231,
	 "isDeleted": 0,
	 "status": 2
	}]
}
```
**返回示例**

```
{
    "code": 200,
    "success": true,
    "data": {},
    "msg": "操作成功"
}
```

**返回参数说明**

|参数名|类型|说明|备注|
|:-----|:-----|-----| |
|code|Integer| 状态码 |  |
|success|Boolean| 标识 |  |
|msg|String| 信息 |  |
|data|Object[data]| | | |

 **备注**

-