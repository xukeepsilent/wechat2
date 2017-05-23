//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    // 轮播
    images: [
      '../../image/banner_1.jpg',
      '../../image/banner_2.jpg',
      '../../image/banner_3.jpg',
      '../../image/banner_4.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    // nav
    navs: [
      {
        image: "../../image/Capsicum_1.png",
        text: '冠军榜'
      }, {
        image: "../../image/Capsicum_2.png",
        text: '最热门'
      }, {
        image: "../../image/Greenstuff.png",
        text: '最实惠'
      }, {
        image: "../../image/cheese.png",
        text: '星推荐'
      }
    ],
    // item
    items: [
      {image: "../../image/list_1.jpg"},
      {image: "../../image/list_2.jpg"},
      {image: "../../image/list_3.jpg"},
      {image: "../../image/list_1.jpg"},
      {image: "../../image/list_2.jpg"},
      {image: "../../image/list_3.jpg"},
      {image: "../../image/list_1.jpg"},
      {image: "../../image/list_2.jpg"}
    ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: 'logs/logs'
    })
  },
  goBaidu: function() {
    console.log('goBaidu')
    wx.navigateTo( {
      url: 'http://www.baidu.com/'
    })
  },
  swiperchange: function(e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },
  go: function(event) {
    wx.navigateTo({
      url: 'list/index?type=' + event.currentTarget.dataset.type
    })
  }
})
