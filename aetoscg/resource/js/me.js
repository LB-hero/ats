
var vm = new Vue({
    el:"#app",
    data () {
        return {
            active:2,
            username:localStorage.getItem('user'),
            icon: {
              normal: './resource/common/img/shangwu.png',
              active: './resource/common/img/shangwua.png',
            }
        }
    },
    methods: {
        change(){
            vant.Toast(this.active);
        }
    }
})
