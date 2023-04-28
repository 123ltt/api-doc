# 新增&amp;编辑

> 作者：wuxin

## 作者
- 吴新

    
## 简要描述

- 新增&编辑组织机构

## 请求URL
- `/org/submit`
  
## 请求方式
- POST 

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|parentId |是  |integer |父主键   |
|ancestors |否  |string |祖级列表    |
|category    |是  |integer | 机构类型 1集团 2公司 3部门    |
|orgName    |是  |string | 机构名  |
|fullName    |否  |string | 机构全称    |
|sort    |是  |integer | 排序    |
|remark    |否  |string | 备注    |

## 返回示例 

``` 
  {
    "code": 0,
	"msg": "操作成功",
    "data": {
      	"id": 123,
		"categoryName": "集团"
    }
  }
```

## 返回参数说明 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|id |int   |主键ID  |
|categoryName |string   |机构类型名称   |

## 备注 

- 更多返回错误代码请看首页的错误代码描述