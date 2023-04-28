# 根据sku和尺寸列表获取图片

> 作者：18679129326@163.com

**简要描述：** 

- 获取图片尺寸，sku，url信息


**请求URL：** 
- ` /lms/sku/getImageDetailList
  
**请求方式：**
- POST 

**请求示例：** 
```
{
    "skuList" : [
        "OSAUIS1" ,"OSAUNO9"
    ] ,
    "sizeList" : [ "1500*1500","diy"]
}
```

|参数名|类型|说明|必选|
|:----    |:---|:----- |-----   |
|skuList |String[] |SKU编码|是|
|sizeList |String[] |尺寸列表|是|

 **返回示例**
``` 
{
    "code": 200,
    "success": true,
    "data": [
        {
            "sku": "OSAUIS1",
            "sizeUrlList": [
                {
                    "name": null,
                    "url": "http://zehui-images-test-hk.oss-cn-hongkong.aliyuncs.com/upload/20201021/f6fdbb850a2a1c60986623219596fde3.png",
                    "widthHeight": "DIY"
                },
                {
                    "name": null,
                    "url": "http://zehui-images-test-hk.oss-cn-hongkong.aliyuncs.com/upload/20201021/d117cf26c8e9edc5361d28981efabc35.png",
                    "widthHeight": "DIY"
                }
            ]
        },
        {
            "sku": "OSAUNO9",
            "sizeUrlList": [
                {
                    "name": null,
                    "url": "http://zehui-images-test-hk.oss-cn-hongkong.aliyuncs.com/upload/20201021/9fc57ea56a8b84a44c1b47b33431080c.png",
                    "widthHeight": "DIY"
                },
                {
                    "name": null,
                    "url": "http://zehui-images-test-hk.oss-cn-hongkong.aliyuncs.com/upload/20201021/2af52e04d37575cdd3148e9fc942e976.png",
                    "widthHeight": "DIY"
                }
            ]
        }
    ],
    "msg": "操作成功"
}
```
 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|sku |String   |SKU编码|
|url |String   |图片路径|
|widthHeight |String   |图片宽高|

 **备注**