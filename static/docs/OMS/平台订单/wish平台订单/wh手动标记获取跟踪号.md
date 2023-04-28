# wh手动标记获取跟踪号

> 作者：252788692@qq.com

**简要描述：** 

- 平台订单手工合单

**请求URL：** 
- ` /oms/orderMain/getTrackCodeByOmOrderId`
  
**请求方式：**
- GET

**请求示例：** 
```
/orderMain/getTrackCodeByOmOrderId?omOrderId=WH2107221405000001
```
 **返回示例**
``` 
{
	"code": 200,
	"data": [
		"1626934005939-2053998593"
	],
	"msg": "操作成功",
	"success": true
}
```


 **备注** 

- 更多返回错误代码请看首页的错误代码描述