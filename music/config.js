(function(module){
    var exports = module.exports={};
    var appid = 27426;
    var secret = "f7a6a43aef0649b5bd1a051e8f5aa536";
    var param = "?showapi_appid="+appid + "&showapi_sign="+secret;
    var hotUrl = "http://route.showapi.com/213-4" + param;
    var searchByNameUrl = "http://route.showapi.com/213-1" + param;
    var searchByIdUrl = "http://route.showapi.com/213-2" + param;

    module.exports = {
      config: {
        hotUrl: hotUrl,
        searchByNameUrl: searchByNameUrl,
        searchByIdUrl: searchByIdUrl
      }
    }
})(module);