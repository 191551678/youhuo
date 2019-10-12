<template>
	<div class="buycar_box">
		<div class="buycar_header">
			<h3 class="buycar_header_img" @click="back()"><img src="../assets/images/goback.png" alt="" /></h3>
			<span class="gwc">购物车（{{this.$store.state.totalNum}}）</span>
      <span :class="{gl_btn:true,gl_active:gls==true}" @click="todelect(),togls()">管理</span>
		</div>
		<div>
			<cart></cart>
		</div>
		<div class="info">
			<i @click="handleChecked()" :class="{select_off:true,select_on:allChecked==true}"></i>
			<span class="total_btn">全选</span>


			<span class="money">
				合计：￥{{TotalPrice}}
			</span>
			<div class="buys" @click="clearall()">
				结算
			</div>
		</div>
	</div>
</template>

<script>
import cart from './cart.vue'
export default {
	data(){
		return {
      buy:this.$store.state.buy,
      gls:false
		}
	},
	components:{
		"cart":cart
	},
	methods:{
    togls(){
      this.gls=!this.gls
    },
		back(){
			this.$router.go(-1)
		},
		clearall(){
			this.$store.commit('clearAll')
		},
		todelect(){
			this.$store.commit('todel')
		},
     //全选
    handleChecked:function(item) {
    		if(this.allChecked==false) {
    			for(var i = 0; i < this.buy.length; i++) {
    				var item = this.buy[i];
    				item.checked = true;
            this.$store.commit('allCheckedtrue')
    			}
    		} else {
    			for(var i = 0; i < this.buy.length; i++) {
            var item = this.buy[i];
    				item.checked = false;
            this.$store.commit('allCheckedfalse')
    			}
    		}
    		// this.allChecked = !this.allChecked;

      }

	},
  computed:{
    TotalPrice: function () {
          this.totalPrice = 0;//每次遍历商品之前对总金额进行清零
          this.buy.forEach((item, index) => {//遍历商品，如果选中就进行加个计算，然后累加
              if (item.checked==true){
                  this.totalPrice += item.price*item.num;//累加
              }
          })
          return this.totalPrice
      },
      allChecked:function(){
        return this.$store.state.allChecked
      }


  }
}
</script>

<style scoped="scoped">
	.buycar_box{
		height: 100%;
		position:relative;
	}
	.buycar_header{
		text-align: center;
		position: relative;
		height: 3rem;
		background: #fff;
	}
	.gwc{
		line-height: 3rem;
		font-size: 1.2rem;
	}
	.buycar_header_img img{
		width: 2rem;
		position: absolute;
		left: 10px;
		top: 10px;
	}
	.info{
		position: fixed;
		width: 100%;
		height: 50px;
		background: #fff;
		bottom: 0px;
		left: 0px;
		border-top: 1px solid #eee;
		padding-right: 120px;
	}
	.buys{
		width: 100px;
		color: #fff;
		height: 50px;
		background: #FF4338 !important;
		position: absolute;
		right: 0px;
		top: 0px;
		text-align: center;
		line-height: 50px;
		font-size: 1rem;
	}
	.money{
		float: right;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
	.total_btn{
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		display: inline-block;
		left: 0px;
	}
  .gl_btn{
    display: block;
    width: 60px;
    height: 30px;
    border: none;
    position: absolute;
    top: 8px;
    right: 15px;
    font-size: 1rem !important;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
  }
  .gl_active{
      background: #e9e9e9;
    text-shadow: none;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;
  }
</style>
