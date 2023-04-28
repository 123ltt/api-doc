# 根据牛蛙或者PMS SPU查对应所有PMS SKU

> 作者：wuxin

## 简介

根据牛蛙或者PMS SPU查对应所有PMS SKU

**POM依赖**

```java
&lt;parent>
	&lt;groupId>com.zhkj.cpms&lt;/groupId>
	&lt;artifactId>zhkj-cpms&lt;/artifactId>
	&lt;version>1.1.0-SNAPSHOT&lt;/version>
&lt;/parent>
```

**调用方法**

```java
com.zhkj.cpms.feign.SkuClient#getAllChildSkuBySpu
```

**请求数据**

| 参数 |类型 |必填| 含义  |
| ------------ | ------------ |
| type|int  |是| 类型 1:pmsSpu 2：nwSpu  |
| spus  |List&lt;String>| 是 |spu |



**请求示例**

```json
{
"type": 1,
"spus": ["SC2HM331DGD"]
    
}

```

**响应示例**

```json
{
    "code": 200,
    "success": true,
    "data": [
        {
            "productSpu": "RJ0Y6093",
            "nwSku": "ZA0093",
            "childSkus": [
                {
                    "productSku": "RJ0Y6093H6Y",
                    "nwSku": "ZA0093A"
                }
            ]
        }
    ],
    "msg": "操作成功",
    "msgDetail": null,
    "attachedMap": {
        "traceId": "c0a870691661130174053100311848"
    }
}
```