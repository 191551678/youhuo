<template>
	<main class="youhui_box">
		<div class="search-bar">
			<form action="" class="from_active">
				<div class="search">
					<input type="text" id="search1" placeholder="搜索全网低价好券">
				</div>
			</form>
		</div>
		<div class="yhq">
			已收集 <span class="bold num">0</span> 张优惠券
			<span class="yhq_right">搜券指南></span>
		</div>
		<div class="pp_box">
			<div class="pp_title">
				<span class="bold">品牌特卖</span>
				<span class="pp_title_right">更多品牌 ></span>
			</div>
			<ul class="uls">
				<li class="lis1">
					<img :src="lis1[0].src" alt="" />
					{{lis1[0].name}}
				</li>
				<li class="lis1">
					<img :src="lis1[1].src" alt="" />
					{{lis1[1].name}}
				</li>
				<li class="lis1">
					<img :src="lis1[2].src" alt="" />
					{{lis1[2].name}}
				</li>
				<li class="lis1">
					<img :src="lis1[3].src" alt="" />
					{{lis1[3].name}}
				</li>
				<li class="lis1">
					<router-link to="/list">
						<img :src="lis1[4].src" alt="" />
						{{lis1[4].name}}
					</router-link>
				</li>
			</ul>
			<ul class="ulss">
				<li v-for="(v,i) in lis2" class="lis2">
					<img :src="v.img1" alt="" class="ulss_img1">
					<div class="ulss_box">
						<img :src="v.img2" alt="" class="ulss_img2">
						<div class="item_title">{{v.title}}</div>
						<div class="item_desc">{{v.desc}}</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="cz_box">
			<div class="cz_title">
				<b class="bold">超值9块9</b>
				<span class="cz_sm">24小时淘不停</span>
				<span class="cz_right">更多商品 ></span>
			</div>
			<swiper2 class="swiper2"></swiper2>
			<img src="../../data/images/rt.png" alt="" class="rt">
		</div>
		<ul class="sp_box">
			<li v-for="(v,i) in lis3" class="lis3_li" @click="select1(v.tag)" :class="{on1:tag==v.tag}">
				{{v.tag}}
			</li>
			<li><img src="../assets/images/tag-hide.png" alt="" class="hide" @click="toshow()"></li>
		</ul>
		<div class="hide_mask" v-if="show">
			<div class="bs">
				<div class="hide_header">
					切换分类
					<img src="../assets/images/tag-show.png" alt="" class="hide_up hide" @click="toshow()">
				</div>
				<ul class="uls1">
					<li v-for="(v,i) in lis4" class="lis3_li" @click="select1(v.tag)" :class="{on2:tag==v.tag}">
						{{v.tag}}
					</li>
				</ul>
				<div class="hide_p">热门搜索</div>
				<ul class="uls1">
					<li v-for="(v,i) in lis5" class="lis3_li" @click="select1(v.tag)" :class="{on2:tag==v.tag}">
						{{v.tag}}
					</li>
				</ul>
			</div>

		</div>
		<div class="list-view" v-cloak>
			<component :is="msg" mode="out-in"></component>
		</div>

		<div @click=" backTop()" class=" backtop" v-if="btnFlag">
			<img src="../assets/images/topup.png" alt="">
		</div>


		<div class="space"></div>




	</main>

</template>

<script>
import swiper2 from'./swiper2.vue'
import tj from'./tj.vue'
export default {
  data () {
	return {
	  show:0,
	  active:'首页',
	  msg:'tj',
	  lis1:[
		 {
			 name:'运动',
			 src: require('../assets/images/yundong.png')
		 },
		 {
			 name:'运动',
			 src: require('../assets/images/xiuxian.png')
		 },
		 {
			 name:'户外',
			 src: require('../assets/images/huwai.png')
		 },
		 {
			 name:'数码',
			 src: require('../assets/images/shuma.png')
		 },
		 {
			 name:'更多',
			 src: require('../assets/images/moreselect.png')
		 }
	  ],
	  lis2:[
	  	{
	  		title:"NIKE",
	  		desc:"定金50抵450",
	  		img1:"./data/images/pp01.jpg",
	  		img2:"./data/images/pp001.png"
	  	},
	  	{
	  		title:"Adidas",
	  		desc:"不止5折",
	  		img1:"./data/images/pp02.jpg",
	  		img2:"./data/images/pp002.png"
	  	},
	  	{
	  		title:"dickies",
	  		desc:"满11减10元",
	  		img1:"./data/images/pp03.jpg",
	  		img2:"./data/images/pp003.jpg"
	  	},
	  	{
	  		title:"FALA",
	  		desc:"虎扑专享满600减180",
	  		img1:"./data/images/pp04.jpg",
	  		img2:"./data/images/pp004.png"
	  	},
	  	{
	  		title:"PUMA",
	  		desc:"虎扑专享满600减180",
	  		img1:"./data/images/pp05.jpg",
	  		img2:"./data/images/pp005.png"
	  	},
	  	{
	  		title:"Sony索尼",
	  		desc:"满48减10",
	  		img1:"./data/images/pp06.jpg",
	  		img2:"./data/images/pp006.jpg"
	  	}
	  ],
	  tag:'精选',
	  lis3:[
	  	{
	  		tag:'精选'
	  	},
	  	{
	  		tag:'鞋类'
	  	},
	  	{
	  		tag:'服饰'
	  	},
	  	{
	  		tag:'数码'
	  	},
	  	{
	  		tag:'兴趣'
	  	},
	  	{
	  		tag:''
	  	}
	  ],
	  lis4:[
		  {
		  	tag:'精选'
		  },
		  {
		  	tag:'鞋类'
		  },
		  {
		  	tag:'服饰'
		  },
		  {
		  	tag:'数码'
		  },
		  {
		  	tag:'兴趣'
		  }
	  ],
	  lis5:[
		  {
		  	tag:'AJ'
		  },
		  {
		  	tag:'NIKE'
		  },
		  {
		  	tag:'亚瑟士'
		  },
		  {
		  	tag:'洗面奶'
		  },
		  {
		  	tag:'Dickies'
		  },
		  {
		  	tag:'李维斯'
		  },
		  {
		  	tag:'新百伦'
		  },
		  {
		  	tag:'PUMA'
		  }
	  ],
	   btnFlag:true,
	}
  },
  methods:{
		select1(tag){
			this.tag = tag;
		},
		toshow(){
			this.show=!this.show
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

  },
	components:{
		'swiper2':swiper2,
		'tj':tj
	},
  mounted(){
	window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
	  window.removeEventListener('scroll', this.scrollToTop)
	}
}
</script>

<style scoped>
	.space{
		width: 100%;
		height: 30px;
	}
	.youhui_box{
		width: 100%;
		height: 100%;
	    background-color: #f0f3f5;
	}
	.search-bar{
		width: 100%;
		overflow: hidden;
	}
	.search{
		width: 100%;
		float: left;
		position: relative;
		padding: 0 3%;
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
		color: #666;
		font-size: 1rem;
	}
	.yhq{
	    background-color: #f0f3f5;
	    padding: 0.5rem 0.8rem 1rem;
	    font-size: 0.5rem;
	}
	.num{
		font-size: 1rem;
	}
	.yhq_right{
		float: right;
		color: #666;
		font-size: 0.5rem;
		border: 1px solid #AEAEAE;
		padding: 3px 10px;
		border-radius: 20px;
	}
	.pp_box{
		background-color: #fff;
		padding: 1rem;
	    color: #333;
    	vertical-align: middle;
	}
	.pp_title_right{
		float: right;
	    color: #999;
	    font-size: 12px;
	    padding-left: .2rem;
	    vertical-align: middle;
	}
	.uls{
		display: flex;
		justify-content: space-between;
		padding: 1rem 0;
	}
	.lis1{
		text-align: center;
	}
	.lis1 img{
		width: 3rem;
		border: 1px solid #eee;
		border-radius: 50%;
		display: block;
	}
	.ulss{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		text-align: center;
		color: #fff;
	}
	.lis2{
		width: 31%;
		padding-bottom: 31%;
		height: 0;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;
		margin: 0.5rem 0;
	}
	.ulss_img1{
		width: 140%;
		height: 140%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}
	.ulss_box{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 100%;
	}
	.ulss_img2{
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		margin-bottom: 5px;
	}
	.item_desc{
		width: 80%;
		font-size: 0.5rem;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
    	background-color: #FF4338;
    	border-radius: 0.5rem;
    	margin-top: 5px;
    	padding: 0 5px;
	}
	.cz_box{
		padding: 0.5rem 1rem;
		background-color: #fff;
		margin-top: 0.5rem;
	}
	.cz_sm{
	    color: #999;
	    font-size: 0.5rem;
	    padding-left: 5px;
	}
	.cz_right{
		color: #999;
		float: right;
		font-size: 0.5rem;
	}
	.rt{
		width: 100%;
		border-radius: 7rem;
		margin-bottom: 10px;
	}
	.sp_box{
		display: flex;
		justify-content: space-around;
		background-color: #fff;
	}
	.hide{
		width: 3rem;
	}
	.lis3_li{
		line-height: 3rem;
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
		color: #FF4338;
		position: relative;
	}
	.list-view{
		padding: 10px;
		background: #fff !important;
	}
	.hide_up{
		position: absolute;
		top: 5px;
		right: 10px;
	}
	.hide_mask{
	    position: fixed;
	    top: 0;
	    left: 0;
	    background-color: rgba(0,0,0,.5);
	    width: 100%;
	    height: 100%;
		z-index: 100;
	}
	.hide_header{
		padding: 1rem 1rem;
	}
	.uls1{
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		text-align: center;
		padding-bottom: 10px;
	}
	.uls1>li{
		width: 25%;
	}
	.hide_p{
	    text-align: center;
    	color: #999;
    	border: none;
	}
	.bs{
		background: #fff;
	}
	.swiper2{
		margin: 10px 0 20px;
		text-align: center;
	}
</style>
