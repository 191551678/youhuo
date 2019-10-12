<template>
	<ul>
		<li v-for="(v,i) in list0" class="pl_box">
			<div class="author">
				<img :src="v.img1" alt="" class="author_img">
				<div class="author_name">
					<p class="name">{{v.name}}</p>
					<p class="time">{{v.time}}</p>
				</div>
			</div>
			<div class="content">
				<p class="content_p">{{v.desc}}</p>
				<div class="img_box">
					<img :src="v.img2" alt="" />
				</div>
				<div class="tags">
					<span class="like">12</span>
					<span class="say">34</span>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
  data () {
	return {
		list0:[
				{
					img1:'./data/images/pp01.jpg',
					name:'95分球鞋交易平台',
					time:'2019-10-02',
					desc:'XH55开箱丨NIKE Zoom Kobe 1 Protro ',
					img2:'./data/images/pl01.jpg'
				},
				{
					img1:'./data/images/pp02.jpg',
					name:'搬运君推荐',
					time:'2019-10-02',
					desc:'新鞋开箱丨圣康尼 胜利5 入手简记 saucony triumph iso 5 ',
					img2:'./data/images/pl02.jpg'
				},
				{
					img1:'./data/images/pp03.jpg',
					name:'搬运君推荐',
					time:'2019-10-02',
					desc:'摄影师的桌面恩物，BenQ WiT ScreenBar Plus屏幕挂灯使用体验',
					img2:'./data/images/pl03.jpg'
				},
				{
					img1:'./data/images/pp04.jpg',
					name:'搬运君推荐',
					time:'2019-10-02',
					desc:'不负责球鞋评测丨Nike AlphaDunk',
					img2:'./data/images/pl04.jpg'
				},
				{
					img1:'./data/images/pp05.jpg',
					name:'搬运君推荐',
					time:'2019-10-02',
					desc:'「95分球鞋」12选2！yeezy350任你挑选！ ',
					img2:'./data/images/pl01.jpg'
				}
			]


		}
 	}
}
</script>

<style scoped>
	.pl_box{
	    border-bottom: 1px solid #e6e6e6;
    	padding: .26667rem .26667rem .26667rem 0;
    	margin-bottom: 1rem;
	}
	.author{
		position: relative;
		font-size: 1rem;
	}
	.author_img{
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		display: block;
	}
	.name_box{
		padding-left: 3.2rem;
		display: inline-block;
	}
	.content{
		margin: 10px 0;
		margin-left: 3.2rem;

	}
	.img_box{
		width: 100%;
		margin: 10px 0;
	}
	.img_box>img{
		width: 100%;
	}
	.author_name{
		position: absolute;
		left: 3.5rem;
		top: 0px;
	}
	.time{
		color: #999;
		margin: 5px 0;
	}
	.tags{

	}
	.like{
		background-image: url(../assets/images/like.png);
		padding-left: 1.2rem;
	    background-size: 1rem auto;
	    background-position: 0 3px;
	    background-repeat: no-repeat;
	}
	.say{
		background-image: url(../assets/images/say.png);
		padding-left: 1.2rem;
	    background-size: 1rem auto;
	    background-position: 0 3px;
	    background-repeat: no-repeat;
	}
</style>
