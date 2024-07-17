// pages/login/login.js
const db=wx.cloud.database()
Page({
   test50:function(){
    let userData = {coin:100,level:10};
    // wx.getUserProfile({
    //   desc: '用于完善会员资料',
    //   success: (res) => {
    //     this.setData({
    //       userInfo: res.userInfo
    //     })     
        wx.switchTab({
        url: '/pages/index/index',
        })
    //      wx.cloud.callFunction({
    //       // 云函数名称
    //       name: 'Datainstore',
    //       // 传给云函数的参数
    //       data: {
    //           func: 'addUser',
    //           data: userData,
    //       },
    //       }).then(res => {
    //           console.log('flushDataAsync success', res)
    //           console.log(res.result)
    //       }, (err) => {
    //           console.log('flushDataAsync err', err)
    //       })
    //    }
    //  })
   },

  /**
   * 页面的初始数据
   */
  data: {

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
