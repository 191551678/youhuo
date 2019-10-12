<template>
	<ul>
		<li v-for="(v,i) in list0" class="lis">
			<router-link to="/detail">
				<div class="imgs1">
					<img :src="v.imgs" alt="">
				</div>
				<div class="details">
					<h2>{{v.title}}</h2>
					<p class="desc col">{{v.desc}}</p>
					<div class="from">
						<img :src="v.img" alt="">
						<span class="col from_p">{{v.name}}</span>
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
		   this.$http.get('./data/news.json')
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
		height: 9.5rem;
		padding: 1rem 0rem;
		position: relative;
	}
	.imgs1{
		width: 35%;
		float: left;
		overflow: hidden;
		height: 100%;
	}
	.imgs1>img{
		width: 100%;
    height: 100%;
	}
	.details{
		width: 65%;
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
  .from img{
    width: 20px;
    border-radius: 50%;
  }
	.col{
		color: #999;
	}
  .from_p{
    padding-left: 5px;
    font-size: 0.5rem;
  }
</style>
