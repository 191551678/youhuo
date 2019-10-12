<template>
	<main>
		<div class="search_box">
			<div class="search-bar">
				<form action="" class="from_active">
					<div class="search">
						<input type="text" id="search1" placeholder="搜索商品，品牌">
					</div>
					<div class="me" @click="back()">
						取消
					</div>
				
				</form>
			</div>	
			<div class="inner">
				<dl>
					<dt>热门搜索</dt>
					<dd>
						<router-link to="/running" v-for="(v,i) in list">
							{{v.title}}
						</router-link>
					</dd>
				</dl>
			</div>
		</div>
	</main>
	
</template>

<script>
	export default {
		name: 'tj',
		data() {
		  return {
		      list:[]
			}
		 },
		 mounted() {
		   this.$http.get('./data/search.json')
		 		.then((response)=>{
		 			this.list=response.data.search
		 		})
		 		.catch(function (error) {
		 		console.log(error);
		 		})
		 },
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	.search-bar{
		width: 100%;
		overflow: hidden;
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
		border: 1px solid #e9d5b0 !important;
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
		vertical-align: center;
	}
	.me img{
		width: 33px;
		height: 30px;
		margin: auto;
		display: block;
		margin-top: -5px;
	}
	form{
		width: 100%;
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
		height: 95%;
		background-color: #fff;
		z-index: 98;
	}
	.inner{
		background: #fff;
		padding: 0.8rem 0 0 0.8rem;
	}
	.inner dt{
		font-size: 0.8rem;
		color: #999;
		margin-bottom: 1rem;
	}
	.inner dd a{
		font-size: 0.5rem;
		display: inline-block;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
		border: 1px solid #aeaeae;
		color: #444;
		padding: 0.3rem;
		border-radius: 3px;
	}
</style>
