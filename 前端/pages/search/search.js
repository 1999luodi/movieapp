// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
     /**
     * 页面的初始数据
     */
    data: {
       movies:[],
       list:["吴京","徐克","黄渤"]

    },
    
  onLoad(e){
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:8000/movie/alljson/',
      Headers : { ' content-type ' : ' application/JSON ' },
      success:function(e){
          var movies=e.data.data;
          console.log(movies);
          console.log('dsafasfads');
          that.setData({
              'movies':movies,
          })
      }
    })
  },
  search(value){
var search=value.detail.value;
//console.log(search);
var old=this.data.list;
console.log(old)
    
if(old.length>=3){
    old.splice(2);
    old.unshift(search);
}
this.setData({
    'list':old,
})
console.log(old)
var that=this;

    wx.request({
      url: 'http://127.0.0.1:8000/movie/search?value='+search,
      method:"GET",
      header:{
        'content-type':'application/text'
      },
      success:res=>{
          var movies=res.data.data;
         
      
        if(movies.length == 0){
            console.log("数据为空");
        }else{
            console.log(movies);
        this.setData({
            'movies':[]
        });
        this.setData({
            'movies':res.data.data
            });
        
        } }
    })
  },

   // 搜索
  showInput() {
    this.setData({
      inputShowed: true,
    });
  },
  hideInput() {
    this.setData({
      inputVal: '',
      inputShowed: false,
    });
  },
  clearInput() {
    this.setData({
      inputVal: '',
    });
  },
  inputTyping(e) {
    this.setData({
      inputVal: e.detail.value,
    });
  },
})