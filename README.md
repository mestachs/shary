# Shary

Tried to solve my sharing problem from laptop to mobile... with just a [qr code](https://mestachs.github.io/shary/).

Want to share text or url from your laptop to your mobile ?
Type/Paste your content, point your telephone camera at the screen that's it.
It's generally safe. The data is only in your browser and on your screen. Just don't let people screenshot your screen.


## Still don't use a usage case ? 

Have you ever tried to type an ngrok url via mobile ?

It's a super long url error prone to type...
And you need to configure your app to point at it ?
Open shary, paste the url

![qrcode](https://pbs.twimg.com/media/FbK4qzMVUAEH4HX.png)

Then open your camera app from your mobile

![phone screenshot](https://pbs.twimg.com/media/FbK5GN4VUAAaICk.jpg)


## Wan't to generate a qr code for free wifi ? 

Paste this

```
WIFI:S:<SSID>;T:<WPA|WEP|>;P:<password>;;
```

more info about https://github.com/zxing/zxing/wiki/Barcode-Contents#wi-fi-network-config-android-ios-11

## Want to generate a qr code for contact info


```
MECARD:N:Doe,John;TEL:13035551212;EMAIL:john.doe@example.com;;
```

https://en.wikipedia.org/wiki/MeCard_(QR_code)


## Share a Position on a map

https://mestachs.github.io/shary/?q=geo:0.0408829980245729,18.2537636221341


https://blog.shahednasser.com/generate-10-qr-code-types-with-react/

## Share for payment

see https://en.wikipedia.org/wiki/EPC_QR_code

## want to know more about qr codes ? 

https://twitter.com/DanHollick/status/1570040185500626947
