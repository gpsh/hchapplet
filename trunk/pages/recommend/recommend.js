// pages/recommend/recommend.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        datatime:'时间',
        datamany:'价格',
        databrand:'品牌',
        array: ['20万元', '50万元', '100万元', '200万元'],
        arraybrand:['奔驰','宝马','奥迪','大众','宾利','劳斯莱斯'],
        isCheckeda: false,
        isCheckedb: false,
        isCheckedc: false,
        isCheckedd: false,
    },
    clickstylea(){
        this.setData({
            isCheckeda: true
        })
    },
    clickstyleb() {
        this.setData({
            isCheckedb: true
        })
    },
    clickstylec() {
        this.setData({
            isCheckedc: true
        })
    },
    clickstyled() {
        this.setData({
            isCheckedd: true
        })
    },
    bindDateChange: function (e) {
        console.log('时间', e.detail.value)
        this.setData({
            datatime: e.detail.value
        })
    },
    bindPickerChange: function (e) {
        var arrylist = this.data.array
        console.log('价格', arrylist[e.detail.value])
        this.setData({
            datamany: arrylist[e.detail.value]
        })
    },
    bindbrandChange: function (e) {
        var arrylist = this.data.arraybrand
        console.log('品牌', arrylist[e.detail.value])
        this.setData({
            databrand: arrylist[e.detail.value]
        })
    },
    clickhref: function (event) {
        console.log(event.currentTarget.dataset.href)
        wx.navigateTo({
            url: event.currentTarget.dataset.href
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})