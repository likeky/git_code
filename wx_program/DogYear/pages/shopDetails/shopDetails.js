var initData = 'this is first line\nthis is second line'
Page({
  data: {

    baseInfo:
    {
      adress: "广东省广州市",
      openTime: "10:00-20:30",
      tel: "020-000000"
    },

    shopPhotos: [
    {imgUrl:"/resource/shop/1/1.png"},
    { imgUrl: "/resource/shop/1/2.png" }
    ]

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    var changed = {}

    var shopPhotos = this.data.shopPhotos;
    var icon = 0;

    /*
    for (var i = 0; i < shopPhotos.length; i++) {
      icon=shopPhotos[i];
      this.getImgUrl(this.shopId,icon);
    }
    */

    var imgUrl = this.getImgUrl(1, 1);
    console.log("imgUrl=>" + imgUrl);
    this.data.imgUrls = imgUrl;
    this.setData({ imgUrls: imgUrl })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  getImgUrl: function (shopId, iconId) {
    return "/resource/shop/" + shopId + "/" + iconId + ".png";
  }

  /*
  extraLine: [],
  add: function (e) {
    this.extraLine.push('other line')
    this.setData({
      text: initData + '\n' + this.extraLine.join('\n')
    })
  },
  remove: function (e) {
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        text: initData + '\n' + this.extraLine.join('\n')
      })
    }
  }
  */

})