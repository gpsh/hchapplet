// pages/screen/screen.js
// 车型
var carmodellistval = [{
    id: 0,
    name: '不限',
}, {
    id: 1,
    name: '两厢轿车',
}, {
    id: 2,
    name: '三厢轿车',
}, {
    id: 3,
    name: 'SUV',
}, {
    id: 4,
    name: 'MPV',
}, {
    id: 5,
    name: '面包车',
}, {
    id: 6,
    name: '皮卡',
}, {
    id: 7,
    name: '跑车',
}];
// 排放标准
var dischargelistval = [{
    id: 0,
    name: '不限',
}, {
    id: 1,
    name: '国二及以上',
}, {
    id: 2,
    name: '国三及以上',
}, {
    id: 3,
    name: '国四及以上',
}, {
    id: 4,
    name: '国五',
}];
// 变速箱
var speedlistval = [{
    id: 0,
    name: '不限',
}, {
    id: 1,
    name: '手动',
}, {
    id: 2,
    name: '自动',
}];
//座位数
var seatlistval = [{
    id: 0,
    name: '不限',
}, {
    id: 1,
    name: '两座',
}, {
    id: 2,
    name: '四座',
},{
    id: 3,
    name: '五座',
}, {
    id: 4,
    name: '六坐',
}, {
    id: 5,
    name: '七座及以下',
}];
//燃油类型
var fuellistval = [{
    id: 0,
    name: '不限',
}, {
    id: 1,
    name: '汽油',
}, {
    id: 2,
    name: '柴油',
}, {
    id: 3,
    name: '电动',
}, {
    id: 4,
    name: '油电混合',
}];

Page({

    /**
     * 页面的初始数据
     */
    data: {
        carmodellist: carmodellistval,
        begindata:0,
        enddata:2,
        beginmileage:0,
        endmileage:4,
        begindisplacement:0,
        enddisplacement:1,
        discharge: dischargelistval,
        speed: speedlistval,
        seat:seatlistval,
        fuel: fuellistval,
    },
    chooseItem: function (e) {
        var that = this
        var this_checked = e.currentTarget.dataset.id
        //console.log(this_checked);
        var parameterList = this.data.carmodellist//获取Json数组
        for (var i = 0; i < parameterList.length; i++) {
            if (parameterList[i].id == this_checked) {
                parameterList[i].checked = true;//当前点击的位置为true即选中
            }
            else {
                parameterList[i].checked = false;//其他的位置为false
            }
        }
        that.setData({
            carmodellist: parameterList
        })
    },
    slider2change: function (e) {
        console.log(e.detail.value);
        this.setData({
            enddata: e.detail.value
        })
    },
    slider3change: function (e) {
        console.log(e.detail.value);
        this.setData({
            begindata: e.detail.value
        })
    },
    slider4change: function (e) {
        console.log(e.detail.value);
        this.setData({
            endmileage: e.detail.value
        })
    },
    slider5change: function (e) {
        console.log(e.detail.value);
        this.setData({
            beginmileage: e.detail.value
        })
    },
    slider6change: function (e) {
        console.log(e.detail.value);
        this.setData({
            enddisplacement: e.detail.value
        })
    },
    slider7change: function (e) {
        console.log(e.detail.value);
        this.setData({
            begindisplacement: e.detail.value
        })
    },
    dischargeItem: function (e) {
        var that = this
        var this_checked = e.currentTarget.dataset.id
        //console.log(this_checked);
        var parameterList = this.data.discharge//获取Json数组
        for (var i = 0; i < parameterList.length; i++) {
            if (parameterList[i].id == this_checked) {
                parameterList[i].checked = true;//当前点击的位置为true即选中
            }
            else {
                parameterList[i].checked = false;//其他的位置为false
            }
        }
        that.setData({
            discharge: parameterList
        })
    },
    speedItem: function (e) {
        var that = this
        var this_checked = e.currentTarget.dataset.id
        //console.log(this_checked);
        var parameterList = this.data.speed//获取Json数组
        for (var i = 0; i < parameterList.length; i++) {
            if (parameterList[i].id == this_checked) {
                parameterList[i].checked = true;//当前点击的位置为true即选中
            }
            else {
                parameterList[i].checked = false;//其他的位置为false
            }
        }
        that.setData({
            speed: parameterList
        })
    },
    seatItem: function (e) {
        var that = this
        var this_checked = e.currentTarget.dataset.id
        //console.log(this_checked);
        var parameterList = this.data.seat//获取Json数组
        for (var i = 0; i < parameterList.length; i++) {
            if (parameterList[i].id == this_checked) {
                parameterList[i].checked = true;//当前点击的位置为true即选中
            }
            else {
                parameterList[i].checked = false;//其他的位置为false
            }
        }
        that.setData({
            seat: parameterList
        })
    },
    fuelItem: function (e) {
        var that = this
        var this_checked = e.currentTarget.dataset.id
        //console.log(this_checked);
        var parameterList = this.data.fuel//获取Json数组
        for (var i = 0; i < parameterList.length; i++) {
            if (parameterList[i].id == this_checked) {
                parameterList[i].checked = true;//当前点击的位置为true即选中
            }
            else {
                parameterList[i].checked = false;//其他的位置为false
            }
        }
        that.setData({
            fuel: parameterList
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.data.carmodellist[0].checked = true;
        this.data.discharge[0].checked=true;
        this.data.speed[0].checked=true;
        this.data.seat[0].checked = true;
        this.data.fuel[0].checked = true;
        this.setData({
            carmodellist: this.data.carmodellist,
            discharge: this.data.discharge,
            speed: this.data.speed,
            seat: this.data.seat,
            fuel: this.data.fuel,
        })//默认parameter数组的第一个对象是选中的
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