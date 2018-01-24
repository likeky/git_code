// pages/seller/sellerInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: ["其他", "美食餐饮", "商超购物", "生活服务","休闲娱乐","鞋子箱包","服饰"],
    index: 0,
    logoSrc:"/resource/arrow.png"
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

  onGetLogo:function(e)
  {

    /*
    this.setData({
      logoSrc: "sdfsdfsdfsdf"
    })
    

    var tmp2 = this.data.logoSrc;
    console.log("tmp2=>" + tmp2);
    */

   
    //var tmpThis=this;
    wx.chooseImage
    ({
        count: 1, // 默认9    
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

        success: (res) => {
          var tempFilePaths = res.tempFilePaths;
          var imgSrc = tempFilePaths[0];
          //console.log("imgSrc=>" + imgSrc);

          this.setData({
            logoSrc: imgSrc
          })

          //var tmp2 = this.data.logoSrc;
          //console.log("tmp2=>" + tmp2);
        }

        /*
        success: function (res) 
        {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          var imgSrc=tempFilePaths[0];
          //console.log("imgSrc=>" + imgSrc);

          tmpThis.setData({
            logoSrc: imgSrc
          })

          var tmp2 = tmpThis.data.logoSrc;
          console.log("tmp2=>" + tmp2);
          
        }
        */
        
    });
      

  }
})