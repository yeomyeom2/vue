import { 
	fetchList,
	fetchUserInfo,
	fetchCommentItem,
} from '../api/index.js';

export default {
	// async FETCH_NEWS(context) {
	// 	const response = await fetchNewsList();
	// 	context.commit('SET_NEWS', response.data);
	// 	return response;
	// },
	async FETCH_USER({ commit }, name) {
		// return fetchUserInfo(name)
		// 	.then(({ data }) => {
		// 		commit('SET_USER', data);
		// 	})
		// 	.catch(error => console.log(error));
		try {
			const response = await fetchUserInfo(name);
			commit('SET_USER', response.data);
			return response;
		} catch (error) {
			console.log(error);
		}
	},
	async FETCH_ITEM({ commit }, id) {
		// return fetchCommentItem(id)
		// 	.then(({ data }) => {
		// 		commit('SET_ITEM', data);
		// 	})
		// 	.catch(error => console.log(error));

		const response = await fetchCommentItem(id);
		commit('SET_ITEM', response.data);
		return response;
	},
	// #2
	async FETCH_LIST({ commit }, pageName) {
		// #3
		const response = await fetchList(pageName);
		commit('SET_LIST', response.data);
		return response;
	}
}