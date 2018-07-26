//获取应用实例
const app = getApp()


var adds = {};
Page({
    data: {
        img_arr: [],
        formdata: '',
        region: ['北京市', '北京市', '东城区'],
    },
    formSubmit: function (e) {
        var id = e.target.id
        adds = e.detail.value;
        adds.program_id = app.jtappid
        adds.openid = app._openid
        adds.zx_info_id = this.data.zx_info_id
        this.upload()
    },

    upload: function () {
        var that = this
        for (var i = 0; i < this.data.img_arr.length; i++) {
            wx.uploadFile({
                url: 'https:***/submit',
                filePath: that.data.img_arr[i],
                name: 'content',
                formData: adds,
                success: function (res) {
                    console.log(res)
                    if (res) {
                        wx.showToast({
                            title: '已提交发布！',
                            duration: 3000
                        });
                    }
                }
            })
        }
        this.setData({
            formdata: ''
        })
    },
    upimg: function () {
        var that = this;
        if (this.data.img_arr.length < 3) {
            wx.chooseImage({
                count:9,   //图片个数
                sizeType: ['original', 'compressed'],
                success: function (res) {
                    that.setData({
                        img_arr: that.data.img_arr.concat(res.tempFilePaths)
                    })
                }
            })
        } else {
            wx.showToast({
                title: '最多上传9张图片',
                icon: 'none',
                duration: 3000
            });
        }
    },  
    previewImage:function(){  //预览图片
        console.log("预览" + e.currentTarget.dataset.imgindex);
        wx.previewImage({
            urls: this.data.img_arr, // 需要预览的图片http链接列表
        })
    },  
    deleteImg:function(e){  //删除图片
        var that = this; 
        var data = this.data.img_arr;
        var index = e.currentTarget.dataset.imgindex;
        wx.showModal({
            title: '温馨提示',
            content:'您确定删除了第' + (index + 1) +'张图片吗',
            success:function(res){
                if (res.confirm) {
                    data.splice(index, 1);
                    that.setData({ img_arr: data });
                } else if (res.cancel) {}
            }
        });
    },
    bindDateChange: function (e) { //时间选择
        console.log(JSON.stringify(e)+'picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            date: e.detail.value
        })
    },
    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            region: e.detail.value
        })
    }
})