<template>
	<main>
		<div class="search-bar">
			<form action="">
				<div class="search">
					<router-link to="/search">
						<input type="text" id="search1" placeholder="搜索商品，品牌">
					</router-link>
				</div>
				<router-link to="/buycar" class="me">
					<img src="../assets/images/cart.jpg" alt="">
				</router-link>
			</form>
		</div>
		<div @click=" backTop()" class=" backtop" v-if="btnFlag">
			<img src="../assets/images/topup.png" alt="">
		</div>
		<swiper1></swiper1>
		<section class="hot1">
			<ul>
				<li v-for="(v,i) in list1" class="lis50 lis1">
					<router-link to="/list">
						<div class="hot1-1">
							<h2 class="title1">{{v.title}}</h2>
							<p class="desc">{{v.dec}}</p>
						</div>
						<div class="hot1-2">
							<img :src="v.imges" alt="">
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="hot2">
			<ul class="overflow">
				<li v-for="(v,i) in list2" class="lis2">
					<router-link to="/news">
						<h2 class="title1">{{v.title}}</h2>
						<p class="desc">{{v.dec}}</p>
						<p class="imgs"><img :src="v.imges" alt=""></p>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="hot3">
			<h3>热门活动</h3>
			<ul class="overflow">
				<li v-for="(v,i) in list3" class="lis3">
					<router-link to="/news">
						<p class="hot3img overflow"><img :src="v.imges" alt=""></p>
						<h2 class="hot3h">{{v.title}}</h2>
						<p class="hot3p">{{v.dec}}</p>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="listview">
			<div class="listview-top">
				<ul class="listview-uls1 overfloaw">
					<li @click="msg='tj',select1(uls1[0].name)" :class="{on1:active1==uls1[0].name}">推荐</li>
					<li @click="msg='qb',select1(uls1[1].name)" :class="{on1:active1==uls1[1].name}">篮球</li>
					<li @click="msg='tj',select1(uls1[2].name)" :class="{on1:active1==uls1[2].name}">跑步</li>
					<li @click="msg='qb',select1(uls1[3].name)" :class="{on1:active1==uls1[3].name}">健身</li>
					<li @click="msg='tj',select1(uls1[4].name)" :class="{on1:active1==uls1[4].name}">潮流</li>
				<!-- 	<li v-for="(v,i) in uls1" :key="v.name" @click="select1(v.name)" :class="{on1:active1==v.name}">{{v.name}}</li> -->
				</ul>
				<ul class="listview-uls2 overfloaw">
					<li @click="msg='tj',select2(uls2[0].name)" :class="{on2:active2==uls2[0].name}">全部</li>
					<li @click="msg='qb',select2(uls2[1].name)" :class="{on2:active2==uls2[1].name}">单品推荐</li>
					<li @click="msg='tj',select2(uls2[2].name)" :class="{on2:active2==uls2[2].name}">原创精选</li>
					<li @click="msg='qb',select2(uls2[3].name)" :class="{on2:active2==uls2[3].name}">用户晒物</li>
					<!-- <li v-for="(v,i) in uls2" :key="v.name" @click="select2(v.name)" :class="{on2:active2==v.name}">{{v.name}}</li> -->
				</ul>
			</div>
			<div class="list-view" v-cloak>
				<component :is="msg" mode="out-in"></component>
			</div>
		</section>


	</main>
</template>

<script>
	import swiper1 from'./swiper1.vue'
	import tj from'./tj.vue'
	import qb from'./qb.vue'
	export default {
    name: 'carrousel',
    data() {
      return {
		 btnFlag:true,
		 msg:'tj',
		 list0:[],
		 list1:[],
		 list2:[],
		 list3:[],
		 active1:'推荐',
		 uls1:[
			 {
				 name:'推荐'
			 },
			 {
			 	 name:'篮球'
			 },
			 {
			 	 name:'跑步'
			 },
			 {
			 	 name:'健身'
			 },
			 {
			 	name:'潮流'
			 }
		 ],
		 active2:'全部',
		 uls2:[
			 {
				 name:'全部'
			 },
			 {
				 name:'单品推荐'
			 },
			 {
				 name:'原创精选'
			 },
			 {
				 name:'用户晒物'
			 }
		 ]

      }
    },
	components:{
		'tj':tj,
		'qb':qb,
		'swiper1':swiper1
	},
    mounted() {
	  this.$http.get('./data/home01.json')
			.then((response)=>{
				this.list0=response.data.banner1
				this.list1=response.data.banner_hot
				this.list2=response.data.hot1
				this.list3=response.data.hot2
			})
			.catch(function (error) {
			console.log(error);
			})
	 window.addEventListener('scroll', this.scrollToTop)
    },
	updated() {


	},
	destroyed () {
	  window.removeEventListener('scroll', this.scrollToTop)
	},
	methods:{
		select1(name){
			this.active1 = name;
		},
		select2(name){
			this.active2 = name;
		},
		backTop(){

            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },
		 scrollToTop () {
			const that = this
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			that.scrollTop = scrollTop
			if (that.scrollTop > 60) {
			  that.btnFlag = true
			} else {
			  that.btnFlag = false
			}
		  }

	}
  }

</script>

<style scoped="scoped">

	.search-bar{
		width: 100%;
		overflow: hidden;
		position: absolute;
		top: 0;
		z-index: 99;
	}
	.search{
		width: 85%;
		float: left;
		position: relative;
		padding-left: 3%;
		overflow: hidden;
		box-sizing: border-box;
	}
	#search1{
		color: #666;
		background: #fff url('../assets/images/search.png') 5px center no-repeat;
		background-size: 4.2%;
		height: 30px;
		width: 100%;
		margin:8px 0;
		padding-left: 24px;
		border-radius: 4.5px;
		border:0;
		box-sizing: border-box;
	}
	#search1::-webkit-input-placeholder{
		color: #999;
		font-size: 12.5px;;
	}
	.me{
		display: block;
		width: 15%;
		float: right;
		padding: 13px 8px 8px 8px;
		box-sizing: border-box;
		text-align: center;
		position: absolute;
		right: 0px;

	}
	.me img{
		width: 33px;
		height: 30px;
		margin: auto;
		border-radius: 50%;
		overflow: hidden;
		display: block;
		margin-top: -5px;
	}
	form{
		width: 100%;
		overflow: hidden;
	}
	[v-cloak]{
		display: none !important;
	}
	main main{
		padding-bottom: 45px;
	}
	/*.banner{
		position: relative;
	}
	.banner img{
		width: 100%;
	}
	.swiper-pagination-bullets{
		--swiper-pagination-color: #fff;
		opacity: 1;
		padding-right: 20px;

	}
	#swiper-spot{
		width: 30%;
		position: absolute;
		left: 75%;
	}
	.swiper-pagination-bullet{

		float: left;
	}*/
	.hot1{
		width: 100%;
		background: #fff;
		margin-top: 10px;
		overflow: hidden;
		border-bottom: 1px solid #e6e6e6;
	}
	.lis50{
		width: 50%;
	}
	.lis1{
		float: left;
		border-bottom: 1px solid #f0f3f5;
		border-left: 1px solid #f0f3f5;
		padding: 5px 5px;
		box-sizing: border-box;
		position: relative;
	}
	.hot1-1{
		padding-left: 10px;
		display: inline-block;
		float: left;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);

	}
	.hot1-2{
		float: right;
		padding-right: 10px;
		display: inline-block;
	}
	.hot1-2 img{
		width: 50px;
		height: 50px;
	}
	.title1{
		font-size: 0.8rem;
		color: #333;
		font-weight: 600;
	}
	.desc{
		font-size: 0.5rem;
		color: #666;
		margin:3px 3px 5px;
	}
	.imgs>img{
		width: 60px;
	}
	.lis2{
		text-align: center;
		padding: 15px 0px;
		width: 31%;
		float: left;
		background: #fff;
		margin: 10px 0px 10px 6px;
	}
	.hot3{
		background: #FFF;
		padding: 10px 0;
	}
	.hot3>h3{
		font-size: 0.8rem;
		padding-left: 10px;
		margin: 0 0 10px;
		font-weight: 700;
	}
	.hot3>ul{
		padding: 0 8px;
	}
	.lis3{
		width: 33%;
		float: left;
		padding: 2px;
		margin: 5px 0;
		box-sizing: border-box;
		text-align: center;
	}
	.hot3img{
		height: 70px;
	}
	.hot3img>img{
		width: 100%;
	}
	.hot3h{
		font-size: 0.5rem;
		width: 90%;
		margin-top: 0.5rem;
		font-weight: 700;
		white-space:nowrap;
		text-overflow:ellipsis;
		overflow: hidden;
	}
	.hot3p{
		font-size: 0.5rem;
		width: 90%;
		transform: scale(0.8);
	}
	.listview{
		padding: 10px;
		background: #fff;
		margin-top: 5px;
	}


	.listview-top{
		background-color: #FFF;
		border-bottom: 1px solid #eee;
		width: 100%;
		overflow: hidden;
		padding-bottom: 0.3rem;
	}
	.listview-uls1,.listview-uls2{
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
	}
	.listview-uls1{
		font-weight: 700;
	}
	.listview-uls2>li{
		width: 4.5rem;
		height: 1.5rem;
		font-size: 0.5rem;
		text-align: center;
		line-height: 1.5rem;
		color: #333;
		background-color: #f5f5f5;
		border-radius: 0.25rem;
	}
	.on1{
		color: #FF4338;
		position: relative;
	}
	.on1::after{
		content: "";
		width: 1rem;
		display: block;
		position: absolute;
		bottom: -0.3rem;
		left: 50%;
		transform: translateX(-50%);
		height: 0.1rem;
		background-color: #FF4338;
	}
	.on2{
		color: #FFF !important;
		background-color: #FF4338 !important;
	}

</style>
