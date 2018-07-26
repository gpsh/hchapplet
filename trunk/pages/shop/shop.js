// pages/shop/shop.js
const $ = getApp()
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
        currentTab: 0, //tab页面
    },
    onInit: function (swiper) {
        console.log("走了")
        swiper.container[0].style.height = swiper.slides[swiper.activeIndex].offsetHeight + 'px';
    },
    onSlideChangeEnd: function (swiper) {
        swiper.container[0].style.height = swiper.slides[swiper.activeIndex].offsetHeight + 'px';
    },
    //滑动切换
    swiperTab: function (e) {
        var that = this;
        that.setData({
            currentTab: e.detail.current
        });
    },
    //点击切换
    clickTab: function (e) {
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
    onLoad: function (options) {
        var that = this;
        console.log(wx.getStorageSync("wxuserinfo").avatarUrl);
        wx.setNavigationBarTitle({
            title: options.titlename//页面标题为路由参数
        })
        $.ajax({
            method: 'post',
            url: 'QueryAccount/Corporation',
            data: {
                OpenId: wx.getStorageSync("userinfo").openId,
            }
        }).then(response => {
            var data = response.response
            console.log(JSON.stringify(data));
            that.setData({
                userinfo: data,
                headerimg: data.logo = "null" ? wx.getStorageSync("wxuserinfo").avatarUrl : data.logo,
                corporationName: data.corporationName = "null" ? "您还未编辑公司信息" : data.corporationName,
                Name: data.name = "null" ? wx.getStorageSync("wxuserinfo").nickName : data.name,
                phone: data.phone = "null" ? "您还未编辑个人信息" : data.phone,
            })
        })
    },
})