# 获取用户授权Token信息

> 作者：yangruibo

**简要描述：** 

- 获取用户授权Token信息

**请求URL：** 
- `{网关}/ams-auth/oauth/token `
- 网关
	测试环境：http://test-ams-gateway.zehui.local
	生产环境：http://ams-gw.izehui.com

**请求方式：**
- POST `application/json` 

**Header：** 

|Header名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|Authorization |必须  |Base64 (clientId:clientSecret) |Basic c2FiZXI6c2FiZXJfc2VjcmV0[Base64("sword:sword_secret")] |
|tenantId |必须  |String |租户ID  |
|tma |否  |String |租户主账号  |


**参数：** 

|参数名|是否必选|类型|说明|
|:----    |:---|:----- |-----   |
|username |必选  |string |用户名 |
|password |必选  |string |密码 |
|grant_type |必选  |string |授权类型:password,refresh_token |
|scope |必须  |string |固定all |


**请求示例**
```
{
    "grant_type": "captcha",
    "scope": "all",
    "type": "account",
    "tenantId": "000000",
    "username": "admin",
    "password": "21232f297a57a5a743894a0e4a801fc3",
    "fp": "4d3f443b7e074cd32e959bfe218d9a61",
    "captchaKey": "e103dc7eb667e1dbc4010c9c224d2628",
    "captchaCode": "ejqc8"
}
```

 **返回示例**

``` 
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJ0ZW5hbnRfbmFtZSI6Ium7mOiupOenn-aItyIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJ1c2VyX25hbWUiOiJhZG1pbiIsInJlYWxfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiMTM0MTYzMjM2MzAxMzA1NDQ1NSJdLCJjbGllbnRfaWQiOiJzd29yZCIsInJvbGVfbmFtZSI6IiIsImxpY2Vuc2UiOiJwb3dlcmVkIGJ5IHpoa2oiLCJwb3N0X2lkIjoiIiwidXNlcl9pZCI6IjEzMTA4NTc0ODI2NTAzMDg2MDkiLCJyb2xlX2lkIjoiMTM0MTYzMjM2MzAxMzA1NDQ1NSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiLotoXnuqfnrqHnkIblkZgiLCJvYXV0aF9pZCI6IiIsImV4cCI6MTY1MDc0MjU5MywiZGVwdF9pZCI6IiIsInBhc3N3b3JkX2xhc3RfdXBkYXRlX2RhdGUiOjE2NTAyMTEyMDIwMDAsImp0aSI6ImM3ZWJhOWNlLTI5MWEtNGMwMC04YTJiLTAyMTI5YTI5NDNmYiIsImFjY291bnQiOiJhZG1pbiJ9.xY0pifz4ch3rNXoaibuJLz44mv5GGUiN_hFyvzG4Nd0",
    "token_type": "bearer",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJ0ZW5hbnRfbmFtZSI6Ium7mOiupOenn-aItyIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJ1c2VyX25hbWUiOiJhZG1pbiIsInJlYWxfbmFtZSI6ImFkbWluIiwiYXV0aG9yaXRpZXMiOlsiMTM0MTYzMjM2MzAxMzA1NDQ1NSJdLCJjbGllbnRfaWQiOiJzd29yZCIsInJvbGVfbmFtZSI6IiIsImxpY2Vuc2UiOiJwb3dlcmVkIGJ5IHpoa2oiLCJwb3N0X2lkIjoiIiwidXNlcl9pZCI6IjEzMTA4NTc0ODI2NTAzMDg2MDkiLCJyb2xlX2lkIjoiMTM0MTYzMjM2MzAxMzA1NDQ1NSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiLotoXnuqfnrqHnkIblkZgiLCJhdGkiOiJjN2ViYTljZS0yOTFhLTRjMDAtOGEyYi0wMjEyOWEyOTQzZmIiLCJvYXV0aF9pZCI6IiIsImV4cCI6MTY1MzI5MTM5MywiZGVwdF9pZCI6IiIsInBhc3N3b3JkX2xhc3RfdXBkYXRlX2RhdGUiOjE2NTAyMTEyMDIwMDAsImp0aSI6ImIwYzZlNjE0LTExMDQtNDA1Mi1hNjlmLTY2MGIxNjZhODUyMyIsImFjY291bnQiOiJhZG1pbiJ9.1kXjl_XzEmqsz0A4JYTf0wT82IhPfpVB7Sq6YqTVLJk",
    "expires_in": 43199,
    "scope": "all",
    "tenant_id": "000000",
    "tenant_name": "默认租户",
    "password_expired": false,
    "user_name": "admin",
    "real_name": "admin",
    "client_id": "sword",
    "role_name": "",
    "license": "powered by zhkj",
    "post_id": "",
    "user_id": "1310857482650308609",
    "role_id": "1341632363013054455",
    "nick_name": "超级管理员",
    "oauth_id": "",
    "dept_id": "",
    "password_last_update_date": "2022-04-18 00:00:02",
    "account": "admin",
    "jti": "c7eba9ce-291a-4c00-8a2b-02129a2943fb"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|----- |

 **备注**