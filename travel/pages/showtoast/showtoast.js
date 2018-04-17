// pages/showtoast/showtoast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  showtoast1Tap:function(){
    wx.showToast({
      title: '默认1.5 秒关闭的loading消息提示框',
      icon: 'loading',
      success: function(){
        console.log('success 回调，可在这里编写其他代码');
      },
      complete: function(){
        console.log('complete 回调，可在这里编写其他代码');
      }
    });
  },

  showtoast2Tap: function () {
    wx.showToast({
      title: '5秒关闭的loading消息提示框',
      icon: 'loading',
      duration: 5000
    });
  },

  showtoast3Tap: function () {
    wx.showToast({
      title: '默认1.5 秒关闭的toast消息提示框',
      icon: 'success'
    });
  },

  showtoast4Tap: function () {
    wx.showToast({
      title: '5 秒关闭的toast消息提示框',
      icon: 'success',
      duration: 5000
    });
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