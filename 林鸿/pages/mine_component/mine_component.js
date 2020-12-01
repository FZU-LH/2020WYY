
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentData : 0,
    menuitems1: [
      {  text1:"孩子在为谁玩",text2:"动物寓言",image:"/image/pro_logo.png"},
      {  text1:"做永远成长的苹果树",text2:"成长寓言",image:"/image/pro_logo1.png"},
      {  text1:"把一张纸叠51次",text2:"规划寓言",image:"/image/pro_logo2.png"},
      {  text1:"小猫逃开影子的招数",text2:"逃避寓言",image:"/image/pro_logo3.png"},
      {  text1:"人生的规划",text2:"规划寓言",image:"/image/pro_logo4.png"}
    ],//我喜欢的
    menuitems2: [
      {  text1:"孩子在为谁玩",text2:"动物寓言",image:"/image/pro_logo.png"},
      {  text1:"做永远成长的苹果树",text2:"成长寓言",image:"/image/pro_logo1.png"},
      {  text1:"把一张纸叠51次",text2:"规划寓言",image:"/image/pro_logo2.png"},
      {  text1:"小猫逃开影子的招数",text2:"逃避寓言",image:"/image/pro_logo3.png"},
      {  text1:"人生的规划",text2:"规划寓言",image:"/image/pro_logo4.png"}
    ],//我的收藏
    menuitems3: [
      {  text1:"孩子在为谁玩",text2:"动物寓言",image:"/image/pro_logo.png"},
      {  text1:"做永远成长的苹果树",text2:"成长寓言",image:"/image/pro_logo1.png"},
      {  text1:"把一张纸叠51次",text2:"规划寓言",image:"/image/pro_logo2.png"},
      {  text1:"小猫逃开影子的招数",text2:"逃避寓言",image:"/image/pro_logo3.png"},
      {  text1:"人生的规划",text2:"规划寓言",image:"/image/pro_logo4.png"}
      // 这里需要点击后把图片的信息加入menuitems数组中
    ]//浏览记录
    
  },  

  /**
   * 组件的方法列表
   */
  methods: {
    bindchange:function(e){
      const that  = this;
      that.setData({
        currentData: e.detail.current
      })
    },
    //点击切换，滑块index赋值
    checkCurrent:function(e){
      const that = this;
      if (that.data.currentData === e.target.dataset.current){
          return false;
      }else{
        that.setData({
          currentData: e.target.dataset.current
        })
      }
    },
    getUserInfo: function() {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }

      }
  ,

   /***增加组件 */
   onTapAdd:function(e){
    var temp=this.data.obj;
    temp.push(this.data.obj.length);
    this.setData({
      obj:temp
    })
  },
  /***** 删除最后一个组件，也可以修改删除指定组件*/
  onTapDel:function(e){
    var temp = this.data.obj;
    temp.pop(this.data.obj.length);
    this.setData({
      obj: temp
    })
  },
  
})
