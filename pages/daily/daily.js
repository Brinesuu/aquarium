// pages/daily/daily.js
const db=wx.cloud.database()
Page({ 
  test1:function (res) {
    db.collection('mood').add({
      // data 字段表示需新增的 JSON 数据
      data: {
          mood: res.detail.value.mood,
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(console.error)
//    db.collection('todos').add({
//   // data 字段表示需新增的 JSON 数据
//   data: {
//     description: "learn cloud database",
//     due: new Date("2018-09-01"),
//     tags: [
//       "cloud",
//       "database"
//     ],
//     location: new db.Geo.Point(113, 23),
//     done: false
//   }
// })
// .then(res => {
//   console.log(res)
// })
// .catch(console.error)
      wx.navigateTo({
        url: '/pages/diet/diet',
      })
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

  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
})




