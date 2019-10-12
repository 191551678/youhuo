<template>
	<main>
		<div class="relative">
			<div class="top_bar">
				<div class="goback" @click="gohome()">
					<img src="../assets/images/goback.png" alt="">
				</div>
				<span class="head_title">adidas Alpha Bounce Beyond</span>
				<div class="head_more">
					<img src="../assets/images/head_list_more.png" alt="">
				</div>
			</div>
			<div @click=" backTop()" class=" backtop" v-if="btnFlag">
				<img src="../assets/images/topup.png" alt="">
			</div>
			<div class="content">
				<swiper :options="swiperOption" class="swiper_box">
					<swiper-slide>
						<img src="../../data/images/details01.jpg" alt="">
					</swiper-slide>
					<swiper-slide>
						<img src="../../data/images/details02.jpg" alt="">
					</swiper-slide>
					<swiper-slide>
						<img src="../../data/images/details03.jpg" alt="">
					</swiper-slide>
					<swiper-slide>
						<img src="../../data/images/details04.jpg" alt="">
					</swiper-slide>
					<swiper-slide>
						<img src="../../data/images/details05.png" alt="">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				  </swiper>

				  <div class="title_1">
					  <div class="h2">
						  adidas Alpha Bounce Beyond
					  </div>
					  <div class="h3">
						  2016年，adidas推出了一款搭载Bounce中底的跑鞋Alpha Bounce，流...
						  <div class="t2">
							  详情>
						  </div>
					  </div>
				  </div>
				  <div class="border-area"></div>
				  <div class="kb_box">
					  <div class="kb_1">
						  <a href="#pj">
							  <img src="../assets/images/kb-icon.png" alt="">
							  全网口碑
							  <span>(2238)</span>
						  </a>

					  </div>
					  <div class="kb_2">
						  <router-link to="/news">
							  <img src="../assets/images/pc-icon.png" alt="">
							  识货测评
							  <span>(2)</span>
						  </router-link>
					  </div>
				  </div>

				  <div class="border-area"></div>
				  <div>
					  <div class="cm_box">
						  <div class="cm_1" @click="close()">
							  <img src="../assets/images/s-icon1.png" alt="">
							  <div class="fontx">
								  <span>
								  		筛选尺码
								  </span>
								  <span class="s_2"><br>
										选择您的尺码
								  </span>
							  </div>
						  </div>
						  <div class="cm_2">
							  <img src="../assets/images/s-icon2.png" alt="">
							  <div class="fontx">
								  <span>
								  		点击订阅
								  </span>
								  <span class="s_2"><br>
								  		获取最低价
								  </span>
							  </div>
						  </div>
					  </div>
				  </div>
				  <div class="how">
					  <img src="../assets/images/how-icon.png" alt="">
					  识货如何做到正品保障？
					  <span class="ckxq">查看详情></span>
				  </div>
				  <div class="border-area"></div>

				  <div class="pj_box" id="pj">

					  <div class="title">
						  全网口碑（2021）
						  <span class="pj_right">></span>
					  </div>
					  <div class="tag">
						  <s v-for="(v,j) in tag" @click="selected(v.name)" :class="{s_on:on==v.name}">
							{{v.name}}
						  </s>
					  </div>
					  <ul class="overfloat">
					  	<li v-for="(v,i) in list1" class="pj_lis">
					  		<div class="pj_title">
					  			<img src="../assets/images/headimg.png" alt="" class="details_img">
					  			<div class="pj_name">
					  				<span class="name">{{v.name}}</span>
					  				<span class="time">{{v.time}}</span>
					  			</div>
					  		</div>

					  		<div class="pj_text">
					  			{{v.text}}
					  			<div class="pj_imgs">
					  				<img :src="v.img1" alt="">
					  				<img :src="v.img2" alt="">
					  				<img :src="v.img3" alt="">
					  			</div>
					  		</div>
					  	</li>
					  </ul>

				  </div>
			</div>

			 <div class="mask fixed" v-if="show">
				  <div class="size_box">
					  <div class="close" @click="close()">x</div>
					  <div class="relative">
						  <p class="size_p">请选择需要的尺码</p>
					  </div>

					  <ul class="size_list">
						<li class="size_lis" v-for="(v,i) in size" @click="select(v.num)" :class="{s_on:active==v.num}">{{v.num}}</li>
					  </ul>
					  <div class="size_btn" @click="close()">
						  确定
					  </div>
				  </div>
			</div>

		</div>
    <router-link to="/buycar">
      <div class="buy_btn">
          立即购买
      </div>
    </router-link>
	</main>
</template>
<script>
	export default {
    data() {
      return {
		btnFlag:true,
        swiperOption: {
          centeredSlides: true,
		  loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
		on:'全部',
		tag:[
			{
				name:'全部'
			},
			{
				name:'识货'
			},
			{
				name:'有图'
			},
			{
				name:'脚感'
			},
			{
				name:'鞋码'
			},
			{
				name:'鞋面'
			},
			{
				name:'缓震'
			}
		],
		list1:[],
		active:'',

		size:[
			{
				num:'35.5及以下'
			},
			{
				num:'36'
			},
			{
				num:'36.5'
			},
			{
				num:'37'
			},
			{
				num:'37.5'
			},
			{
				num:'38'
			},
			{
				num:'38.5'
			},
			{
				num:'39.5'
			},
			{
				num:'40'
			},
			{
				num:'40.5'
			},
			{
				num:'41.5'
			},
			{
				num:'42.5'
			},
			{
				num:'43.5'
			},
			{
				num:'44'
			},
			{
				num:'44.5'
			},
			{
				num:'45'
			},
			{
				num:'45.5'
			},
			{
				num:'46'
			},
			{
				num:'46.5'
			},
			{
				num:'47及以上'
			}
		],
		show:false
      }
    },
	methods:{
		selected(name){
			this.on=name
		},
		select(num){
			this.active=num
		},
		gohome(){
			this.$router.push('/home')
		},
		backTop(){

		    document.body.scrollTop = 0
		    document.documentElement.scrollTop = 0
		},
		close(){
			this.show=!this.show
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
		 },
    addbuy(id){
    	this.$store.commit('addbuy',id)
    }
	},
	mounted() {
	  this.$http.get('./data/kb.json')
			.then((response)=>{
				this.list1=response.data.list1
			})
			.catch(function (error) {
			console.log(error);
			})
		window.addEventListener('scroll', this.scrollToTop)
	},
	destroyed () {
	  window.removeEventListener('scroll', this.scrollToTop)
	}
  }
</script>

<style scoped="scoped">
	.relative{
		position: relative;
	}
	.top_bar{
		background-color: #f7f7f7;
		height: 3rem;
		width: 100%;
		position: fixed;
		top: 0;
		text-align: center;
		z-index: 90;
		border-bottom: 1px solid #e6e6e6;
	}
	.goback{
		position: absolute;
		left: 0;
		top: 0;
		height: 3rem;
		width: 3rem;
	}
	.goback img{
		height: 90%;
	}
	.head_more{
		position: absolute;
		right: 0;
		top: 0;
		height: 3rem;
		width: 3rem;
	}
	.head_more img{
		height: 90%;
	}
	.head_title{
		position: absolute;
		left: 50%;
		top: 50%;
		width: 50%;
		transform: translate(-50%,-50%);
		font-size: 1.2rem;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.swiper_box{
		width: 100%;
	}
	.swiper_box img{
		width: 100%;
	}
	.swiper-pagination{
		/*padding-left: 20px;*/
		--swiper-theme-color: #FF4338;
	}

	.content{
		background: #fff;
	}
	.title_1{
		position: relative;
	}
	.h2{
		font-size: 1rem;
		color: #333;
		padding: 0.5rem 0.5rem;
		padding-bottom: 0;
	}
	.h3{
		width: 75%;
		color: #666;
		font-size: 0.8rem;
		overflow: hidden;
		padding: 0.5rem 0.5rem  1rem;
	}
	.t2{
		font-size: 0.5rem;
		color: #278ccf;
		position: absolute;
		bottom: 2rem;
		right: 1rem;
	}
	.border-area{
		height: 0.5rem;
		background-color: #f0f3f5;
	}
	.kb_box{
		display: flex;
		justify-content: space-around;
		padding: 1rem 0;
		color: #444;
		position: relative;
	}
	.cm_box{
		display: flex;
		justify-content: space-around;
		padding: 0.5rem 0;
		color: #444;
		position: relative;
	}
	.kb_box img{
		width: 1rem;
	}
	.cm_box img{
		width: 1.5rem;
		position: relative;
		top: -50%;
		transform: translateY(50%);
		margin-right: 0.5rem;
	}
	.fontx{
		display: inline-block;
	}
	.s_2{
		color: #a18c8c;
	}
	.how{
		background-color: #fafafa;
		padding: 1rem;
		border-top: 1px #f0f0f0 solid;
		display: block;
		font-size: 1.2rem;
		vertical-align: middle;
	}
	.how img{
		width: 1.5rem;
	}
	.ckxq{
		float: right;
		font-size: 1rem;
		color: #666;
	}

	.pj_box{
		padding:0.5rem;
	}
	.pj_box>.title{
		font-size: 1.2rem;
		font-weight: 700;
		padding: 0.5rem 0;
	}
	.pj_right{
		float: right;
		color: #dfe3e4;
	}
	.tag{
		display: flex;
		justify-content: space-around;

	}
	.tag s{
		text-decoration: none;
		background-color: #f5f5f5;
		padding: 0.2rem 0.5rem;
		font-size: 0.5rem;
	}
	.s_on{
		background-color: #FF4338 !important;
		color: #fff !important;
		border-color: transparent !important;
	}

	.pj_title{
		font-size: 1.2rem;
	}
	.pj_lis{
		padding: 1rem 0.5rem;
	}
	.pj_lis img{
		width: 2rem;
		vertical-align: top;
	}
	.pj_name{
		display: inline-block;
	}
	.name{
		display: block;
	}
	.time{
		color: #999;;
		font-size: 1rem;
	}
	.pj_text{
		font-size: 1.2rem;
		padding: 0.5rem 0;
	}
	.pj_imgs{
		display: flex;
		justify-content: space-around;
		padding: 1rem 0;
	}
	.pj_text img{
		width: 5rem;
		height: 4rem;
	}
	.mask{
		z-index: 89;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
	}
	.size_box{
		position: absolute;
		width: 85%;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		padding: 1rem;
		border-radius: 3px;
		z-index: 100;
		text-align: center;
	}

	.size_p{
		display: inline-block;
		font-size: 1rem;
	}
	.size_p::before,.size_p::after{
		content: '';
		height: 1px;
		width: 1rem;
		background-color: #dadada;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.size_p::before{
		left: 18%;
	}
	.size_p::after{
		right: 18%;
	}
	.size_list{
		display: flex;
		justify-content: flex-start;
		flex-wrap:wrap;
		margin: 1rem 0;
	}
	.size_lis{
		padding: 0.5rem;
		border: 1px #ddd solid;
		color: #666;
		margin: 5px 5px;
	}
	.size_btn{
		background-color: #FF4338;
		border-radius: 5px;
		padding: 0.8rem 0;
		font-size: 1rem;
		color: #fff;
		text-align: center;
	}
	.close{
		position: absolute;
		color: #fff;
		font-size: 1.3rem;
		background: rgba(0,0,0,0.3);
		top: -17px;
		right: -15px;
		width: 2rem;
		height: 2rem;
		border-radius:50%;
	}
	.buy_btn{
		position: fixed;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		z-index: 100;
		bottom: 0px;
    color: #fff;
		left: 0px;
		background: #FF4338;
		box-shadow: 0 0 12px 1px rgba(0,0,0,0.3);
	}
	.buy_btn a{
		color: #fff;
	}
  .details_img{
    transform: translateY(25%);
  }
</style>
