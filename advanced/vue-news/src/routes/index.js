import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
// import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history', //# 제거
	routes: [
		{
			path: '/',
			redirect: '/news'
		},
		{
			// path: url 주소
			path: '/news',
			name: 'news',
			// component: url 주소로 갔을 때 표시될 컴포넌트
			// component: createListView('NewsView'),
			component: NewsView,
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				// #1
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						// #5
						console.log(5);
						console.log('fetched');
						bus.$emit('end:spinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
					
				// console.log('to', to);
				// console.log('from', from);
				// console.log(next);
				// next();
			},
		},
		{
			path: '/ask',
			name: 'ask',
			// component: createListView('AskView'),
			component: AskView,
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						console.log('fetched');
						// bus.$emit('end:spinner');
						next();
					})
					.catch(error => {
						console.log(error);
					});
			},
		},
		{
			path: '/jobs',
			name: 'jobs',
			// component: createListView('JobsView'),
			component: JobsView,
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
					.then(() => next())
					.catch(error => {
						console.log(error);
					});
			},
		},
		{
			path: '/user/:id',
			component: UserView,
		},
		{
			path: '/item/:id',
			component: ItemView,
		}
	]
});