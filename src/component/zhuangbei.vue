<template>
	<div class="zb_box">
		<div class="search-bar">
			<form action="" class="from_active">
				<div class="search">
					<input type="text" id="search1" placeholder="搜索全网低价好券">
				</div>
				<div class="zb_more">
					<img src="../assets/images/head_more.png" alt="" />
				</div>
			</form>
		</div>
		<ul class="zb_lis1">
			<li>
				<img src="../assets/images/rxph.png" alt="" class="zb_lis1_img1">
				<p>热销排行</p>
			</li>
			<li>
				<img src="../assets/images/hjjx.png" alt="" />
				<p>好价精选</p>
			</li>
			<li>
				<img src="../assets/images/djxk.png" alt="" />
				<p>当季新款</p>
			</li>
		</ul>
    <div class="zb_uls">
        <ul>
          <li v-for="(v,i) in list_out" class="zb_ouyli">
            <div class="zb_bigbox">
              <img :src="v.img" alt="" class="bigbox_img">
              <div class="zb_mask">
                <img src="../assets/images/banleft.png" class="banleft" alt="">
                <img src="../assets/images/banright.png" class="banright" alt="">
              </div>
              <div class="zb_texear">
                <p class="zb_title1">{{v.title}} <img src="../assets/images/ban-go.png" alt=""></p>
                <p class="zb_title2">{{v.desc1}}</p>
                <p class="zb_title2">{{v.desc2}}</p>
                <div class="boxt">
                  <div><img src="" alt=""></div>
                </div>
              </div>
            </div>
            <ul class="zb_smbox">
              <li v-for="(v,i) in v.list_in1" class="smbox_li">
                <span>{{v.title}} <img :src="v.img" alt="" class="sm_imgs"></span>
              </li>

            </ul>
          <div class="space_a"></div>
          </li>
        </ul>
    </div>
    <div class="tj_area">
      <h3>最新推荐</h3>
        <tj></tj>
    </div>
    <div class="space_bottom"></div>
	</div>
</template>

<script>
import tj from'./tj.vue'
export default {
    data () {
  	return {
        list_out:[
          {
            title:'篮球BASKETBALL',
            desc1:'Aj34评测',
            desc2:'',
            img:'./data/images/bg01.png',
             list_in1:[
              {
                title:'篮球鞋'
              },
              {
                title:'篮球服饰'
              },
              {
                title:'篮球配件'
              },
              {
                title:'篮球',
                img:require('../assets/images/icon-go.png')
              },
              {
                title:'Nike'
              },
              {
                title:'adidas'
              },
              {
                title:'Jordan'
              },
              {
                title:'全部',
                img:require('../assets/images/icon-go.png')
              }
            ]
          },
          {
            title:'跑步RUNNING',
            desc1:'',
            desc2:'户外跑鞋选购',
            img:'./data/images/bg02.png',
            list_in1:[
              {
                title:'跑步鞋'
              },
              {
                title:'跑步服饰'
              },
              {
                title:'跑步配件'
              },
              {
                title:'运动补给',
                img:require('../assets/images/icon-go.png')
              },
              {
                title:'adidas'
              },
              {
                title:'asics'
              },
              {
                title:'New Balance'
              },
              {
                title:'全部',
                img:require('../assets/images/icon-go.png')
              }
            ]
          },
          {
            title:'潮流CASUAL',
            desc1:'等8款超低价',
            desc2:'年度鞋款回顾',
            img:'./data/images/bg03.png',
            list_in1:[
              {
                title:'鞋类'
              },
              {
                title:'服装'
              },
              {
                title:'配件'
              },
              {
                title:'耳机',
                img:require('../assets/images/icon-go.png')
              },
              {
                title:'Converse'
              },
              {
                title:'CASIO'
              },
              {
                title:'Vans'
              },
              {
                title:'全部',
                img:require('../assets/images/icon-go.png')
              }
            ]
          },
          {
            title:'健身FITNESS',
            desc1:'adidas 舒适运动袜 AA2285, 热款丨',
            desc2:'战斗绳狂塑',
            img:'./data/images/bg04.png',
            list_in1:[
              {
                title:'健身装备'
              },
              {
                title:'健身用品'
              },
              {
                title:'营养补剂'
              },
              {
                title:'全部类目',
                img:require('../assets/images/icon-go.png')
              }
            ]
          }
        ]
      }
  },
    components:{
    'tj':tj,
    },
}
</script>

<style scoped>
	.zb_box{
		position: relative;
		height: 100%;
		background: #fff;
	}
	.search-bar{
		width: 100%;
		overflow: hidden;
	    background: #f7f7f7!important;
	}
	.search{
		width: 100%;
		float: left;
		position: relative;
		padding: 0 3%;
		overflow: hidden;
		box-sizing: border-box;
	}
	#search1{
		color: #666;
		background: #ebebeb url('../assets/images/search.png') 5px center no-repeat;
		background-size: 4.2%;
		height: 28px;
		width: 90%;
		margin:8px 0;
		padding-left: 24px;
		border-radius: 4.5px;
		border:0;
		box-sizing: border-box;
	}
	#search1::-webkit-input-placeholder{
		color: #aaa;
		font-size: 0.5rem;
	}
	.zb_more{
		position: absolute;
		right: 0px;
		top: 2px;
	}
	.zb_more img{
		width: 40px;
		height: 40px;
	}

  .zb_lis1{
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    text-align: center;
    font-size: 0.8rem;
  }
	.zb_lis1 img{
		width: 22px;
    padding-bottom: 10px;
	}
	.zb_lis1_img1{
		width: 42px !important;
    transform: translate(10px);
	}
  .zb_bigbox{
    width: 100%;
    height: 195px;
    text-align: center;
    position: relative;
    z-index: 22;
  }
  .zb_mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .bigbox_img{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 0;
  }
  .zb_texear{
    position: relative;
    z-index: 100;
    color: #fff;
    top: 30%;
  }
  .zb_title1{
    font-size: 1.6rem;
  }
  .zb_title1 img{
    width: 20px;
    transform: translateY(-25%);
  }
  .zb_title2{
    font-size: 0.8rem;
  }
  .banleft{
    position: absolute;
    left: 20px;
    top: 25px;
    height: 150px;
  }
  .banright{
    position: absolute;
    right: 20px;
    top: 25px;
    height: 150px;
  }
  .zb_smbox{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .smbox_li{
    width: 25%;
    text-align: center;
    padding: 15px 0;
    border-right: 1px solid #eee;
    border-top: 1px solid #eee;
  }
  .sm_imgs{
    transform: translateY(-10%) scale(0.6);
  }
  .space_a{
    background: #f0f3f5;;
    height: 10px;
  }
  .space_bottom{
    height: 35px;
    background: #fff;
  }
  .tj_area{
    padding: 10px;
  }
</style>
