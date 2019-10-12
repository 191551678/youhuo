<template>
	<main>
		<ul class="view1_box">
			<li v-for="(v,i) in view3" class="view1_li">
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
			view3:[]
		}
	},
	mounted() {
	  this.$http.get('./data/list.json')
			.then((response)=>{
				this.view3=response.data.view3
			})
			.catch(function (error) {
			console.log(error);
			})
	}
}
</script>

<style>

</style>