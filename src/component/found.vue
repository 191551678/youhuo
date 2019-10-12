<template>
	<main>
		<div class="found_header">识货好价</div>
		<div class="found_swiper">
			<swiper :options="swiperOption1" class="banner">
				<!-- slides -->
				<swiper-slide>
					<router-link to="/detail">
						<img :src="list0[0].images" alt="">
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/detail">
						<img :src="list0[1].images" alt="">
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/detail">
						<img :src="list0[2].images" alt="">
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/detail">
						<img :src="list0[3].images" alt="">
					</router-link>
				</swiper-slide>
				<swiper-slide>
					<router-link to="/detail">
						<img :src="list0[4].images" alt="">
					</router-link>
				</swiper-slide>
				<div class="swiper-pagination1" id="swiper-spot"  slot="pagination"></div>
			</swiper>
		</div>

		<ul class="uls1">
			<li>
				<img src="../assets/images/zhongce.png" alt="" />
				<p>众测</p>
			</li>
			<li>
				<img src="../assets/images/lanmu.png" alt="" />
				<p>栏目</p>
			</li>
			<li>
				<img src="../assets/images/new.png" alt="" />
				<p>最新</p>
			</li>
			<li>
				<img src="../assets/images/hot.png" alt="" />
				<p>最热</p>
			</li>
		</ul>
		<div class="space"></div>
		<div class="ht">
			<h3>热门话题</h3>
			<div>
				<swiper :options="swiperOption3" class="banner">
					<swiper-slide v-for="(v,i) in list2" class="ht_box">
						<span class="swiper3_1"><img :src="v.img" alt="" /></span>
						<span class="swiper3_2">{{v.desc}}</span>
					</swiper-slide>
				</swiper>
			</div>
		</div>
		<div class="space"></div>
		<div>
			<swiper :options="swiperOption2" class="banner">
				<swiper-slide v-for="(v,i) in list1" class="swiper1" :class="{on1:tag==v.tag}">
					<span @click="select1(v.tag)">{{v.tag}}</span>
				</swiper-slide>
			</swiper>
		</div>
		<div class="list_box">
			<pinglun></pinglun>
		</div>

		<div @click=" backTop()" class=" backtop" v-if="btnFlag">
			<img src="../assets/images/topup.png" alt="">
		</div>

		<div class="space1"></div>
	</main>

</template>

<script>
import pinglun from'./pinglun.vue'
export default {
  data () {
	return {
		 swiperOption3: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
       },
         btnFlag:true,
		swiperOption2: {
			 	slidesPerView: 5,
	          	freeMode: true
			},
			pagination: {
				el: '.swiper-pagination2',
				clickable: true
			},
			swiperOption1: {
			loop:true,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination1',
				clickable: true
			}
       },
		list0:[],
		tag:'今日推荐',
		list1:[
			{
				tag:"今日推荐"
			},
			{
				tag:"篮球"
			},
			{
				tag:"视频"
			},
			{
				tag:"最新资讯"
			},
			{
				tag:"潮流风向"
			},
			{
				tag:"3C新奇特"
			},
			{
				tag:"潮鞋志"
			},
			{
				tag:"球鞋90秒"
			}
		],
		list2:[
			{
				img:'./data/images/ht01.jpg',
				desc:'# 晒穿搭！ #'
			},
			{
				img:'./data/images/ht02.jpg',
				desc:'# 限时下单 全场返利 #'
			},
			{
				img:'./data/images/ht03.png',
				desc:'# 晒照赢新年康扣 #'
			},
			{
				img:'./data/images/headert01.jpg',
				desc:'# 晒穿搭！ #'
			},
			{
				img:'./data/images/banner004.jpg',
				desc:'# 晒穿搭！ #'
			}
		]


	}
  },
  methods:{
	  select1(tag){
			this.tag = tag;
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
  mounted(){
  	this.$http.get('./data/swiper.json')
		.then((response)=>{
			this.list0=response.data.banner3
		})
		.catch(function (error) {
		console.log(error);
		})
	 window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
	  window.removeEventListener('scroll', this.scrollToTop)
	},
  components:{
  	'pinglun':pinglun
  },
   computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>

<style scoped>
	.found_header{
		text-align: center;
		padding: 0.5rem 0;
	}
	.found_swiper{
		padding: 0px 5px;
	}
	.space1{
		width: 100%;
		height: 40px;
	}
	main{
		background: #fff;
	}
	.banner{
		position: relative;
		overflow: hidden;
		max-height: 8.5rem;
	}
	.banner img{
		width: 100%;
	}
	.swiper-pagination-bullets{
		--swiper-pagination-color: #FF4338;
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
	}

	.uls1{
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin-top: 10px;
	}
	.uls1 img{
		width: 50%;

	}
	.uls1 p{
		font-size: 0.5rem;
		margin: 5px 0 10px;
	}
	.space{
		width: 100%;
		height: 10px;
		background: #f7f7f7;;
	}
	.swiper1{
		padding: 10px 0;
		display: inline;
		text-align: center;
	}
	.on1{
		color: #FF4338;
		position: relative;
	}
	.on1::after{
		content: "";
		width: 2rem;
		display: block;
		position: absolute;
		bottom: 0rem;
		left: 50%;
		transform: translateX(-50%);
		height: 0.1rem;
		background-color: #FF4338;
	}
	.ht_box{
		position: relative;
		width: 50%;
		height: 5rem;
		overflow: hidden;
	}
	.ht_box img{
		width: 100%;
		height: 100%;
		opacity: 0.6;
	}
	.swiper3_2{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		color: #000;
		font-weight: bold;
		font-size: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.ht{
		padding: 0.5rem;
	}
	.ht>h3{
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
	}
	.list_box{
		padding: 0.5rem;
	}
</style>
