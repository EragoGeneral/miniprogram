//index.js
//获取应用实例
const app = getApp()

var util = require('../../utils/util.js');

Page({
  data: {
    weather:{
      // wendu: 18,
      // ganmao: '昼夜温差较大，较易发生感冒，请适当增减衣服。体质较弱的朋友请注意防护。',
      // yesterday:{
      //   date:'17日 星期四',
      //   type: '阴',
      //   fx: '南风',
      //   fl: '微风级',
      //   low:'低温 8℃',
      //   high:'高温 16℃'
      // },
      // forecast:[
      //   {
      //     date:'18日星期五',
      //     type:'阴',
      //     high:'高温 16℃',
      //     low:'低温 8℃',
      //     fengxiang:'南风',
      //     fengli:'微风级'
      //   },
      //   {
      //     date: '18日星期五',
      //     type: '阴',
      //     high: '高温 16℃',
      //     low: '低温 8℃',
      //     fengxiang: '南风',
      //     fengli: '微风级'
      //   },
      //   {
      //     date: '18日星期五',
      //     type: '阴',
      //     high: '高温 16℃',
      //     low: '低温 8℃',
      //     fengxiang: '南风',
      //     fengli: '微风级'
      //   },
      //   {
      //     date: '18日星期五',
      //     type: '阴',
      //     high: '高温 16℃',
      //     low: '低温 8℃',
      //     fengxiang: '南风',
      //     fengli: '微风级'
      //   },
      //   {
      //     date: '18日星期五',
      //     type: '阴',
      //     high: '高温 16℃',
      //     low: '低温 8℃',
      //     fengxiang: '南风',
      //     fengli: '微风级'
      //   }
      // ]
    },
    today: '2016-11-18',
    city: '北京',
    inputCity: ''
  },
  //事件处理函数
  
  onLoad: function () {
    this.setData({
      today: util.formatTime(new Date()).split(' ')[0]
    });
    var self = this;
    wx.getLocation({
      success: function(res) {
        wx.request({
          url: 'http://api.map.baidu.com/geocoder/v2/?ak=ASAT5N3tnHIa4APW0SNPeXN5&location='+
          res.latitude + ',' + res.longitude +'&output=json&pois=0',
          data:{},
          header:{
            'Content-Type': 'application/json'
          },
          success:function(res){
            var city = res.data.result.addressComponent.city.replace('市', '');
            self.searchWeather(city);
          }
        })
      },
    })
  },

  inputing:function(e){
    this.setData({inputCity: e.detail.value});
  },

  bindSearch: function(){
    this.searchWeather(this.data.inputCity);
  },

  searchWeather : function(cityName) {
    var self = this;
    wx.request({
      url: 'http://wthrcdn.etouch.cn/weather_mini?city='+cityName,
      data: {},
      header:{
        'Content-Type': 'application/json'
      },
      success: function(res){
        if(res.data.status == 1002){
          wx.showModal({
            title: '提示',
            content: '输入的城市名称有误，请重新输入!',
            showCancel: false,
            success: function(res){
              self.setData({
                inputCity: ''
              });
            }
          })
        }else{
          var weather = res.data.data;
          for(var i=0; i<weather.forecast.length; i++){
            var d = weather.forecast[i].date;
            weather.forecast[i].date  = ' '+d.replace('星期', '  星期');         
            weather.forecast[i].fengli = weather.forecast[i].fengli.replace(']]>', '').replace('<![CDATA[','');
          }
          weather.yesterday.fl = weather.yesterday.fl.replace(']]>', '').replace('<![CDATA[', '');
          self.setData({
            city: cityName,
            weather:weather,
            inputCity: ''
          });
        }
      }
    })
  } 
});


