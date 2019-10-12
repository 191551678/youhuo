<template>
	<main>
		<div class="search-bar">
			<form action="" class="from_active">
				<div class="search">
					<input type="text" id="search1" placeholder="搜索全网低价好券">
				</div>
				<div class="me" @click="back()">
					取消
				</div>
			</form>
		</div>	
		<div class="lis">
			<ul class="uls">
				<li v-for="(v,i) in list" @click="select(v.tag);on(v.on)" :class="{view_active:active==v.tag}" class="lists">
					{{v.title}}
				</li>
			</ul>
		</div>
		<div class="lis-view">
			<component :is="msg"></component>
		</div>
	</main>
</template>

<script>
import view1 from'./view1.vue'
import view2 from'./view2.vue'
import view3 from'./view3.vue'
export default {
	data(){
		return {
			list:[],
			msg:'view1',
			active:'1'
		}
	},
	mounted() {
	  this.$http.get('./data/list.json')
			.then((response)=>{
				this.list=response.data.list
			})
			.catch(function (error) {
			console.log(error);
			})
	},
	components:{
		'view1':view1,
		'view2':view2,
		'view3':view3
	},
	methods:{
		select(tag){
			this.active=tag
		},
		on(on){
			this.msg=on
			console.log(this.msg)
		},
		back(){
				this.$router.go(-1)
			}
	}
}
</script>

<style scoped>
	main{
		background: #fff;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.search-bar{
		width: 100%;
		overflow: hidden;
	}
	.me{
		display: block;
		width: 10%;
		float: right;
		padding: 15px 5px 8px 0px;
		box-sizing: border-box;
		text-align: center;
		vertical-align: center;
	}
	.search{
		width: 89%;
		float: left;
		position: relative;
		padding: 0 3%;
		padding-right: 5px;
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
		box-shadow: 0 0 12px 1px rgba(0,0,0,.1);
	}
	#search1::-webkit-input-placeholder{
		color: #666;
		font-size: 1rem;	
	}
	
	.lis{
		height: 94.2%;
		width: 20%;
		padding: 0 5px;
		border: 1px solid #eee;
		display: inline-block;
	}
	.uls{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		text-align: center;
	}
	.lists{
		padding: 15px 0;
		border-bottom: 1px solid #eee;
		color: #666;
		position: relative;
	}
	.lis-view{
		display: inline-block;
		width: 80%;
		padding: 0 5px;
		float: right;
	}
	.view_active{
		color: #000 !important;
		font-weight: 700;
	}
	.view_active::before{
		content: '';
		height: 50px;
		width: 2px;
		background: #000;
		position: absolute;
		left: -5px;
		top: 0px;
	}
</style>