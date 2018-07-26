// pages/datalis/datalis.js
const app = getApp()
Page({
    data: {
        //图片轮播区
        imgUrls: [
            'https://www.che3721.com/applet/images/index/ad_jpg@3x.png',
            'https://www.che3721.com/applet/images/index/bm_jpg@3x.png',
            'https://www.che3721.com/applet/images/index/dagef_jpg@3x.png',
        ],
        indicatorDots: true,
        indicatorColor: "rgba(255,255,255,.5)",
        indicatorActiveColor: "#FFFFFF",
        circular: true,
        autoplay: true,
        interval: 3000, 
        duration: 800,

    }
})