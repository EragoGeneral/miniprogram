var formatSeconds = function(value){
  var time = parseFloat(value);
  var h = Math.floor(time/3600);
  var m = Math.floor((time - h*3600)/60);
  var s = time - h*3600 - m*60;

  return [h, m, s].map(formatNumber).join(':');

  function formatNumber(n){
    n = n.toString();
    return n[1] ? n : '0' + n
  }
}

var interval;

// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formatRecordTime : '00:00:00',
    recordTime: 0,
    recordFile: ''
  },

  startTap:function(){
    var self = this;
    interval = setInterval(function(){
      self.data.recordTime += 1;
      self.setData({
        formatRecordTime: formatSeconds(self.data.recordTime)
      });
    }, 1000);
    wx.startRecord({
      success: function(res){
        console.log(res);
        self.setData({
          formatRecordTime: formatSeconds(self.data.recordTime),
          recordFile: res.tempFilePath
        });  
      },
      complete:function(){
        clearInterval(interval);
      }
    });

  },

  endTap:function(){
    wx.stopRecord();
    clearInterval(interval);
    this.setData({
      formatRecordTime: '00:00:00',
      recordTime: 0
    });
  },

  playTap:function(){
    var self = this;
    wx.playVoice({
      filePath : self.data.recordFile,
      complete:function(){}
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