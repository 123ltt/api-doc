# 获取token

> 作者：update_by_content

**简要描述：** 

- **作者**:`谢智华`&lt;br/&gt;oauth2获取token接口

**请求URL：** 
- ` cams-auth/oauth/token `
  
**请求方式：**
- POST `application/x-www-form-urlencoded` 

**Header：** 

|Header名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|Authorization |必须  |Base64(clientId:clientSecret) |clientId=saber;clientSecret=cams_saber_secret |


**参数：** 

|参数名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|username |必选  |string |用户名 |
|password |必选  |string |密码 |
|grant_type |必选  |string |授权类型:captcha,password,refresh_token |
|scope |必须  |string |固定all |
|type |必须  |string |固定account |

 **返回示例**

``` 
{
  "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiIiwicGFzc3dvcmRfZXhwaXJlZCI6dHJ1ZSwidXNlcl9uYW1lIjoiYWRtaW4iLCJyZWFsX25hbWUiOiJhZG1pbiIsImF2YXRhciI6IiIsImF1dGhvcml0aWVzIjpbIjEiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJhZG1pbiIsImxpY2Vuc2UiOiJwb3dlcmVkIGJ5IHpoa2oiLCJwb3N0X2lkIjoiIiwidXNlcl9pZCI6IjEiLCJyb2xlX2lkIjoiMSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOm51bGwsIm9hdXRoX2lkIjoiIiwiam9iX251bWJlciI6bnVsbCwiZXhwIjoxNjE2MTI1NzM5LCJkZXB0X2lkIjoiIiwicGFzc3dvcmRfbGFzdF91cGRhdGVfZGF0ZSI6bnVsbCwianRpIjoiNGJlODIxNTYtNmMyNC00YzQxLTljNTQtYmU3YWU0N2NjZGRmIiwiYWNjb3VudCI6ImFkbWluIn0.cDUsA5N4bs_xcwGITY_m-tM89EJXgIKOEH4DbfVSO1Y",
  "token_type":"bearer",
  "refresh_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiIiwicGFzc3dvcmRfZXhwaXJlZCI6dHJ1ZSwidXNlcl9uYW1lIjoiYWRtaW4iLCJyZWFsX25hbWUiOiJhZG1pbiIsImF2YXRhciI6IiIsImF1dGhvcml0aWVzIjpbIjEiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJhZG1pbiIsImxpY2Vuc2UiOiJwb3dlcmVkIGJ5IHpoa2oiLCJwb3N0X2lkIjoiIiwidXNlcl9pZCI6IjEiLCJyb2xlX2lkIjoiMSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOm51bGwsImF0aSI6IjRiZTgyMTU2LTZjMjQtNGM0MS05YzU0LWJlN2FlNDdjY2RkZiIsIm9hdXRoX2lkIjoiIiwiam9iX251bWJlciI6bnVsbCwiZXhwIjoxNjE2NzI2OTM5LCJkZXB0X2lkIjoiIiwicGFzc3dvcmRfbGFzdF91cGRhdGVfZGF0ZSI6bnVsbCwianRpIjoiNTAwM2NhOTItN2Y3OS00YzcxLTk1MDMtMjIxZTllYmRlYTQ3IiwiYWNjb3VudCI6ImFkbWluIn0.AhenkZPx8dOhf4ri5Hs-hSO4iwV3Bq0zdCEZbFhe0i0",
  "expires_in":3599,
  "scope":"all",
  "company_id":"",
  "password_expired":true,
  "user_name":"admin",
  "real_name":"admin",
  "avatar":"",
  "client_id":"saber",
  "role_name":"admin",
  "license":"powered by zhkj",
  "post_id":"",
  "user_id":"1",
  "role_id":"1",
  "nick_name":null,
  "oauth_id":"",
  "job_number":null,
  "dept_id":"",
  "password_last_update_date":null,
  "account":"admin",
  "jti":"4be82156-6c24-4c41-9c54-be7ae47ccddf"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|----- |

 **备注** 

- `删除了tenant-id请求头`&lt;br/&gt;`返回信息中删除了tenant_id、tenant_name`&lt;br/&gt;`请求头Authorization取值修改clientSecret：saber_secret--&gt;&gt;cams_saber_secret`