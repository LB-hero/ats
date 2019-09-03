
var vm = new Vue({
    el:"#app",
    data () {
        return {
            active:0,
            username:localStorage.getItem('user')
        }
    },
    methods: {
        change(){
            vant.Toast(this.active);
        }
    }
})
