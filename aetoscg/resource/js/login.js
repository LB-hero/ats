var vm = new Vue({
    el: "#app",
    data() {
        return {
            username: '',
            password: '',
            checked: 1
        }
    },
    created () {
      console.log(routes.gateRefreshPc)  
    },
    methods: {
        logo() {

            if (this.username == '' ) {
                vant.Toast('请输入用户名');
                return
            }else if (this.password == '') {
                vant.Toast('请输入密码');
                return
            }
            setTimeout(() => {
                localStorage.setItem('user',this.username)
                location.href = './index.html'
            }, 100);
            
        }
    }
})