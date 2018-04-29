// pages/search/search.js
var config = require('../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    loading: false,
    list: []
  },

  inputing: function(e){
    this.setData({
      value: e.detail.value
    });
  },

  bindSearch: function(){
    var self = this;
    this.setData({
      loading: !self.data.loading
    });

    wx.request({
      url: config.config.searchByNameUrl,
      data:{keyword:self.data.value},
      success: function(e){
        if(e.statusCode == 200){
          self.setData({
            list: e.data.showapi_res_body.pagebean.contentlist,
            loading: !self.data.loading
          });
          wx.setStorageSync('songlist', e.data.showapi_res_body.pagebean.contentlist);
        }
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