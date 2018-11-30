// pages/gouwuche/gouwuche.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [
      [
        {
          img: "../imgs/a.jpg",
          tit:  '东野圭吾：嫌疑人X的献身（王凯、张鲁一推荐，至为纯粹的爱                   情，绝好的诡计）',
          price: "￥24.20",
          pinglun: "已有527770位用户评价"
        },
        {
          img: "../imgs/b.jpg",
          tit: " 天才在左 疯子在右(2018全新完整版)",
          price: "￥28.30",
          pinglun: "已有966970位用户评价"
        }
      ],
      [
        {
          img: "../imgs/c.jpg",
          tit: '东野圭吾：解忧杂货店（王俊凯、迪丽热巴推荐，这家店帮你找回内心流失的东西）',
          price: "￥27.30",
          pinglun: "已有699850位用户评价"
        },
        {
          img: "../imgs/d.jpg",
          tit: "幸存者：法医秦明系列第五季",
          price: "￥18.00",
          pinglun: "已有1951860位用户评价"
        }
      ]
    ]
  },

  btn:function(){
    wx.switchTab({
      url: '../shouye/shouye',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})