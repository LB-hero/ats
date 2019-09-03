
var vm = new Vue({
    el:"#app",
    data () {
        return {
            active:0
        }
    },
    methods: {
        change(){
            vant.Toast(this.active);
        }
    }
})
