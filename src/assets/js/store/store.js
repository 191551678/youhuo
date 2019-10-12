import Vue from 'vue';
import Vuex from 'vuex';

/*Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。*/


/*Action 类似于 mutation，不同在于：
Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。*/


Vue.use(Vuex);



export default new Vuex.Store({
	state:{
		del:false,
		totalPrice: 900,
    allChecked:false,
		totalNum: 3,
		added:[],
		buy:[
			{
        checked:false,
				id:0,
				imag:'./data/images/details05.png',
				name:"adidas Alpha Bounce Beyond",
				desc:"黑色",
				size:45,
				num:1,
				price:400
			},
			{
        checked:false,
				id:1,
				imag:'./data/images/home008.jpg',
				name:"Converse 1970s High White 白色Hi",
				desc:"红色",
				size:44,
				num:1,
				price:300
			},
			{
        checked:false,
				id:2,
				imag:'./data/images/home009.jpg',
				name:"Anta White 白色Hi",
				desc:"白色",
				size:43,
				num:1,
				price:200
			}
		]
    /* total:[
    	{
        checked:false,
    		id:0,
    		imag:'./data/images/home21.jpg',
    		name:"AJ19",
    		desc:"黑色",
    		size:45,
    		num:1,
    		price:600
    	},
    	{
        checked:false,
    		id:1,
    		imag:'./data/images/home27.jpg',
    		name:"Converse 1970s High White 白色Hi",
    		desc:"红色",
    		size:44,
    		num:1,
    		price:800
    	},
    	{
        checked:false,
    		id:2,
    		imag:'./data/images/home31.jpg',
    		name:"Anta White 白色Hi",
    		desc:"白色",
    		size:43,
    		num:1,
    		price:440
    	}
    ] */
	},
	mutations:{
		add_cart(state, id) {

		    state.buy[id].num++

		    state.totalNum++

		    state.totalPrice += state.buy[id].price

		 },
		reducec_cart(state, id) {

		    if (state.buy[id].num > 0) {

			    state.buy[id].num--

			    state.totalNum--

			    state.totalPrice -= state.buy[id].price

		    }
		},
		clearAll(state,id){

			state.totalPrice=0

			state.buy[id]=''
		},
		del(state,id){
      state.totalPrice -= state.buy[id].num*state.buy[id].price
      state.totalNum -= state.buy[id].num
			state.buy.splice(id,1)

		},
		todel(state){
			state.del=!state.del
		},

    allCheckedtrue(state){
      state.allChecked = true;
      console.log(state.allChecked)
    },
    allCheckedfalse(state){
      state.allChecked = false;
      console.log(state.allChecked)
    }
    /* addbuy(state,id){
      state.buy.push(state.total[id])
    } */

	}


})
