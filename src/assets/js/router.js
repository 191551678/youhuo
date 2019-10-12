import VueRouter from 'vue-router'
import home from '../../component/home.vue'
import public1 from '../../component/public1.vue'
import public2 from '../../component/public2.vue'
import running from '../../component/running.vue'
import search from '../../component/search.vue'
import detail from '../../component/detail.vue'
import news from '../../component/news.vue'
import youhui from '../../component/youhui.vue'
import my from '../../component/my.vue'
import list from '../../component/list.vue'
import buycar from '../../component/buycar.vue'
import account from '../../component/account.vue'
import zhuce from '../../component/zhuce.vue'
import zhuangbei from '../../component/zhuangbei.vue'
import found from '../../component/found.vue'





export default new VueRouter({
	routes:[
		{
			path:'/',
			component:public1,
			children:[
				{
					path:'/home',component:home,
          name:'首页'
				}
			],
			redirect:'/home'
		},
		{
			path:'/public1',
			component:public1,
			children:[
				{
					path:'/home',component:home,
          name:'首页'
				},
				{
					path:'/search',component:search,
          name:'首页'
				},
				{
					path:'/youhui',component:youhui,
          name:'优惠'
				},
				{
					path:'/my',component:my,
          name:'更多'
				},
				{
					path:'/zhuangbei',component:zhuangbei,
          name:'装备'
				},
				{
					path:'/found',component:found,
          name:'发现'
				}
			]
		},
		// {
		// 	path:'/public2',
		// 	component:public2,
		// 	children:[
		// 		{
		// 			path:'/news',component:news,
		// 		},
		// 		{
		// 			path:'/running',component:running,
		// 		},
		// 		{
		// 			path:'/detail',component:detail
		// 		}
		// 	]
		// },
		{
			path:'/news',component:news,
		},
		{
			path:'/running',component:running,
		},
		{
			path:'/detail',component:detail
		},
		{
			path:'/buycar',component:buycar
		},
		{
			path:'/account',component:account
		},
		{
			path:'/list',component:list
		},
		{
			path:'/zhuce',component:zhuce
		}
	]
})
