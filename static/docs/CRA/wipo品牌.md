# wipo品牌

> 作者：tanqichou

[TOC]
# wipo品牌

## 查询品牌信息

**接口地址**:`scrs-es/es/esFbwordsDetails/queryBranddb`


**请求方式**:`POST`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:查询品牌信息

**示例**:
http://dev-cams-gateway.zehui.local/scrs-es/es/esFbwordsDetails/queryBranddb
```
{
    "words": "huawei",
    "countryCode": "CH"
}
```

**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|words|品牌或描述|Json|false|string||
|countryCode|国际简码|Json|false|string||



**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R«List«Branddb»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|array|Branddb|
|&emsp;&emsp;appDate||string(date-time)||
|&emsp;&emsp;brand||string||
|&emsp;&emsp;branddbStatus||string||
|&emsp;&emsp;createDept|创建部门|integer(int64)||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;createUser|创建人|integer(int64)||
|&emsp;&emsp;holder||string||
|&emsp;&emsp;holderCountry||string||
|&emsp;&emsp;id|主键id|integer(int64)||
|&emsp;&emsp;image||string||
|&emsp;&emsp;imageClass||string||
|&emsp;&emsp;isDeleted|是否已删除|integer(int32)||
|&emsp;&emsp;niceCl||string||
|&emsp;&emsp;number||string||
|&emsp;&emsp;origin||string||
|&emsp;&emsp;relevance||integer(int64)||
|&emsp;&emsp;source||string||
|&emsp;&emsp;status|业务状态|integer(int32)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;updateUser|更新人|integer(int64)||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
    "code": 200,
    "success": true,
    "data": [
        {
            "_id": "1cT-B3sB-KufIEaXa1Ld",
            "oo": "EM",
            "img": null,
            "ad": "2021-07-06T23:59:59Z",
            "irn": null,
            "hol": "Huawei Technologies Co., Ltd.",
            "score": 1,
            "branddbStatus": "PEND",
            "mty": "Word",
            "nc": "9,35,37,41,42",
            "source": "EMTM",
            "doc": "85/96/018508596.xml.gz",
            "branddbId": "EMTM.018508596",
            "holc": "CN",
            "vcs": "",
            "brand": "My HUAWEI",
            "brandTh": "",
            "holKo": "",
            "brandKo": "",
            "threadTag": "0",
            "relImg": null
        }
	],
	"msg": "",
	"success": true
}
```
附：国家简称
```
AD	安道尔共和国	Andorra	376
AE	阿拉伯联合酋长国	United Arab Emirates	971
AF	阿富汗	Afghanistan	93
AG	安提瓜和巴布达	Antigua and Barbuda	1268
AI	安圭拉岛	Anguilla	1264
AL	阿尔巴尼亚	Albania	355
AM	亚美尼亚	Armenia	374
AO	安哥拉	Angola	244
AR	阿根廷	Argentina	54
AT	奥地利	Austria	43
AU	澳大利亚	Australia	61
AZ	阿塞拜疆	Azerbaijan	994
BB	巴巴多斯	Barbados	1246
BD	孟加拉国	Bangladesh	880
BE	比利时	Belgium	32
BF	布基纳法索	Burkina-faso	226
BG	保加利亚	Bulgaria	359
BH	巴林	Bahrain	973
BI	布隆迪	Burundi	257
BJ	贝宁	Benin	229
BL	巴勒斯坦	Palestine	970
BM	百慕大群岛	Bermuda Is.	1441
BN	文莱	Brunei	673
BO	玻利维亚	Bolivia	591
BR	巴西	Brazil	55
BS	巴哈马	Bahamas	1242
BW	博茨瓦纳	Botswana	267
BY	白俄罗斯	Belarus	375
BZ	伯利兹	Belize	501
CA	加拿大	Canada	1
CF	中非共和国	Central African Republic	236
CG	刚果	Congo	242
CH	瑞士	Switzerland	41
CK	库克群岛	Cook Is.	682
CL	智利	Chile	56
CM	喀麦隆	Cameroon	237
CN	中国	China	86
CO	哥伦比亚	Colombia	57
CR	哥斯达黎加	Costa Rica	506
CS	捷克	Czech	420
CU	古巴	Cuba	53
CY	塞浦路斯	Cyprus	357
CZ	捷克	Czech Republic	420
DE	德国	Germany	49
DJ	吉布提	Djibouti	253
DK	丹麦	Denmark	45
DO	多米尼加共和国	Dominica Rep.	1890
DZ	阿尔及利亚	Algeria	213
EC	厄瓜多尔	Ecuador	593
EE	爱沙尼亚	Estonia	372
EG	埃及	Egypt	20
ES	西班牙	Spain	34
ET	埃塞俄比亚	Ethiopia	251
FI	芬兰	Finland	358
FJ	斐济	Fiji	679
FR	法国	France	33
GA	加蓬	Gabon	241
GB	英国	United Kiongdom	44
GD	格林纳达	Grenada	1809
GE	格鲁吉亚	Georgia	995
GF	法属圭亚那	French Guiana	594
GH	加纳	Ghana	233
GI	直布罗陀	Gibraltar	350
GM	冈比亚	Gambia	220
GN	几内亚	Guinea	224
GR	希腊	Greece	30
GT	危地马拉	Guatemala	502
GU	关岛	Guam	1671
GY	圭亚那	Guyana	592
HK	中国香港特别行政区	Hongkong	852
HN	洪都拉斯	Honduras	504
HT	海地	Haiti	509
HU	匈牙利	Hungary	36
ID	印度尼西亚	Indonesia	62
IE	爱尔兰	Ireland	353
IL	以色列	Israel	972
IN	印度	India	91
IQ	伊拉克	Iraq	964
IR	伊朗	Iran	98
IS	冰岛	Iceland	354
IT	意大利	Italy	39
JM	牙买加	Jamaica	1876
JO	约旦	Jordan	962
JP	日本	Japan	81
KE	肯尼亚	Kenya	254
KG	吉尔吉斯坦	Kyrgyzstan	331
KH	柬埔寨	Kampuchea (Cambodia )	855
KP	朝鲜	North Korea	850
KR	韩国	Korea	82
KT	科特迪瓦共和国	Republic of Ivory Coast	225
KW	科威特	Kuwait	965
KZ	哈萨克斯坦	
LA	老挝	Laos	856
LB	黎巴嫩	Lebanon	961
LC	圣卢西亚	St.Lucia	1758
LI	列支敦士登	Liechtenstein	423
LK	斯里兰卡	Sri Lanka	94
LR	利比里亚	Liberia	231
LS	莱索托	Lesotho	266
LT	立陶宛	Lithuania	370
LU	卢森堡	Luxembourg	352
LV	拉脱维亚	Latvia	371
LY	利比亚	Libya	218
MA	摩洛哥	Morocco	212
MC	摩纳哥	Monaco	377
MD	摩尔多瓦	Moldova, Republic of	373
MG	马达加斯加	Madagascar	261
ML	马里	Mali	223
MM	缅甸	Burma	95
MN	蒙古	Mongolia	976
MO	中国澳门特别行政区	Macao	853
MS	蒙特塞拉特岛	Montserrat Is	1664
MT	马耳他	Malta	356
MU	毛里求斯	Mauritius	230
MV	马尔代夫	Maldives	960
MW	马拉维	Malawi	265
MX	墨西哥	Mexico	52
MY	马来西亚	Malaysia	60
MZ	莫桑比克	Mozambique	258
NA	纳米比亚	Namibia	264
NE	尼日尔	Niger	977
NG	尼日利亚	Nigeria	234
NI	尼加拉瓜	Nicaragua	505
NL	荷兰	Netherlands	31
NO	挪威	Norway	47
NP	尼泊尔	Nepal	977
NR	瑙鲁	Nauru	674
NZ	新西兰	New Zealand	64
OM	阿曼	Oman	968
PA	巴拿马	Panama	507
PE	秘鲁	Peru	51
PF	法属玻利尼西亚	French Polynesia	689
PG	巴布亚新几内亚	Papua New Cuinea	675
PH	菲律宾	Philippines	63
PK	巴基斯坦	Pakistan	92
PL	波兰	Poland	48
PR	波多黎各	Puerto Rico	1787
PT	葡萄牙	Portugal	351
PY	巴拉圭	Paraguay	595
QA	卡塔尔	Qatar	974
RO	罗马尼亚	Romania	40
RU	俄罗斯	Russia	7
SA	沙特阿拉伯	Saudi Arabia	966
SB	所罗门群岛	Solomon Is	677
SC	塞舌尔	Seychelles	248
SD	苏丹	Sudan	249
SE	瑞典	Sweden	46
SG	新加坡	Singapore	65
SI	斯洛文尼亚	Slovenia	386
SK	斯洛伐克	Slovakia	421
SL	塞拉利昂	Sierra Leone	232
SM	圣马力诺	San Marino	378
SN	塞内加尔	Senegal	221
SO	索马里	Somali	252
SR	苏里南	Suriname	597
ST	圣多美和普林西比	Sao Tome and Principe	239
SV	萨尔瓦多	EI Salvador	503
SY	叙利亚	Syria	963
SZ	斯威士兰	Swaziland	268
TD	乍得	Chad	235
TG	多哥	Togo	228
TH	泰国	Thailand	66
TJ	塔吉克斯坦	Tajikstan	992
TM	土库曼斯坦	Turkmenistan	993
TN	突尼斯	Tunisia	216
TO	汤加	Tonga	676
TR	土耳其	Turkey	90
TT	特立尼达和多巴哥	Trinidad and Tobago	1809
TW	中国台湾省	Taiwan	886
TZ	坦桑尼亚	Tanzania	255
UA	乌克兰	Ukraine	380
UG	乌干达	Uganda	256
US	美国	United States of America	1
UY	乌拉圭	Uruguay	598
UZ	乌兹别克斯坦	Uzbekistan	233
VC	圣文森特岛	Saint Vincent	1784
VE	委内瑞拉	Venezuela	58
VN	越南	Vietnam	84
YE	也门	Yemen	967
YU	南斯拉夫	Yugoslavia	381
ZA	南非	South Africa	27
ZM	赞比亚	Zambia	260
ZR	扎伊尔	Zaire	243
ZW	津巴布韦	Zimbabwe
```