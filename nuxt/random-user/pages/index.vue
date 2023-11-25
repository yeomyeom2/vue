<template>
  <div>
    <TitleTag>국가 선택</TitleTag>
    <ul>
      <li v-for="nat in natArr" :key="nat">
        <input type="radio" :id="nat" name="nat" :value="nat" @change="natCheck" v-model="natSelected">
        <label :for="nat">{{ nat }}</label>
      </li>
    </ul>
    <TitleTag>성별 선택</TitleTag>
    <select name="gender" id="gender" v-model="genderSelected">
      <option v-for="(gender, key) in genderArr" :key="key" :value="gender">{{ gender }}</option>
    </select>

    <button type="button" @click="inquiryUser">조회하기</button>

	<div>
		<TitleTag>유저 리스트</TitleTag>
		{{ usersArr }}<br>
		aa: {{ inquiryArr }}
		<ul>
			<li></li>
		</ul>
	</div>
  </div>
</template>

<script setup>
const router = useRouter();

const users = await $fetch('https://randomuser.me/api/?inc=gender,nat&results=10').catch((error) => error.data);
const usersArr = users.results;
console.log(usersArr);

//국가
const natArr = [...new Set(usersArr.map(user => user['nat']))];

//성별
const genderArr = [...new Set(usersArr.map(user => user['gender']))];

//국가 체크
const natSelected = ref('');
const genderSelected = ref('');

//조회하기
let inquiryArr = ref([]);
const inquiryUser = () => {
	natSelected.value === '' | genderSelected.value === ''
		? alert('국가와 성별을 선택하세요.')
		: (
			inquiryArr = usersArr.filter((user) => {
				return user.nat === natSelected.value && user.gender === genderSelected.value;
			})
		)
};

</script>

