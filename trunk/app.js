//app.js
//地址
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        //   wx.getUserInfo({
        //     success: res => {
        //       // 可以将 res 发送给后台解码出 unionId
        //       this.globalData.userInfo = res.userInfo

        //       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //       // 所以此处加入 callback 以防止这种情况
        //       if (this.userInfoReadyCallback) {
        //         this.userInfoReadyCallback(res)
        //       }
        //     }
        //   })
        }
      }
    })
  },
  globalData: {
      urlhref:"https://www.che3721.com/"
  },
    ajax(model) {
        wx.showLoading({
            title: '加载中',
        })
        //拼接url
        model.url = "https://www.che3721.com/" + model.url;
        //get参数拼接
        if (model.method == "get" && model.data !== undefined) {
            for (let k in model.data) {
                if (model.data[k].toString() !== '') {
                    model.url = model.url + "&" + k + "=" + model.data[k];
                }
            }
            model.data = '';
        }
        //返回Promise对象
        return new Promise(
            function (resolve) {
                console.log("地址" + model.url + "/**/参数" + JSON.stringify(model.data));
                wx.request({
                    method: "POST",
                    url: model.url,
                    header: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        "request": model.data
                    },
                    success: (res) => {
                        wx.hideLoading()
                        if (res.statusCode == 200) {
                            resolve(res.data);
                        } else {
                            //错误信息处理
                            wx.showModal({
                                title: '提示',
                                content: '服务器错误，请联系客服',
                                showCancel: false,
                            })
                        }
                    },
                    fail:(data) => {
                        console.log(data)
                        wx.hideLoading()
                    }
                })
            }
        )
    },
})