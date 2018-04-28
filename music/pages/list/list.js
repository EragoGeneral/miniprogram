var config = require('../../config.js');

var formatSeconds = function(value){
  var time = parseFloat(value);
  var m = Math.floor(time/60);
  var s = time - m*60;

  return [m, s].map(formatNumber).join(':');

  function formatNumber(n){
    n = n.toString();
    return n[1] ? n : '0' + n;
  }
}

// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    board: '',
    songlist: [],
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var topid = options.type;
    this.setData({
      loading: true
    });

    wx.request({
      url: config.config.hotUrl,
      data: {topid: topid},
      success: function(e){
        if(e.statusCode == 200){
          var obj = e.data.showapi_res_body.pagebean;
          console.log(obj);
          var songlist = obj.songlist;
          for(var i=0; i<songlist.length;i++){
            songlist[i].seconds = formatSeconds(songlist[i].seconds);
          }
          self.setData({
            board: obj.songlist[0].albumpic_big,
            songlist: songlist,
            loading: false
          });
          wx.setStorageSync('songlist', songlist);
        }
      }    
    })
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