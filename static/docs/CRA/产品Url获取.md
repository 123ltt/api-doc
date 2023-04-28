# 产品Url获取

> 作者：tanqichou

# 产品Url获取


## 产品Url获取


**接口地址**:`/cra/product/query`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:产品获取


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|url|url|query|false|string||
eg: https://www.amazon.co.uk/dp/B097F5HPX5

**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|R|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|状态码|integer(int32)|integer(int32)|
|data|承载数据|object||
|msg|返回消息|string||
|success|是否成功|boolean||


**响应示例**:
```javascript
{
  "code": 200,
  "success": true,
  "data": {
    "product": {
      "url": "https://www.amazon.co.uk/dp/B097F5HPX5",
      "imgSrc": "https://images-eu.ssl-images-amazon.com/images/I/81PKfMFihiS.__AC_SY300_SX300_QL70_ML2_.jpg",
      "productTitle": " Acer Swift 3 SF314-42 14 inch Laptop - (AMD Ryzen 5 4500U, 8GB, 512GB SSD, Full HD Display, Windows 10, Purple) ",
      "ourprice": "",
      "category": "",
      "subCategory": "",
      "briefly": [
        " About this item ",
        " This fits your . ",
        "Make sure this fits",
        "by entering your model number.",
        " THIN, LIGHT & PREMIUM: The stylish silver aluminium body weighs just 1.2kg and is less than 16mm thin, so you can easily carry it with you all day ",
        " POWERFUL PERFORMANCE: The combined performance of the AMD Ryzen 5 APU and 8GB of RAM ensures everything will run smoothly ",
        " VISIBLY STUNNING: The 14\" Full HD IPS screen combines incredibly sharp detail, vivid lifelike colours and wide viewing angles for a brilliant visual experience ",
        " PLENTY OF STORAGE: With a 512GB SSD, you get plenty of room for all your apps, documents and media as well as lightning-fast performance ",
        " ALL-DAY BATTERY: The battery lasts up-to an amazing 13 hours on a single charge, allowing you to use it all day without having to worry about charging ",
        "›",
        "See more product details"
      ],
      "productExtension": {
        "Brand": "Acer",
        "Series": "Swift 3 SF314-42",
        "Specific uses for product": "Multimedia, Personal",
        "Screen size": "14 Inches",
        "CPU model": "Ryzen 5",
        "CPU manufacturer": "AMD",
        "Processor count": "6",
        "Operating System": "Windows 10",
        "Graphics Chipset Brand": "AMD",
        "Colour": "Purple"
      },
      "skuInfo": [
        {
          "_id": "6127538bf14e8b5ba5f1ffab",
          "productId": "6127538bf14e8b5ba5f1ffaa",
          "name": "",
          "value": "",
          "img": [
            {
              "large": "https://m.media-amazon.com/images/I/41Cz2XpM4US._AC_.jpg",
              "thumb": "https://m.media-amazon.com/images/I/41Cz2XpM4US._AC_US40_.jpg",
              "hiRes": "https://m.media-amazon.com/images/I/81PbauA5TGS._AC_SL1500_.jpg",
              "variant": "MAIN",
              "main": {
                "https://m.media-amazon.com/images/I/81PbauA5TGS._AC_SX355_.jpg": [
                  "266",
                  "355"
                ],
                "https://m.media-amazon.com/images/I/81PbauA5TGS._AC_SX569_.jpg": [
                  "427",
                  "569"
                ],
                "https://m.media-amazon.com/images/I/81PbauA5TGS._AC_SX679_.jpg": [
                  "509",
                  "679"
                ],
                "https://m.media-amazon.com/images/I/81PbauA5TGS._AC_SX425_.jpg": [
                  "319",
                  "425"
                ],
                "https://m.media-amazon.com/images/I/81PbauA5TGS._AC_SX466_.jpg": [
                  "350",
                  "466"
                ],
                "https://m.media-amazon.com/images/I/81PbauA5TGS._AC_SX522_.jpg": [
                  "392",
                  "522"
                ],
                "https://m.media-amazon.com/images/I/81PbauA5TGS._AC_SX450_.jpg": [
                  "338",
                  "450"
                ]
              }
            }
          ],
          "price": "",
          "attributeValue": {
            "Style Name": "Ryzen 5",
            "Colour Name": "Silver"
          },
          "attributeValueStr": "Ryzen 5 Silver"
        }
      ],
      "technicalDetailMap": {
        "Graphics Card Interface": "Integrated",
        "Number Of Lithium Ion Cells": "3",
        "Number of USB 2.0 Ports": "1",
        "Batteries": "1 Lithium ion batteries required. (included)",
        "Maximum Memory Supported": "8 GB",
        "Hard Disk Description": "SSD",
        "Product Dimensions": "21.89 x 32.34 x 1.59 cm; 1.2 Kilograms",
        "Lithium Battery Energy Content": "48 Watt Hours",
        "Processor Type": "Ryzen 5",
        "Number of USB 3.0 Ports": "1",
        "Lithium Battery Packaging": "Batteries contained in equipment",
        "Connectivity Type": "Wi-Fi",
        "Processor Brand": "AMD",
        "Are Batteries Included": "Yes",
        "Memory Technology": "LPDDR4",
        "Manufacturer": "Acer",
        "Operating System": "Windows 10",
        "Standing screen display size": "14 Inches",
        "Color": "Purple",
        "Graphics Card Description": "Integrated",
        "Graphics RAM Type": "Shared",
        "Item model number": "NX.HULEK.005",
        "Processor Speed": "2.3",
        "Brand": "Acer",
        "Series": "Swift 3 SF314-42",
        "Processor Count": "6",
        "Graphics Chipset Brand": "AMD",
        "Item Weight": "1.2 kg"
      },
      "imgText": {
        "img": [
          "https://m.media-amazon.com/images/S/aplus-media-library-service-media/860b0c17-a173-456d-a75b-9bec59a5fa74.__CR0,5,970,291_PT0_SX600_V1___.png",
          "https://m.media-amazon.com/images/S/aplus-media-library-service-media/e5e9a140-d0ad-46a2-b406-45ec058ff9bf.__CR0,0,300,300_PT0_SX300_V1___.png",
          "https://m.media-amazon.com/images/S/aplus-media-library-service-media/39380e8e-5f27-409a-b5a8-258108fa0770.__CR0,0,300,300_PT0_SX300_V1___.png",
          "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b76faa23-1d9c-4967-8b53-a998a307a5b3.__CR0,0,300,300_PT0_SX300_V1___.png",
          "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ac2c7f90-6ade-408e-a355-52e8fae2d45e.__CR0,0,300,300_PT0_SX300_V1___.png",
          "https://m.media-amazon.com/images/S/aplus-media-library-service-media/dfe5ea58-0420-4bde-83b3-ecba14b2da65.__CR0,0,300,300_PT0_SX300_V1___.png",
          "https://m.media-amazon.com/images/S/aplus-media-library-service-media/865d6122-b7d3-405a-88b0-3ae150e8dca4.__CR0,0,300,300_PT0_SX300_V1___.png"
        ],
        "text": [
          "From the manufacturer",
          " Colourful, Stylish & Lightweight ",
          " Customers will look the part as they carry around this slim and lightweight notebook available in multiple colours. By weighing up to 1.2kg and, thanks to the aluminium & magnesium-aluminium metal chassis being up to 15.95mm thin it’s very portable. ",
          " Powerful Productivity ",
          " The Swift 3 packs a lot of power into the chassis. The latest AMD Ryzen 5 Mobile Processors with Radeon Graphics supercharges your laptop for work and play. It also includes a 512GB PCIe Gen 3 8Gb/s SSD and 8GB LPDDR4X RAM1. ",
          " Precision Imagery ",
          " Eye popping colours and details bring images and videos to life. Through the use of thin bezels of up to 5.5mm and a screen-to-body ratio of up to 82.73%, users see more of the 14” FHD IPS screen. ",
          "Read more",
          " Long Lasting Battery ",
          " Spending all-day on the move requires a large battery, and the Swift 3’s battery will last for up to 12-hours. In cases of emergency it can also be fast charged to provide 4-hours use after 30-minutes charge. ",
          " The Latest Connectivity ",
          " Users get easy updates to the latest information with a full range of connectivity options. Dual band Wi-Fi 6 (802.11ax) improves the average network throughput by up to 3 times and reduces latency by up to 75% compared to Wi-Fi 5 (802.11ac). Through the use of full function USB-C SuperSpeed USB 10Gbps users get superfast data transfer and display port functionality and it can also be used for power delivery. ",
          " Work Smarter ",
          " Wake On Voice (WoV) enables users to activate and query Windows 10 when the screen is off. It also allows interaction with Cortana while the device is in Modern Standby mode. Password free access gives users quicker access to the notebook. The embedded fingerprint reader is a quick and secure way for Windows Hello to verify a user’s identity without a password. Continue typing after the sun goes down with the illuminated keyboard. ",
          "Read more"
        ]
      }
    }
  },
  "msg": "操作成功"
}
```