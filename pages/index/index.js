Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    errMsg:''
  },

  formSubmit: function (e) {
    var user=e.detail.value.user;
    var pwd=e.detail.value.pwd;

    if(user==='admin'){
      //登录成功
      wx.reLaunch({
        url: '../home/home?id=1'
      });
    }else{
      this.setData({
        errMsg:'登录失败'
      })
    }
  },



  getNavList(){
    wx.request({
      url:"http://zhouxunwang.cn/data/?id=7&key=Vr3DqIZvTNX+h5KJ94k7RGvDOQTgsJeZ/px1&name=shandong",
      success(res){
        console.log(res);
      },
      fail(res){
        console.log(res);
      },
      complete(r){
        
      }
    });

    this.setData({
      navList:['zhejiang','ningbo','yinzhou','shanxi','shandong']
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getNavList();
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