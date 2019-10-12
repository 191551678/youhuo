<template>
	<main>
		<div class="account_header">
			<h3 class="account_header_img" @click="back()"></h3>
			<span>手机注册</span>
		</div>
		<div class="account_content">
			<div class="login_box">
				<form action="">
					<div class="login_box1">
						<label for="login-username" class="text-label-user"></label>
						<input id="login-username" v-model="show2" type="number" placeholder="请输入大陆地区的手机号">
            <img src="../assets/images/clear-input.png" v-show="show2" @click="showclear2()" alt="" class="cleaript">
					</div>
					<p class="login_text">
						我已经阅读并同意<a href="">虎扑用户协议（含隐私政策）</a>，系统将同步为您创建虎扑帐号
					</p>
					<div class="zc1">
						<span :class="{zc_btn:true,zc_on:show2}" @click="validatemobile()">注册</span>
					</div>
					<div class="s_box">
						<p class="s_title">温馨提示：</p>
						<p>帐号注册成功后，您可以方便使用</p>
						<p>虎扑网、手机虎扑网、虎扑App、识货等服务。</p>
					</div>
				</form>

			</div>
		</div>

	</main>
</template>

<script>
export default {
	data(){
		return {
      show2:''
		}
	},
	methods:{
		back(){
				this.$router.go(-1)
			},
      showclear2(){
        this.show2=''
      },
      validatemobile(){
          var mobile=document.getElementById('login-username')
          if(mobile.value.length==0)
          {
          // alert('手机号码不能为空！');
          return false;
          }
          if(mobile.value.length!=11)
          {
          alert('请输入有效的手机号码，需是11位！');
          return false;
          }
          if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(mobile.value)))
          {
            alert('请输入有效的手机号码！');

          }else{
            alert('恭喜你！注册成功');
          }
      }
  },
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
	.account_header>span{
		font-size: 1rem;
		margin-top: 8px;
		display: block;
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
		width: 100%;
		margin: 10px auto;
		margin-top: 25px;
		padding: 0 20px;

	}
	.login_box1{
		margin-bottom: 15px;
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
	  background: url(../assets/images/phone.png) 2px 10px no-repeat;
	  background-size: 12px 18px;
      padding-left: 20px;
      display: inline-block;
	  height: 32px;
	  float: left;
	}
	.login_text{
	    font-size: 14px;
	    line-height: 1.5;
	    margin: -10px 0 20px 0;
	    color: #999;
	}
	.login_text a{
	    color: #0c80ff;
	}
	.zc_btn{
		background: #b2b2b2;
		color: #fff;
	    width: 135px;
	    display: inline-block;
	    text-align: center;
	    line-height: 34px;
        font-size: 16px;
	    height: 34px;
	    line-height: 30px;
	    border: 0;
	    border-radius: 17px;
	}
  .zc_on{
    background: #d8544c;
    color: #fff;
  }
	.zc1{
		text-align: center;
	}
	.s_box{
	    bottom: 30px;
	    padding: 25px 10px 0px 5px;
	    font: 14px/16px 'microsoft yahei';
	}
	.s_box p{
	    text-align: left;
	    color: #666;
	    line-height: 18px;
	}
	.s_title{
	    margin-bottom: 10px;
	    color: red !important;
	}
</style>
