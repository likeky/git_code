// pages/seller/sellerInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: ["其他", "美食餐饮", "商超购物", "生活服务","休闲娱乐","鞋子箱包","服饰"],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  onShopType:function(e)
  {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})