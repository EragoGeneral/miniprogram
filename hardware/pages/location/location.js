// pages/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  mapTap:function(){
    wx.openLocation({
      latitude: 30.657427,
      longitude: 104.066163,
      scale:28,
      name:'成都市天府广场',
      address:'成都市天府广场',
      success:function(res){
        console.log(res);
      },
      fail:function(err){
        console.log(err);
      },
      complete:function(info){
        console.log(info);
      }
    })
  },

  locationTap:function(){
    var self = this;
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        console.log(res);
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale:28,
          name:'当前位置',
          address:'未知地址',
          success:function(res){
            console.log(res);
          },
          fail:function(err){
            console.log(err);
          },
          complete:function(info){
            console.log(info);
          }
        })
      },
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