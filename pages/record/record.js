// pages/jilu/jilu.js
const db=wx.cloud.database()
Page({

  /*
   * 页面的初始数据
   */
  data: {
    date1: '2018-10-01',
    time1: '12:00',
    date2: '2018-10-01',
    time2: '12:00',
    dateTimeArray: null,
    dateTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2000,
    endYear: 2050,
    regionFlag: 1,
    check1:false,
    check2:false,
    star: 0,
    starMap: [
      '轻度疼痛',
      '开始影响睡眠了',
      '有无法入睡的症状',
      '重度疼痛',
      '剧痛',
    ],
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

  bindDateChange1: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },

  bindTimeChange1:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time1: e.detail.value
    })
  },

  bindDateChange2: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },

  bindTimeChange2:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time2: e.detail.value
    })
  },

  checkboxChange(e) {
    const checked = e.detail.value
    const changed = {}
    for (let i = 0; i < this.data.checkboxItems.length; i++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems[' + i + '].checked'] = true
      } else {
        changed['checkboxItems[' + i + '].checked'] = false
      }
    }
    this.setData(changed)
  },


  myStarChoose(e) {
    let star = parseInt(e.target.dataset.star) || 0;
    this.setData({
      star: star,
    });
  },

  checkTap:function(){
    var check = this.data.check;
    check = !check;
    this.setData({
      checked : check
    })
  },
  radiocon: function (e) {
    var check = this.data.check1;
      check=!check;
    
    this.setData({
      check1: check
    })
  },
  radioco: function (e) {
    var check = this.data.check2;
      check=!check;
    
    this.setData({
      check2: check
    })
  },


  Submit: function(res) {                  
      //var {date1,time1,date2,time2,denji,radio1,radio2,input1,input2} = res.detail.value
      // var input1 = res.detail.value.input1;
      // var input2 = res.detail.value.input2;
      //var radio1 = res.detail.value.radio1;
      // var radio2 = res.detail.value.radio2;
      var formdata = res.detail.value;
      var star = this.data.starMap[this.data.star-1];
      db.collection('record').add({
        data:{
          data: formdata ,
          star: star,
          // ifeatmedecine: radio1,
          // hadeat: input1,
          // symptom: input2,
        }

        
      })
      .then(res => {
        console.log(res)
      })
      .catch(console.error)
      wx.navigateTo({
        url: '/pages/outcome/outcome',
      })
      
      var che = res.detail.value.radio1
      che = false
      this.setData({
        form_info: '',
        check1: false,
        check2:false,
        star:0,

      })

      
  }



  
})

