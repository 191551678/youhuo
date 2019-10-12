<template>
	<main>

		<router-view></router-view>

	   <mt-tabbar class="tabimg">
		  <mt-tab-item id="tab1" :class="{on1:$route.name==uls1[0].name}">
			  <div @click="select1(uls1[0].name)">
				  <router-link to="/home">
					<img  src="../assets/images/index.png" v-if="$route.name!=uls1[0].name">
					<img  src="../assets/images/index-on.png" v-if="$route.name==uls1[0].name">
					首页
				  </router-link>
			  </div>
		  </mt-tab-item>
		  <mt-tab-item id="tab2" :class="{on1:$route.name==uls1[1].name}">
			  <div @click="select1(uls1[1].name)">
				<router-link to="/youhui">
					<img  src="../assets/images/youhui.png" v-if="$route.name!=uls1[1].name">
					<img  src="../assets/images/youhui-on.png" v-if="$route.name==uls1[1].name">
					优惠
				</router-link>
			  </div>
		  </mt-tab-item>
		  <mt-tab-item id="tab3" :class="{on1:$route.name==uls1[2].name}">
			  <div @click="select1(uls1[2].name)">
				 <router-link to="/found">
					<img  src="../assets/images/find.png" v-if="$route.name!=uls1[2].name">
					<img  src="../assets/images/find-on.png" v-if="$route.name==uls1[2].name">
					发现
				</router-link>
			  </div>
		  </mt-tab-item>
		  <mt-tab-item id="tab4" :class="{on1:$route.name==uls1[3].name}">
			  <div @click="select1(uls1[3].name)">
				 <router-link to="/zhuangbei">
					<img  src="../assets/images/zhuangbei.png" v-if="$route.name!=uls1[3].name">
					<img  src="../assets/images/zhuangbei-on.png" v-if="$route.name==uls1[3].name">
					装备
				</router-link>
			  </div>
		  </mt-tab-item>
		  <mt-tab-item id="tab5" :class="{on1:$route.name==uls1[4].name}">
			  <div @click="select1(uls1[4].name)">
				 <router-link to="/my">
					<img  src="../assets/images/more.png" v-if="$route.name!=uls1[4].name">
					<img  src="../assets/images/more-on.png" v-if="$route.name==uls1[4].name">
					我的
				</router-link>
			  </div>
		  </mt-tab-item>
		</mt-tabbar>
	</main>
</template>

<script>
export default {
  data () {
    return {
      // show:0,
      active:'首页',
      uls1:[
         {
           name:'首页',
           src: require('../assets/images/index.png')
         },
         {
           name:'优惠',
           src: require('../assets/images/youhui.png')
         },
         {
           name:'发现',
           src: require('../assets/images/find.png')
         },
         {
           name:'装备',
           src: require('../assets/images/zhuangbei.png')
         },
         {
          name:'更多',
          src: require('../assets/images/more.png')
         }
      ]
    }
  },

  methods:{
	  select1(name){
		  this.active=name
		  // console.log(name)
		  // if(this.active==this.uls1[0].name){
		  // 	this.uls1[0].src=require('../assets/images/index-on.png')
		  // }else if(this.active==this.uls1[1].name){
		  // 	this.uls1[1].src= require('../assets/images/youhui-on.png')
		  // }else if(this.active==this.uls1[2].name){
		  // 	this.uls1[2].src= require('../assets/images/find-on.png')
		  // }else if(this.active==this.uls1[3].name){
		  // 	this.uls1[3].src= require('../assets/images/zhuangbei-on.png')
		  // }else if(this.active==this.uls1[4].name){
		  // 	this.uls1[4].src= require('../assets/images/more-on.png')
		  // }
	  }
  }
}
</script>

<style scoped="scoped">

	a{
		color: #444;
	}
	.tabimg img{
		height: 28px;
		width: 28px;
		display: block;
		margin: auto;
	}
	.tabimg{
		height: 45px;
		box-shadow: 0 0 12px 1px rgba(0,0,0,.51);
		position: fixed;
		z-index: 99;
	}
	.tabimg a{
		padding: 0px;
		position: relative;
		overflow: hidden;
	}
	.on1 a{
		color: #FF4338 !important;
	}
	.from_active{
		width: 100%;
		overflow: hidden;
		height: 100%;
		background-color: #f7f7f7 !important;
	}
	.from_active input{
		color: #666 !important;
		background-color: #EAEAEA !important;
	}
	.search_box{
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #fff;
		z-index: 99;
	}
</style>
