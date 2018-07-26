//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        userinfo:{}
    },
    onLoad: function () {
        var that = this;
        // 查看是否授权
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                        success: function (res) {
                            console.log(res.userInfo)
                            that.setData({
                                userinfo: res.userInfo
                            })
                        }
                    });
                }
            }
        })
    },
    bindGetUserInfo: function (e) {
        console.log(e.detail.userInfo)
        wx.redirectTo({
            url: '../index/index',  //进入首页
            // url: '../carbrand/carbrand',  //进入品牌选择
            // url: '../datalis/datalis',  //进入详情页
            // url: '../personal/personal',  //进入个人中心
            // url: '../recommend/recommend',  //超值推荐
            // url: '../screen/screen',  //高级筛选
            // url: '../shop/shop',  //公司主页
            // url: '../upload/upload',  //发布车辆
            
            // url: '../my/my',    //进入测试页面
        })
    }

})



// setTimeout(function () {
//   wx.redirectTo({
//     url: '../index/index'
//   })
// }, 2000)