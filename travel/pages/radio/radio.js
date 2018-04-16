// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {name: 'Europe', value:'欧洲'},
      {name: 'America', value: '美洲', checked:'true'},
      {name: 'Africa', value:'非洲'},
      {name: 'SoutheastAsia', value: '东南亚' },
      {name: 'other', value: '其他' }
    ]
  },

  radioChange:function(e){
    console.log(e.detail.value);
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