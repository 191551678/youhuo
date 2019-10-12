<template id="tj">
	<ul>
		<li v-for="(v,i) in list0" class="lis">
			<router-link to="/detail">
				<div class="imgs1">
					<img :src="v.img" alt="">
				</div>
				<div class="details">
					<h2>{{v.title}}</h2>
					<p class="desc red">{{v.desc}}</p>
					<div class="from">
						{{v.from}}
						<span class="red">{{v.price}}</span>
					</div>
				</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'tj',
		data() {
		  return {
		      list0:[],
			}
		 },
		 mounted() {
		   this.$http.get('./data/homedate.json')
		 		.then((response)=>{
		 			this.list0=response.data.data2
		 		})
		 		.catch(function (error) {
		 		console.log(error);
		 		})
		 }
	}
</script>
	
<style scoped="scoped">

	.lis{
		height: 9rem;
		padding: 1rem 0rem;
		position: relative;
		border-bottom: 1px solid #e6e6e6;
	}
	.imgs1{
		width: 30%;
		float: left;
		overflow: hidden;
		height: 100%;
	}
	.imgs1>img{
		width: 100%;
	}
	.details{
		width: 70%;
		padding-left: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		position: relative;
	}
	.details>h2{
		font-size: 0.9rem;
		color: #333;
	}
	.desc{
		font-size: 0.7rem;
	}
	.from{
		    color: #a4a4a4;
	}
	.red{
		color: red;
	}
</style>
