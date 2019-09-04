Vue.component("ax-footer", {
    data() {
        return {
            // active: 0,
            icon: {
                normal: './resource/common/img/shangwu.png',
                active: './resource/common/img/shangwua.png',
            }
        }
    },
    props:{active:Number},
    template: `<van-tabbar v-model="active">
    <van-tabbar-item url='./index.html' icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item url='./business.html'>
        <span>商务</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
    </van-tabbar-item>
    <van-tabbar-item url='./me.html' icon="friends-o" info="5">我的</van-tabbar-item>
    </van-tabbar>`
})
Vue.component("top-go", {
    
    props:{titles:String},
    template: `<van-nav-bar
    :title="titles"
    left-text="返回"
  
    left-arrow
    @click-left="onClickLeft"
  />`,
  methods: {
    onClickLeft(){
        history.go(-1)
    }
  }
})