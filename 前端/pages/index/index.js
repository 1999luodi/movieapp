// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    bookindex:-1,
    backimgs: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.Jen_0830s6ch_xJe-9PgxwHaD4?w=310&h=180&c=7&r=0&o=5&dpr=1.12&pid=1.7','https://ts1.cn.mm.bing.net/th/id/R-C.8e4bde369a74d319805203bb5b89cb28?rik=pmGXR9fkDGfFlQ&riu=http%3a%2f%2fwww.cinema.com.cn%2fupload%2f2012-07%2f12071715484967.jpg&ehk=3AePApLRdlxJUEzoBPUHfVJp%2fEWytGRc%2fbTMN7CYGTc%3d&risl=&pid=ImgRaw&r=0', 'https://tse4-mm.cn.bing.net/th/id/OIP-C.RGw7S1dGNC3zIExybwbNEgHaFf?w=219&h=180&c=7&r=0&o=5&dpr=1.12&pid=1.7', 'https://tse4-mm.cn.bing.net/th/id/OIP-C.5y0-ZJZO-fKAu_4w15yywwHaFR?w=244&h=180&c=7&r=0&o=5&dpr=1.12&pid=1.7','https://ts1.cn.mm.bing.net/th/id/R-C.787f509cd356670f3d738287a65f4ab4?rik=BaAI85mhBSGw2Q&riu=http%3a%2f%2fimage11.m1905.cn%2fuploadfile%2f2017%2f0803%2f20170803092311755212.jpg&ehk=1%2fV42n1dDCslXV6aHtgmer3PaSv2Zwkn8rZ8j%2f45210%3d&risl=&pid=ImgRaw&r=0'],
   
    //轮播
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    msg:"dsafsaf",
  // 导航栏
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    moviedata:[],
  },



  onLoad:function(e){
   var that=this;
    wx.request({
      url: 'http://127.0.0.1:8000/movie/alljson/',
      Headers : { ' content-type ' : ' application/JSON ' },
      success:function(res){
       
          that.setData({
           'moviedata':res.data.data
          })
          console.log(res);
      }
    })
  },
  // 事件处理函数

  getdetailtop:function(e){
    var bookid = e.currentTarget.id;
    var viewDataSet = e.currentTarget.dataset;
    var index = viewDataSet.index;
   this.setData({
     bookindex:index,
     
   });
   //console.log(e);
    
  
  },
  

  

})
