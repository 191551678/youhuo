<template>
	<div class="cart_box">
		<ul>
			<li v-for="(v,i) in buy" class="buy_car_lis">
				<span class="buy_select_box"><i :class="{select_off:true,select_on:v.checked==true}" v-model="v.checked" @click="onlyChecked(i)"></i></span>

				<span class="buy_img">
					<img :src="v.imag" alt="" />
				</span>
				<div class="buy_right">
					<span class="buy_title">{{v.name}}</span>
					<span class="buy_desc">{{v.desc}}</span>
					<span class="delect" v-if="del" @click="delone(i)">删除</span>
					<div>
						<span class="buy_price">￥{{v.price}}</span>
						<div class="buy_num_box">
							<span class="fh" @click="add(i)">+</span>
							<span class="buy_num">{{v.num}}</span>
							<span class="fh" @click="reduce(i)">-</span>
						</div>

					</div>
				</div>

			</li>
		</ul>
	</div>
</template>

<script>

export default {
	data(){
		return {
      buy:this.$store.state.buy,
      allChecked:this.$store.state.allChecked,
		}
	},
	computed:{
		del(){
			return this.$store.state.del
		}
	},
	methods:{
		add(id){
			this.$store.commit('add_cart',id)
		},
		reduce(id){
			this.$store.commit('reducec_cart',id)
		},
		delone(id){
			this.$store.commit('del',id)
		},

    //单选
    onlyChecked(index){
      this.buy[index].checked=!this.buy[index].checked
      var itemChecked = [];
      this.buy.forEach( (item, index)=>{
          var item = this.buy[index];
          if (item.checked == true ) {
              itemChecked.push(item);
          }
      })
      if (itemChecked.length == this.buy.length ) {
          this.allChecked = true;
          this.$store.commit('allCheckedtrue')
      }else{
          this.allChecked = false;
          this.$store.commit('allCheckedfalse')
      }
      // console.log(this.allChecked)
    },


	}
}
</script>

<style>
	.cart_box{
		padding: 5px 10px;
	}
	.buy_img{
		margin-right:15px;
		margin-left: 5px;
	}
	.buy_img img{
		width: 80px;
		height: 80px;
	}
	.buy_car_lis{
		display: flex;
		width: 100%;
		margin: 10px 0;
		padding: 10px 0;
		background: #fff;
		border-radius: 5px;
		position: relative;

	}
	.buy_right{
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		width: 100%;
		padding-right: 10px;
	}
	.buy_num_box{
		float: right;
	}
	.buy_desc{
		color: #aaa;
	}
	.buy_price{
		color: red;
	}
	.select_off{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		margin-right: 5px;
		border: 1px solid #aaa;
		background: #fff;
		display: inline-block;
		position: relative;
		margin-left: 10px;
		top: 50%;
		transform: translateY(-50%);
	}
	.select_on{
		border: 1px solid transparent;
		background: #FF4338 !important;
    position: relative;
	}
  .select_on::after{
    color: #fff;
    font-size: 1px;
    content: '√';
    position: absolute;
    top: -1px;
    left: 0px;
  }
	.buy_select_box{
		display: inline-block;
	}
	.buy_num_box{
		border: 1px solid #ccc;
		padding: 0px 5px;
		text-align: center;
		border-radius: 3px;
	}
	.buy_num{
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
		padding: 0px 10px;
	}
	.fh{
		width: 10px;
		display: inline-block;
	}
	.delect{
		position: absolute;
		right: 15px;
		bottom: 40px;
		display: inline-block;
		background: #FF4338;
		color: #fff;
		padding: 2px 15px;
	}
</style>
