var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        nav_list: ['ES6学习之路', 'CSS特效', 'VUE实战', '微信小程序'],
        open: false,
    },
    //列表的操作函数
    open_list: function () {
        //此处进行操作
        this.setData({
            open: false
        });
    },
    //左侧导航的开关函数
    offCanvas: function () {
        if (this.data.open) {
            this.setData({
                open: false
            });
        } else {
            this.setData({
                open: true
            });
        }
    }
})