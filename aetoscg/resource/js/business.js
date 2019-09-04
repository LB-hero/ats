

var vm = new Vue({
    el:"#app",
    data () {
        return {
            active:1,
            business:true,
            images: 'https://img.yzcdn.cn/vant/apple-1.jpg',
        }
    },
    methods: {
        openbusiness(){
            this.business=true
        },
        go(number){
            if (number == 1) {
                location.href = './myclient.html'
            } else {
                location.href = './myincome.html'
            }
        }
    }
})
