// pages/time/time.js
const db=wx.cloud.database()

Page({
  test4:function(res){
    db.collection('schedule').add({
      // data 字段表示需新增的 JSON 数据
      data: {
          schedule: res.detail.value.schedule,
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(console.error)
     wx.navigateTo({
       url: '/pages/outcome/outcome',
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

}
})

