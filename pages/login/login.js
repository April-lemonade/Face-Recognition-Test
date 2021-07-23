// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    result: '',
    username: '',
    pwd: ''
  },
  userNameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  pwdInput: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  submitForm: function () {
    var that = this;
    console.log(this.data.username);
    console.log(this.data.pwd)
    wx.setStorageSync('username', this.data.username);
    if (('' == this.data.username) || ('' == this.data.pwd)) {
      wx.showToast({
        icon: "none",
        title: '请填写完成！',
      })
    } else {
      wx.request({
        url: 'http://192.168.1.114:8077/user/loginByAccount',
        data: {
          account: this.data.username,
          pwd: this.data.pwd,
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) { //res就是接收后台返回的数据
          that.setData({
            result: res.data
          })

          if (200 != res.data.code) {
            wx.showToast({
              icon: "none",
              title: '账号或密码错误！',
            })
          } else if (null != res.data) {
            //http://192.168.1.103:8077/user/loginByAccount
            wx.setStorageSync('token', res.data.token);
            //wx.setStorageSync('username', this.data.username);
            var newtele = new Array();
            var newtele1 = '';
            for (var i = 0; i < 3; i++)
              newtele[i] = res.data.data.phone[i];
            for (var i = 3; i < 7; i++)
              newtele[i] = '*';
            for (var i = 7; i < 11; i++)
              newtele[i] = res.data.data.phone[i];
            newtele1 = newtele.join('')
            console.log("newTele", newtele.join(''))
            wx.setStorageSync('tele', res.data.data.phone);
            wx.setStorageSync('hideTele', newtele.join(''));
            console.log(res.data.data.phone);
            wx.switchTab({
              url: '../../pages/home/home',
            })
          }
        },
        fail: function (res) {
          console.log("fail");
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