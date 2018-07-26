//index.js
//获取应用实例
let $ = getApp()
//var common = require("../../js/class/img-retina.js"); //将图片处理js链接过来
//内容区，车标表格数据
var caricon = [
    {
        id: 0,
        icon: "https://www.che3721.com/applet/images/index/lanbojini@3x.png",
        lable: "兰博基尼"
    }, {
        id: 1,
        icon: "https://www.che3721.com/applet/images/index/binli@3x.png",
        lable: "宾利"
    }, {
        id: 2,
        icon: "https://www.che3721.com/applet/images/cartool/ft.jpg",
        lable: "丰田"
    }, {
        id: 3,
        icon: "https://www.che3721.com/applet/images/index/aodi@3x.png",
        lable: "奥迪"
    }, {
        id: 4,
        icon: "https://www.che3721.com/applet/images/index/dazhong@3x.png",
        lable: "大众"
    }, {
        id: 5,
        icon: "https://www.che3721.com/applet/images/index/msld@3x.png",
        lable: "玛莎拉蒂"
    }, {
        id: 6,
        icon: "https://www.che3721.com/applet/images/index/fll@3x.png",
        lable: "法拉利"
    }, {
        id: 7,
        icon: "https://www.che3721.com/applet/images/index/mbh@3x.png",
        lable: "迈巴赫"
    }, {
        id: 8,
        icon: "https://www.che3721.com/applet/images/index/kdlk@3x.png",
        lable: "凯迪拉克"
    }, {
        id: 9,
        icon: "https://www.che3721.com/applet/images/index/ft@3x.png",
        lable: "更多"
    },
]


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
        //内容-车标表格区
        cariconlist: [],
        //内容-每日精选
        cardaylist:[],
        //用户信息
        userinfo: {}
    },
    onLoad: function (res) {
        var that = this;
        $.ajax({
            method: 'post',
            url: 'QueryCar/BrandHot',
            data: {}
        }).then(response => {
            console.log(JSON.stringify(response.response));
            that.setData({
                cariconlist: response.response
            })
        });
        $.ajax({
            method: 'post',
            url: 'QueryCar/LaterTodayCars',
            data: {
                IndexCarId: '',
                PageSize: 4
            }
        }).then(response => {
            console.log(JSON.stringify(response.response));
            that.setData({
                cardaylist: response.response
            })
        })
    },
    clickhref: function (event) {
        console.log(event.currentTarget.dataset.href)
        wx.navigateTo({
            url: event.currentTarget.dataset.href
        })
    },
    clicktaphref:function(){
        var that = this;
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                        success: function (res) {
                            console.log(res.userInfo)
                            that.setData({
                                userinfo: res.userInfo
                            });
                            wx.setStorage({
                                key: 'wxuserinfo',
                                data: res.userInfo,
                            })
                        }
                    });
                }
            }
        })
        wx.login({
            success: function (res) {
                console.log(JSON.stringify(that.data.userinfo));
                if (res.code) {
                    //发起网络请求
                    wx.request({
                        url: $.globalData.urlhref + 'QueryAccount/Login',
                        method: "POST",
                        header: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            request: {
                                code: res.code,
                                WechatName: that.data.userinfo.nickName,
                                Sex: that.data.userinfo.gender,
                                Logo: that.data.userinfo.avatarUrl
                            }
                        },
                        success: (res) => {
                            wx.hideLoading()
                            if (res.statusCode == 200) {
                                console.log(res.data.response);
                                if (res.data.response.corporationId == null) {
                                    console.log("不是会员")
                                    wx.navigateTo({
                                        url: "/pages/personal/personal?corporationId=false"
                                    })
                                } else {
                                    wx.navigateTo({
                                        url: "/pages/personal/personal?corporationId=true"
                                    })
                                }
                                wx.setStorage({
                                    key: 'userinfo',
                                    data: res.data.response,
                                })
                            } else {
                                //错误信息处理
                                wx.showModal({
                                    title: '提示',
                                    content: '服务器错误，请联系客服',
                                    showCancel: false,
                                })
                            }
                        },
                        fail: (data) => {
                            console.log(data)
                            wx.hideLoading()
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        });
    }
})

