// pages/paihangbang/pahangbang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://192.168.2.141:9999/wxbookinfor?leibie=1',
      success: function (data) {
        console.log(data)
        that.setData({ mydata: data })
        console.log(that.data)
      }
    })
  },

  bangdan:function(event){
    var el = event.target;
    console.log(el)
    var num = el.dataset.num;
    console.log(num)
    var that = this;
    that.setData({ num: num })
    if (num) {
      wx.request({
        url: 'http://192.168.2.141:9999/wxbookinfor?leibie=' + num,
        success: function (data) {
          console.log(data)
          that.setData({ mydata: data })
        }
      })
    }
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