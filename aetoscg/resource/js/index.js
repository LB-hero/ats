
var vm = new Vue({
    el: "#app",
    data() {
        return {
            active:0,
            username: localStorage.getItem('user'),
            
            images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg'
              ],
              height:200
        }
    },
    methods: {
        change() {
            vant.Toast(this.active);
        },
        onChange(index) {
            this.current = index;
        }
    }
})