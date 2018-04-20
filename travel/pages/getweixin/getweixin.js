// pages/getweixin/getweixin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html:''
  },

  getweixinTap:function(){
    var self = this;
    wx.request({
      url: 'https://test79.ubtrobot.com/operation-rest/awards/list/1437',
      //url: 'https://mp.weixin.qq.com',
      data:{

      },
      header:{
        'Content-Type': 'application/json'
      },
      success:function(res){
        console.log(res);
        var content = '';
        for(var i=0; i<res.data.length; i++){
          content+=res.data[i].rewardsName+',';
        }
        self.setData({
          html: content
        })
        /*self.setData({
          html: res.data
        })*/
      }
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