<template>
	<main>
		<ul class="view1_box">
			<li v-for="(v,i) in view2" class="view1_li">
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
			view2:[]
		}
	},
	mounted() {
	  this.$http.get('./data/list.json')
			.then((response)=>{
				this.view2=response.data.view2
			})
			.catch(function (error) {
			console.log(error);
			})
	}
}
</script>

<style>

</style>