Page({
  data: {
    title:'',
    page:1,
    hiddenLoading:true,
    items: [{"mprice":0,"maxpacks":100,"price":12800,"subcate":210,"remains":998,"type":1,"freight":0,"title":"新鲜蔬菜蓝","imgs":["/image/sssddc.png"],"unit":"蓝","id":302,"quantity":"1"},
            {"mprice":0,"maxpacks":14,"price":1600,"subcate":410,"remains":14,"type":4,"freight":1000,"title":"朝天椒","imgs":["/image/hongjiao.jpg"],"unit":"g","id":93,"quantity":"400"},
            {"mprice":0,"maxpacks":100,"price":4800,"subcate":202,"remains":5,"type":1,"freight":1000,"title":"黄瓜","imgs":["/image/huanggua.jpg"],"unit":"g","id":69,"quantity":"300"},
            {"mprice":2200,"maxpacks":100,"price":1980,"subcate":410,"remains":42,"type":1,"freight":1000,"title":"蔬菜超市","imgs":["/image/sss.jpg"],"unit":"g","id":91,"quantity":"220"},
            {"mprice":2280,"maxpacks":100,"price":1880,"subcate":410,"remains":29,"type":1,"freight":1000,"title":"豌豆","imgs":["/image/wandou.jpg"],"unit":"g","id":90,"quantity":"215"},
            {"mprice":0,"maxpacks":100,"price":1800,"subcate":301,"remains":999936,"type":1,"freight":1000,"title":"西红柿","imgs":["/image/xihongshi.jpg"],"unit":"g","id":20,"quantity":"1000"},
            {"mprice":0,"maxpacks":1000,"price":12800,"subcate":301,"remains":9994,"type":4,"freight":0,"title":"洋葱","imgs":["/image/yangcong.jpg"],"unit":"kg","id":171,"quantity":"5"}
            ]
  },
  //事件处理函数
  onLoad: function (options) {
    this.title = options.type || '列表'
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
   onShow: function( e ) {
    wx.getSystemInfo( {
      success: ( res ) => {
        this.setData( {
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  },
  loadMore: function () {
    var that = this
    that.data.page ++
    if(that.data.page > 3) return
    that.setData({
      hiddenLoading:!that.data.hiddenLoading
    });
    that.setData({
      items:that.data.items.concat(that.data.items)
    });
    console.log('that.data.items',that.data.items)
    that.setData({
      hiddenLoading:!that.data.hiddenLoading
    });
  },
})
