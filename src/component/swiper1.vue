<template>

	<swiper :options="swiperOption" class="banner">
			<!-- slides -->
			<swiper-slide>
				<router-link to="/news">
					<img :src="list0[0].images" alt="">
				</router-link>
			</swiper-slide>
			<swiper-slide>
				<router-link to="/detail">
					<img :src="list0[1].images" alt="">
				</router-link>
			</swiper-slide>
			<swiper-slide>
				<router-link to="/news">
					<img :src="list0[2].images" alt="">
				</router-link>
			</swiper-slide>
			<swiper-slide>
				<router-link to="/news">
					<img :src="list0[3].images" alt="">
				</router-link>
			</swiper-slide>
			<swiper-slide>
				<router-link to="/news">
					<img :src="list0[4].images" alt="">
				</router-link>
			</swiper-slide>
			 <!--<swiper-slide v-for="(v,i) in list0">
				<router-link :to="v.to">
					<img :src="v.images" alt="">
				</router-link>
			</swiper-slide> -->
			<!-- Optional controls -->
			<div class="swiper-pagination" id="swiper-spot"  slot="pagination"></div>
		</swiper>

</template>

<script>
export default {
  data () {
	return {
		swiperOption: {
			loop:true,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
       },
		list0:[]


	}
  },
  methods:{

  },
  mounted(){
  	this.$http.get('./data/swiper.json')
		.then((response)=>{
			this.list0=response.data.banner1
		})
		.catch(function (error) {
		console.log(error);
		})
  },
   computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>

<style scoped>
	.banner{
		position: relative;
    height: 190px;
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
	}
</style>
