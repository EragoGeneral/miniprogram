// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:{
      poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4083548368,3043525262&fm=58',
      name:'《醉赤壁》',
      author:'林俊杰',
      src:'http://fs.open.kugou.com/3b47367d2bb3072679e686db704d7eae/5ad6c8c4/G007/M03/1C/0F/p4YBAFS3VoqAaluzAETEwUtAT7w193.mp3'
    },
    audioAction:{
      method:'pause'
    }
  },

  audioPlay: function(e){
    this.adContr.play();
  },
  audioPause: function(e){
    this.adContr.pause();
  },
  audio20: function(e){
    this.adContr.seek(20);
  },
  audioStart: function(e){
    this.adContr.seek(0);
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
    this.adContr = wx.createAudioContext('audio1');
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