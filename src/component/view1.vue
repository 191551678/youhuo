<template>
	<main>
		<ul class="view1_box">
			<li v-for="(v,i) in view1" class="view1_li">
				<img :src="v.img" alt="" class="view1_img">
				<p class="view1_p">{{v.title}}</p>
			</li>
		</ul>
	</main>
</template>

<script>
export default {
	data(){
		return {
			view1:[]
		}
	},
	mounted() {
	  this.$http.get('./data/list.json')
			.then((response)=>{
				this.view1=response.data.view1
			})
			.catch(function (error) {
			console.log(error);
			})
	}
}
</script>

<style>
	.view1_box{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0 10px;
	}
	.view1_li{
		width: 30%;
		padding: 10px 10px;
	}
	.view1_img{
		width: 4rem;
		height: 4rem;
	}
	.view1_p{
		text-align: center;
		font-size: 0.5rem;
	}
</style>