// pages/carbrand/carbrand.js

let $ = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        nav_list: [],
        open: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        $.ajax({
            method: 'post',
            url: 'QueryCar/BrandAll',
            data: {}
        }).then(response => {
            // console.log(JSON.stringify(response.response));
            that.setData({
                list: response.response
            })
        });
    },
    //列表的操作函数
    open_list: function () {
        //此处进行操作
        this.setData({
            open: false
        });
    },
    //左侧导航的开关函数
    offCanvas: function (event) {
        var that = this;
        var carid = event.currentTarget.dataset.carid;
        if (this.data.open) {
            this.setData({
                open: false
            });
        } else {
            this.setData({
                open: true
            });
            $.ajax({
                method: 'post',
                url: 'QueryCar/BrandSeries',
                data: {
                    BrandId: carid
                }
            }).then(response => {
                console.log(JSON.stringify(response.response));
                that.setData({
                    nav_list: response.response
                })
            });
        }
    },
    clickhref: function (event) {
        console.log(event.currentTarget.dataset.href)
        wx.navigateTo({
            url: event.currentTarget.dataset.href
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