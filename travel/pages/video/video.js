// pages/video/video.js
function getRandomColor() {
  var colorStr = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  return "#" + "000000".substring(0, 6 - colorStr) + colorStr;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue : '',
    src: 'http://video.ubtrobot.com/jimu/auideo/video_20180130_171921.mp4',
    danmuList:[
      {
        text:'第 2s 出现的弹幕',
        color:'#ff0000',
        time:2
      },
      {
        text: '第5s出现的弹幕',
        color: '#ff00ff',
        time:5
      }
    ]
  },

  videoErrorCallback: function(e){
    console.log('视频错误信息：');
    console.log(e.detail.errMsg);
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
    this.videoContext = wx.createVideoContext('myVideo');
  },

  bindInputBlur:function(e){
    this.inputValue = e.detail.value;
  },

  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:getRandomColor()
    });
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

