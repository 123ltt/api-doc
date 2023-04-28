# 刷新token

> 作者：lijinghua@zehui.com

## 简要描述
- 刷新 access_token 接口

## 请求URL
- ` {网关地址}/cams-auth/oauth/token`
  
## 请求方式
- POST application/json;charset=UTF-8

## 参数

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|grant_type |是  |string |授权类型:  refresh_token   |
|refresh_token |是  |string |  refresh_token (通过 oauth/token 接口获取的 refresh_token)  |
|scope     |是  |string | 授权范围:all    |

## 请求示例

```
{
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiMSIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJ1c2VyX25hbWUiOiJidWxsZnJvZ19jcG1zIiwicmVhbF9uYW1lIjoiYnVsbGZyb2dfY3BtcyIsImF2YXRhciI6IiIsImF1dGhvcml0aWVzIjpbIjE0NTQ5ODk3NDE5NDI0NzY4MDEiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJjcG1zX2J1bGxmcm9nIiwibGljZW5zZSI6InBvd2VyZWQgYnkgemhraiIsInBvc3RfaWQiOiIxMzE2OTQxMzY1OTg2OTEwMjEwIiwidXNlcl9pZCI6IjE0NTQ5ODk0Nzk2MDU1Mzg4MTciLCJyb2xlX2lkIjoiMTQ1NDk4OTc0MTk0MjQ3NjgwMSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiLniZvom5ktY3Btc-WvueaOpei0piIsImF0aSI6ImZiMTM1MjY1LTRmNzItNDBiOC04ZDdkLWIxNTlkMmZlNzMyZSIsIm9hdXRoX2lkIjoiIiwiam9iX251bWJlciI6IiIsImV4cCI6MTYzNjMzNjc5OCwiZGVwdF9pZCI6Ijc2MyIsInBhc3N3b3JkX2xhc3RfdXBkYXRlX2RhdGUiOjE2MzU3MzE3NjMwMDAsImp0aSI6IjAxY2I3NzhhLTIxMDItNGUzYy05ZDgxLTRjMzBhMzcyMzJlNyIsImFjY291bnQiOiJidWxsZnJvZ19jcG1zIn0.BiHdey1Zj9XEbX3ftQpUHx2DGuX_lEZCwR8MNZbHjiY",
    "grant_type": "refresh_token",
    "scope": "all"
}
```

## 返回示例 

``` 
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiMSIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJ1c2VyX25hbWUiOiJidWxsZnJvZ19jcG1zIiwicmVhbF9uYW1lIjoiYnVsbGZyb2dfY3BtcyIsImF2YXRhciI6IiIsImF1dGhvcml0aWVzIjpbIjE0NTQ5ODk3NDE5NDI0NzY4MDEiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJjcG1zX2J1bGxmcm9nIiwibGljZW5zZSI6InBvd2VyZWQgYnkgemhraiIsInBvc3RfaWQiOiIxMzE2OTQxMzY1OTg2OTEwMjEwIiwidXNlcl9pZCI6IjE0NTQ5ODk0Nzk2MDU1Mzg4MTciLCJyb2xlX2lkIjoiMTQ1NDk4OTc0MTk0MjQ3NjgwMSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiLniZvom5ktY3Btc-WvueaOpei0piIsIm9hdXRoX2lkIjoiIiwiam9iX251bWJlciI6IiIsImV4cCI6MTYzNTczNjg5MCwiZGVwdF9pZCI6Ijc2MyIsInBhc3N3b3JkX2xhc3RfdXBkYXRlX2RhdGUiOjE2MzU3MzE3NjMwMDAsImp0aSI6ImQ5M2E5NGJjLTRjZWQtNGU0My05M2EwLTdkMjg4ODUwZGFiYiIsImFjY291bnQiOiJidWxsZnJvZ19jcG1zIn0.ka_3P3zmFo2fyaK-uVADbit6rQ5SFdZLzi-FpZXsVCw",
    "token_type": "bearer",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiMSIsInBhc3N3b3JkX2V4cGlyZWQiOmZhbHNlLCJ1c2VyX25hbWUiOiJidWxsZnJvZ19jcG1zIiwicmVhbF9uYW1lIjoiYnVsbGZyb2dfY3BtcyIsImF2YXRhciI6IiIsImF1dGhvcml0aWVzIjpbIjE0NTQ5ODk3NDE5NDI0NzY4MDEiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJjcG1zX2J1bGxmcm9nIiwibGljZW5zZSI6InBvd2VyZWQgYnkgemhraiIsInBvc3RfaWQiOiIxMzE2OTQxMzY1OTg2OTEwMjEwIiwidXNlcl9pZCI6IjE0NTQ5ODk0Nzk2MDU1Mzg4MTciLCJyb2xlX2lkIjoiMTQ1NDk4OTc0MTk0MjQ3NjgwMSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiLniZvom5ktY3Btc-WvueaOpei0piIsImF0aSI6ImQ5M2E5NGJjLTRjZWQtNGU0My05M2EwLTdkMjg4ODUwZGFiYiIsIm9hdXRoX2lkIjoiIiwiam9iX251bWJlciI6IiIsImV4cCI6MTYzNjMzNjc5OCwiZGVwdF9pZCI6Ijc2MyIsInBhc3N3b3JkX2xhc3RfdXBkYXRlX2RhdGUiOjE2MzU3MzE3NjMwMDAsImp0aSI6IjAxY2I3NzhhLTIxMDItNGUzYy05ZDgxLTRjMzBhMzcyMzJlNyIsImFjY291bnQiOiJidWxsZnJvZ19jcG1zIn0.gqayuGrLPkRWLMRz3MkGdW2oa0SzrHPZGUYyqiY36iQ",
    "expires_in": 3599,
    "scope": "all",
    "company_id": "1",
    "password_expired": false,
    "user_name": "bullfrog_cpms",
    "real_name": "bullfrog_cpms",
    "avatar": "",
    "client_id": "saber",
    "role_name": "cpms_bullfrog",
    "license": "powered by zhkj",
    "post_id": "1316941365986910210",
    "user_id": "1454989479605538817",
    "role_id": "1454989741942476801",
    "nick_name": "牛蛙-cpms对接账",
    "oauth_id": "",
    "job_number": "",
    "dept_id": "763",
    "password_last_update_date": "2021-11-01 09:56:03",
    "account": "bullfrog_cpms",
    "jti": "d93a94bc-4ced-4e43-93a0-7d288850dabb"
}
```