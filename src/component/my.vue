<template>
	<main>
		<div class="my_header">
			<div class="user_img">
				<img src="../assets/images/headimg.png" alt="" />
			</div>
			<div class="login">
				<router-link to="/account">登录</router-link>
				&nbsp;&nbsp;
				<router-link to="/zhuce">注册</router-link>
				<p>金币0</p>
			</div>
		</div>
		<div class="my_list">
			<h3>我的识货</h3>
			<ul class="my_uls">				
				<li v-for="(v,i) in inli1" class="my_lis">
					<span>
						<img :src="v.img" alt="" >
						<p>{{v.title}}</p>
					</span>
				</li>
			</ul>
		</div>
		<div class="my_list">
			<h3>我的海淘</h3>
			<ul class="my_uls">				
				<li v-for="(v,i) in inli2" class="my_lis">
					<span>
						<img :src="v.img" alt="" >
						<p>{{v.title}}</p>
					</span>
				</li>
			</ul>
		</div>
		<div class="my_list">
			<h3>识货必备</h3>
			<ul class="my_uls">				
				<li v-for="(v,i) in inli3" class="my_lis">
					<span>
						<img :src="v.img" alt="" >
						<p>{{v.title}}</p>
					</span>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
export default {
	data(){
		return {
			inli1:[
				{
					img:require("../assets/images/collect_content.png"),
					title:"我的收藏"
				},
				{
					img:require("../assets/images/camera.png"),
					title:"我的晒物"
				},
				{
					img:require("../assets/images/gift.png"),
					title:"我的礼品"
				}
			],
			inli2:[
				{
					img:require("../assets/images/buycar.png"),
					title:"购物车"
				},
				{
					img:require("../assets/images/haitao_order.png"),
					title:"海淘订单"
				},
				{
					img:require("../assets/images/haitao_kefu.png"),
					title:"海淘客服"
				},
				{
					img:require("../assets/images/my_address.png"),
					title:"地址管理"
				}
			],
			inli3:[
				{
					img:require("../assets/images/tuijiandianpu.png"),
					title:"推荐店铺"
				},
				{
					img:require("../assets/images/blackshore.png"),
					title:"黑科技选鞋"
				}
			]
		}
	}
}
</script>

<style>
	.my_header{
		background-image: url(../assets/images/bg.png);
	    background-size: 100% auto;
		height: 9.4rem;
		overflow: hidden;
	}
	.user_img{
		display: inline-block;
		margin-left: 1.6rem;
		margin-top: 4.5rem;
	    border-radius: 50%;
	    box-shadow: 0 0 30px rgba(255,255,255,.5);
	    overflow: hidden;
	}
	.user_img img{
		width: 3rem;
	}
	.login{
		display: inline-block;
		margin-left: 1.3rem;	
	}
	.login a{
		color: #fff;
	}
	.login p{
		color: #fff;
		padding-top: 10px;
		font-size: 0.5rem;
	}
	.my_list{
		padding: 10px;
		background: #fff;
		margin-bottom: 10px;
	}
	.my_list h3{
		font-size: 0.9rem;
		background: url(../assets/images/border.png) left center repeat-x;;
	    background-size: 0.2rem;
	    margin-bottom: 10px;
	}
	.my_uls{
		display: flex;
		justify-content: flex-start;
		text-align: center;
	}
	.my_lis{
		width: 25%;
	}
	.my_lis img{
		width: 3rem;
		padding-bottom: 5px;
	}
	.my_lis p{
		font-size: 0.5rem;
	}
</style>