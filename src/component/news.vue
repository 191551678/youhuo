<template>
  <div class="news_box">
    <div class="top_bar">
    	<div class="goback" @click="gohome()">
    		<img src="../assets/images/goback.png" alt="">
    	</div>
    	<span class="head_title">识货-识物</span>
    	<div class="head_more">
    		<img src="../assets/images/head_list_more.png" alt="">
    	</div>
    </div>
    <div @click=" backTop()" class=" backtop" v-if="btnFlag">
    	<img src="../assets/images/topup.png" alt="">
    </div>

    <div class="news_spacetop"></div>

    <div class="news">
      <div class="news_title">
        <h3>{{news[0].title}}</h3>
      </div>
      <div class="news_user">
        <img :src="news[0].user_img" alt="">
        <div class="inlinblock">
          <span class="news_user_box">
              {{news[0].user_name}}
              <span>{{news[0].user_time}}</span>
          </span>
        </div>
        <span class="news_user_right">{{news[0].user_desc}}</span>
      </div>
      <div class="news_area">
        <p>{{news[0].area}}</p>
      </div>
      <div class="news_imgs">
        <img :src="news[0].imgs1" alt="">
      </div>
      <div class="news_desc">
        <ul>
        	<li v-for="(v,i) in news[0].info" class="news_desc_li">{{v.p}}</li>
        </ul>
      </div>
      <div class="list_imgs">
        <img :src="news[0].list_imgs" alt="">
      </div>
      <div class="relative">
        <h3 class="bold qd_h3">单品清单：</h3>
        <ul>
          <li v-for="(v,i) in news[0].list_qd" class="qd_li">
            {{v.p}}
          </li>
        </ul>
        <div class="dkapp">
            <img src="../../data/images/news03.png" alt="">
        </div>
      </div>
      <div class="news_more">
        <img :src="news[0].more_img" alt="">
      </div>
      <div class="news_ipt" @click="show_on()">
        发表你的观点
      </div>

      <transition name="slide-fade" mode="out-in">
        <div class="news_show" @click="show_off()" v-if="show">
            <div class="news_show_ipt">去App Store打开</div>
        </div>
      </transition>


      <div class="news_pl">
        <div class="pl_title bold">
          最新评论&nbsp;|&nbsp;{{num}}
        </div>
        <div class="pl_area">
          <img src="../../data/images/nopl.png" alt="">
        </div>
      </div>
      <div class="tj_title bold">
        相关推荐
      </div>
      <running></running>


    </div>
  </div>
</template>

<script>
import running from'./running.vue'
export default {
  data(){
    return {
      show:false,
      btnFlag:true,
      num:0,
      news:[
        {
          title:'潮流折扣日Vol.53︱想要温暖帅气的初冬穿搭，来识货找就对了！',
          user_img:'./data/images/news04.jpg',
          user_name:'北向26度',
          user_time:'2018-11-23',
          user_desc:'潮流折扣日',
          area:'不知不觉，冬天已经来了。天气越来越冷的同时，一套温暖帅气的初冬穿搭也应该安排上了。找对了地方每天都是双十一，答应我，当你觉得缺少搭配灵感的时候，就常来识货看看吧！',
          imgs1:'./data/images/news01.gif'  ,
          info:[
            {
              p:'APP购买方式：'
            },
            {
              p:'1.下载识货APP'
            },
            {
              p:'2.进入APP中的“潮流”板块'
            },
            {
              p:'3.找到“潮流折扣日”栏目并进入'
            },
            {
              p:'4.选择相应的单品领券购买'
            },
            {
              p:'PS.如遇链接失效的情况请直接进店联系客服购买'
            }
          ],
          list_imgs:'./data/images/news02.jpeg',
          list_qd:[
            {
              p:'Open Your Mind 加厚保暖棉衣'
            },
            {
              p:'DMNUMB NASA连帽卫衣'
            },
            {
              p:'PROS BY CH 多口袋拼贴裤'
            },
            {
              p:'OZ Fantasy 复古拼色便携单肩包'
            }
          ],
          more_img:'./data/images/new04.jpg'
        }
      ]
    }
  },
  methods:{
    gohome(){
    	this.$router.push('/home')
    },
    backTop(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    },
    scrollToTop () {
    			const that = this
    			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    			that.scrollTop = scrollTop
    			if (that.scrollTop > 60) {
    			  that.btnFlag = true
    			} else {
    			  that.btnFlag = false
    			}
     },
     show_on(){
       this.show=true
     },
     show_off(){
       this.show=false
     }

  },
  components:{
    'running':running
  },
  mounted(){
    	window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style scoped="scoped">
  .news_box{
    background: #fff;
    overflow: hidden;
  }
  .top_bar{
  	background-color: #f7f7f7;
  	height: 3rem;
  	width: 100%;
  	position: fixed;
  	top: 0;
  	text-align: center;
  	z-index: 90;
  	border-bottom: 1px solid #e6e6e6;
  }
  .goback{
  	position: absolute;
  	left: 0;
  	top: 0;
  	height: 3rem;
  	width: 3rem;
  }
  .goback img{
  	height: 90%;
  }
  .head_more{
  	position: absolute;
  	right: 0;
  	top: 0;
  	height: 3rem;
  	width: 3rem;
  }
  .head_more img{
  	height: 90%;
  }
  .head_title{
  	position: absolute;
  	left: 50%;
  	top: 50%;
  	width: 50%;
  	transform: translate(-50%,-50%);
  	font-size: 1.2rem;
  	font-weight: 700;
  	overflow: hidden;
  	text-overflow: ellipsis;
  	white-space: nowrap;
  }

  .news_spacetop{
    height: 3rem;
    width: 100%;
  }
  .news{
    padding: 10px 15px;
  }
  .news_title{
    padding-bottom: 20px;
  }
  .news_title h3{
    font-size: 1.2rem;
    font-weight: 700 !important;
  }
  .news_user img{
    width: 30px;
    border-radius: 50%;
    transform: translateY(25%);
  }
  .inlinblock{
    display: inline-block;
  }
  .news_user_box{
    font-size: 0.8rem;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
  }
  .news_user_box>span{
    font-size: 11px;
    color: #999;
  }
  .news_user_right{
    color: red;
    float: right;
    font-size: 0.5rem;
    transform: translateY(50%);
  }
  .news_area{
    padding: 20px 0;
  }
  .news_area p{
    letter-spacing: 0.5px;
    line-height: 30px;
    font-size: 1rem;
  }
  .news_imgs{
    padding: 10px 0;
  }
  .news_imgs img{
    width: 100%;
  }
  .news_desc_li{
    padding: 15px 0;
    font-size: 1rem;
    font-weight: bold;
  }
  .list_imgs{
    padding: 30px 0;
  }
  .list_imgs img{
    width: 100%;
  }
  .qd_li{
    padding: 10px 0;
    font-size: 0.8rem;
  }
  .qd_h3{
    padding-bottom: 10px;
  }
  .dkapp{
    padding-top: 50px;
    position: absolute;
    bottom: 0px;
    background-image: -webkit-linear-gradient(top,rgba(255,255,255,0) 0,#fff 47%);
  }
  .dkapp img{
    width: 100%;
  }
  .news_more{
    padding: 30px 0;
  }
  .news_more img{
    width: 100%;
  }
  .news_ipt{
    padding: 5px;
    background-color: #F7F7F7;
    border-radius: 2px;
    font-size: 14px;
    color: #cacaca;
    padding-left: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 30px 0;
  }
  .pl_title{
    font-size: 1rem;
  }
  .pl_area{
    padding: 30px 0;
     text-align: center;
  }
  .pl_area img{
    width: 60%;
  }
  .tj_title{
    font-size: 1rem;
  }
  .news_show{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../../data/images/down_img.jpg);
    background-position: 0;
    background-size: 100%;
    z-index: 999;
  }
  .news_show_ipt{
    width: 90%;
    background: #000;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 13px;
    text-align: center;
    font-size: 1.2rem;
  }


  .slide-fade-enter-active, .slide-fade-leave-active{
    transition:  all 1s;
  }
  .slide-fade-enter{
    transform: translate(400px);
  }
  .slide-fade-enter-to{
    transform: translate(0px);
  }
  .slide-fade-leave-to{
    transform: translate(400px);
  }
</style>
