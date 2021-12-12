import { createWebHistory, createRouter } from 'vue-router';
import UserList from './components/UserList.vue';
import UserDetails from './components/UserDetails.vue';

const routes = [
	{
		path: '/',
		name: 'UserList',
		component: UserList,
	},

	{
		path: '/user-details',
		name: 'UserDetails',
		component: UserDetails,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: function (to) {
		if (to.hash) {
			return {
				el: to.hash
			}
		} else {
			return { top: 0 }
		}
	},
	
});

export default router;
