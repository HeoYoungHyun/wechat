Page({

  data: {
   

  },

  onLoad: function (options) {
    this.setData({
    
    })
  },
  showModal() {
    wx.showModal({
      title: "title",
      content: "contents........",
      showCancel: true,
      cancelText: "취소",
      confirmText: "실행",
      // confirmColor: '#00ff00',
    })
  },
  request() {
    var that = this;
    var test_server = 'http://localhost:8800/restTest';

    wx.request({
      url: test_server,
      data: {
        str: this.data.product.id,
      },
      header: {
        'content-type': 'application/json' // Default value
      },
      method: "GET",
      success(res) {
        console.log(res)

        // 서버 소스
        // data.put("info", info);
        // data.put("userHasCollect", userHasCollect);
        // data.put("issue", issueCallableTask.get());
        // .
        // .
        // return ResponseUtil.ok(data);

        if(res.data.errno === 0 ) {
          var tProduct = that.data.product;
          tProduct.id = res.data.data.info.id;
          tProduct.name = res.data.data.info.name;
          tProduct.img = res.data.data.info.picUrl;
          tProduct.isNew = res.data.data.info.isNew;
          tProduct.isHot = res.data.data.info.isHot;
          tProduct.unit = res.data.data.info.unit;
          tProduct.price = res.data.data.info.counterPrice;

          that.setData({
            product: tProduct,
          })
        } else {
          wx.showToast({
            title: "존재하지 않는 상품입니다.",
            icon: 'none',
            duration: 1000,
          })
        }
      },
      fail(error) {
        console.log("request fail : ", error)
      }
    })
  },

  bindKeyInput(event) {
    this.setData({
      [`product.id`]: event.detail.value,
    })
  },
})