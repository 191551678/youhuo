<template>
  <div id="app" v-cloak>
	  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selected:''
    }
  }
}
</script>

<style>

	html{
		height: 100%;
		font-size: 16px;
	}
	.clearboth::after{
		content: "";
		clear: both;
	}
	#app{
		height: 100%;
	}
	body{
		background: #f7f7f7;
		height: 100%;
	}
	a{
		color: #444;
	}
	.overflow{
		overflow: hidden;
	}
	.none{
		display: none !important;
	}
	.backtop{
		position: fixed;
		right: 10px;
		bottom: 4rem;
		z-index: 999;
	}
	.backtop img{
		width: 40px;
		height: 40px;
	}
	.fixed{
		position: fixed;
	}
	.bold{
		font-weight: 700;
	}
	.relative{
    position: relative;
  }
  .cleaript{
    position: absolute;
    right: 0px;
    top: 25%;
    width: 15px;
  }
</style>
