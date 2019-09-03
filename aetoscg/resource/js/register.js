var vm = new Vue({
    el: "#app",
    data() {
        return {
            password: '',
            email: '',
            sms: '',
            phone: '',
            ishavecode: true,
            codemssage: '发送验证码'
        }
    },
    created() {
        console.log(routes.gateRefreshPc)
    },
    methods: {
        register() {

            if (this.username == '') {
                vant.Toast('请输入用户名');
                return
            } else if (this.password == '') {
                vant.Toast('请输入密码');
                return
            }

        },
        havecode() {
            if (this.phone == '') {
                vant.Toast('请输入手机号');
                return
            } else if (!this.ishavecode) {
                vant.Toast('请稍后发送');
                return
            }
            setTimeout(() => {
                this.ishavecode= false
                var time = 3
                var codetime = setInterval(() => {
                    time--
                    if (time == 0) {
                        this.codemssage= '发送验证码'
                        this.ishavecode= true
                        clearInterval(codetime)
                    }else{
                        this.codemssage= time+'s'
                        this.ishavecode= true
                    }
                }, 1000)

            }, 1000);
        }
    }
})