<template>
	<main>
		<div class="account_header">
			<h3 class="account_header_img" @click="back()"></h3>
			<span><img src="../assets/images/shihuo.png" alt="" /></span>
		</div>
		<div class="account_content">
			<div class="login_box">
				<form name="myForm" method="post">
					<div class="login_box1">
						<label for="login-username" class="text-label-user"></label>
						<input id="login-username" type="text" v-model="show1" placeholder="登录名/手机号/邮箱" name="user">
						<img src="../assets/images/clear-input.png" v-show="show1" @click="showclear1()" alt="" class="cleaript">
					</div>
					<div class="login_box2">
						<label for="login-pwd" class="text-label-pwd"></label>
						<input id="login-pwd" type="password" v-model="show2" placeholder="密码" name="pwd">
            <img src="../assets/images/clear-input.png" v-show="show2" @click="showclear2()" alt="" class="cleaript">
					</div>
				</form>
				<div class="btn_yz">
					<div class="btn_yz_box">
						点击按钮开始智能验证
					</div>
				</div>
				<div class="btn_nox">
					<router-link to="/zhuce">
						<span class="zc">注册</span>
					</router-link>
					<span class="dl" @click="validateForm()">登录</span>
				</div>
				<div class="more_login">
					<span class="qq_box">
						<span class="qq"></span>
						<span class="login_p">QQ登录</span>
					</span>
					<span class="phone_box">
						<span class="phone"></span>
						<span class="login_p">手机登录</span>
					</span>
				</div>
			</div>
		</div>

	</main>
</template>

<script>
export default {
	data(){
		return {
      show1:'',
      show2:''
		}
	},
	methods:{
		back(){
				this.$router.go(-1)
			},
      showclear1(){
        this.show1=''
      },
      showclear2(){
        this.show2=''
      },
      validateForm(){
        var x=document.forms["myForm"]["user"].value;
        var y=document.forms["myForm"]["pwd"].value;
        if (x==null || x=="" || y==null || y==""){
          alert("不能为空");
          return false;
        }else{
          alert("登陆成功");
        }
      }

	}
}
</script>

<style scoped="scoped">
	main{
		height: 100%;
		background: #fff;
	}
	.account_header{
		text-align: center;
		position: relative;
		height: 2.5rem;
	    background-color: #f4f4f4;
        border-top: 1px solid #e1e1e1;
    	border-bottom: 1px solid #e1e1e1;
	}
	.account_header img{
		margin-top: 10px;
		width: 5rem;
	}
	.account_header_img{
		width: 2rem;
		position: absolute;
		left: 10px;
		top: 0px;
	    display: inline-block;
	    width: 14px;
	    height: 14px;
	    margin-top: 12px;
	    border-left: 1px solid #ca0000;
	    border-top: 1px solid #ca0000;
	    text-indent: -999em;
	    overflow: hidden;
	    transform: rotate(-45deg);
	}
	.account_content{
		background: #fff;
		height: 100%;
		overflow: hidden;
	}
	.login_box{
		width: 80%;
		margin: 10px auto;
		margin-top: 25px;


	}
	.login_box1{
		margin-bottom: 15px;
		width: 100%;
		overflow: hidden;
    position: relative;
	}
	.login_box2{
		margin-bottom: 25px;
		width: 100%;
		overflow: hidden;
    position: relative;
	}
	.login_box input{

	    line-height: 32px;
	    font-size: 15px;
	    height: 32px;
	    color: #222;
	    border: 0;
    	border-bottom: 1px solid #e1e1e1;
    	float: right;
    	width: 92%;
	}
	input::-webkit-input-placeholder {
        color: #ddd;
      }
      input::-moz-input-placeholder {
        color: #ddd;
      }
      input::-ms-input-placeholder {
        color: #ddd;
      }

	.text-label-user{
	  background: url(../assets/images/user.png) 2px 10px no-repeat;
	  background-size: 13px 15px;
      padding-left: 24px;
      display: inline-block;
	  height: 32px;
	  float: left;
	}
	.text-label-pwd{
	  background: url(../assets/images/lock.png) 2px 10px no-repeat;
	  background-size: 13px 16px;
      padding-left: 24px;
      display: inline-block;
	  height: 32px;
	  float: left;
	}
	.btn_yz{
    	padding: 5px 0px 20px 0px;
    	position: relative;
	}
	.btn_yz_box{
	    width: 100%;
	    text-align: center;
        vertical-align: middle;
        border: 1px solid #ddd;
        overflow: hidden;
	    height: 42px;
	    line-height: 42px;
        box-shadow: 0 0 8px #65f4b5;
        background-image: linear-gradient(0deg,#ededed,#fff);
        color: #3c3c3c;
	}
	.btn_nox{
		text-align: center;
	}
	.zc{
	    margin-right: 20px;
	    color: #999;
	    display: inline-block;
	    border: 1px solid #b7b7b7;
	    height: 32px;
	    line-height: 32px;
	    vertical-align: middle;
	    background-color: #fff;
        border-radius: 17px;
	    text-align: center;
	    width: 75px;
	    font-size: 16px;
        margin-left: 20px;
	}
	.dl{
	    background-color: #d8544c;
	    color: #fff;.
        border: 1px solid transparent;
        margin-right: 20px;
	    display: inline-block;
	    height: 32px;
	    line-height: 32px;
	    vertical-align: middle;
        border-radius: 17px;
	    text-align: center;
	    width: 75px;
	    font-size: 16px;
	}
	.more_login{
	    padding: 0 10px;
    	margin-top: 80px;
    	display: flex;
    	justify-content: space-around;
	}
	.phone_box,.qq_box{
		display: inline-block;
	}
	.login_p{
		padding-top: 5px;
		text-align: center;
	    color: #999;
		display: block;
		font-size: 1rem;
	}
	.qq{
		background-image: url(../assets/images/qq.png);
	    background-color: #73c5ff;
        display: block;
	    width: 48px;
	    height: 48px;
	    border-radius: 24px;
	    margin: 0 5px;
	    position: relative;
	    background-size: 16px 18px;
	    background-position: center center;
	    background-repeat: no-repeat;
	    position: relative;
	}
	.qq::after,.qq::before{
		content: '';
		top: 50%;
		height: 1px;
		background: #ccc;
		position: absolute;
	}
	.qq::after{
		left: 55px;
		width: 78px;
	}
	.qq::before{
		right: 55px;
		width: 80px;
	}
	.phone::after{
		content: '';
		top: 50%;
		height: 1px;
		background: #ccc;
		position: absolute;
		width: 80px;
		left: 55px;
	}
	.phone{
		background-image: url(../assets/images/icon-phone.png);
    background-color: #48d58e;
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin: 0 5px;
    position: relative;
    background-size: 12px 18px;
    background-position: center center;
    background-repeat: no-repeat;
	}

</style>
