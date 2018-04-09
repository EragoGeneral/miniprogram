// pages/calc/calc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:"0",
    id1:"history",
    id2:"clear",
    id3:"back",
    id4:"div",
    id5:"num_7",
    id6:"num_8",
    id7:"num_9",
    id8:"mul",
    id9:"num_4",
    id10:"num_5",
    id11:"num_6",
    id12:"sub",
    id13:"num_1",
    id14:"num_2",
    id15:"num_3",
    id16:"add",
    id17:"negative",
    id18:"num_0",
    id19:"dot",
    id20:"equ"
  },

  clickButton:function(e){
    var data = this.data.result;
    if(e.target.id >= 'num_0' && e.target.id <= 'num_9'){
      data += e.target.id.split("_")[1];
      if(this.data.result == '0'){
        data = e.target.id.split("_")[1];
      }
    }else{
      console.log(e.target.id);
    }

    this.setData({
      result:data
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