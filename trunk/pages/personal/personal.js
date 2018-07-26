// pages/personal/personal.js
let $ = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        corporationId: "",
        headerimg:"",
        corporationName:"",
        Name:"",
        phone:"",
        userinfo:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        console.log(wx.getStorageSync("wxuserinfo").avatarUrl);
        that.setData({
            corporationId: options.corporationId
        });
        $.ajax({
            method: 'post',
            url: 'QueryAccount/AccountSimple',
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
    clickhref: function (event) {
        console.log(event.currentTarget.dataset.href)
        wx.navigateTo({
            url: event.currentTarget.dataset.href
        })
    },
    clickhrefto: function (event) {
        wx.navigateTo({
            url: event.currentTarget.dataset.href + "?titlename=" + this.data.corporationName
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})