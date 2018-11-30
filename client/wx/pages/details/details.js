// pages/details/details.js
const app = getApp()
Page({

   /**
    * 页面的初始数据
    */
   data: {
      num: 1,
      minusStatus: 'disable'
   },

   bb:function(){
     wx.switchTab({
       url: '../shouye/shouye',
     })
   },
   

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var bookid = options.id
    console.log(bookid)
    var that = this;
    wx.request({
      url: 'http://192.168.2.141:9999/wxbookidinfor?bookid='+bookid,
      success: function (data) {
        console.log(data)
        that.setData({ mydata: data.data.bookinfor[0] })
         console.log(that.data.mydata)
      }
    })
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
   bindMinus: function () {
      var num = this.data.num;
      if (num > 1) {
         num--;
      }
      var minusStatus = num > 1 ? 'normal' : 'disable';
      this.setData({
         num: num,
         minusStatus: minusStatus
      })
   },/*点击加号*/
   bindPlus: function () {
      var num = this.data.num;
      num++;
      var minusStatus = num > 1 ? 'normal' : 'disable';
      this.setData({
         num: num,
         minusStatus: minusStatus
      })
   },
   /*输入框事件*/
   bindManual: function (e) {
      var num = e.detail.value;
      var minusStatus = num > 1 ? 'normal' : 'disable';
      this.setData({
         num: num,
         minusStatus: minusStatus
      })
   },



   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh:function () {

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