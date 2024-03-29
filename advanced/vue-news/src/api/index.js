import axios from 'axios';

// 1. HTTP Request & Responce와 관련된 기본 설정
const config = {
	baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() {
	return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchAskList() {
	return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList() {
	return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchList(pageName) {
	try {
		return await axios.get(`${config.baseUrl}${pageName}/1.json`);
	} catch (error) {
		console.log(error);
	}
	
}

function fetchUserInfo(username) {
	return axios.get(`${config.baseUrl}user/${username}.json`);
}
async function fetchCommentItem(id) {
	try {
		const response = await axios.get(`${config.baseUrl}item/${id}.json`);
		return response;
	} catch (error) {
		console.log(error);
	}
}
// fetchNewsList()
// 	.then()
// 	.catch()

export {
	fetchNewsList,
	fetchAskList,
	fetchJobsList,
	fetchList,
	fetchUserInfo,
	fetchCommentItem,
}