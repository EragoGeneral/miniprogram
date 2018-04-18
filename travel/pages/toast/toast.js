// pages/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    hidden2:true
  },

  toast1Change:function(){
    this.setData({
      hidden: true
    });
    console.log("第1个toast组件的 change 事件， 这里可进行其他操作");
  },

  toast2Change: function () {
    this.setData({
      hidden2: true
    });
    console.log("第2个toast组件的 change 事件， 这里可进行其他操作");
  },

  toast1Tap: function(){
    this.setData({
      hidden: false
    });
  },

  toast2Tap: function () {
    this.setData({
      hidden2: false
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