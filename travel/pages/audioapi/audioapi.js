// pages/audioapi/audioapi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  tapPlay:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://fs.open.kugou.com/3b47367d2bb3072679e686db704d7eae/5ad6c8c4/G007/M03/1C/0F/p4YBAFS3VoqAaluzAETEwUtAT7w193.mp3',
      title:'《醉赤壁》',
      coverImgUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4083548368,3043525262&fm=58'
    });
  },

  tapPause:function(){
    wx.pauseBackgroundAudio();
  },
  tapSeek:function(){
    wx.seekBackgroundAudio({
      position: 60
    })
  },
  tapStop:function(){
    wx.stopBackgroundAudio();
  },
  tapGetPlayState:function(){
    wx.getBackgroundAudioPlayerState({
      success:function(res){
        console.log(res);
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.onBackgroundAudioPlay(function(){
      console.log('监听音乐播放，开始播放音乐');
    });
    wx.onBackgroundAudioPause(function () {
      console.log('监听音乐暂停，暂停了音乐');
    });
    wx.onBackgroundAudioStop(function () {
      console.log('监听音乐停止，停止了音乐');
    });    
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