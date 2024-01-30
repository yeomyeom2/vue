<template>
	<div>
		<Swiper
			:space-between="50"
			:loop="true"
		>
			<SwiperSlide
				v-for="(slide, index) in slidesFubao"
				:key="index"
			>
			<img :src="`${slide}`" alt="1" />
		</SwiperSlide>
		</Swiper>

		<!-- <img src="@/assets/img/fubao_1.jpeg"/> -->
		
	</div>
</template>

<script setup>
const slidesFubao = [
	'_nuxt/assets/img/fubao_1.jpeg',
	'_nuxt/assets/img/fubao_2.jpeg',
	'_nuxt/assets/img/fubao_3.jpeg',
	'_nuxt/assets/img/fubao_4.jpeg',
	'_nuxt/assets/img/fubao_5.jpeg',
	'_nuxt/assets/img/fubao_6.jpeg'
];
</script>

<style lang="scss" scoped>
.swiper	{
	width: 80%;
	height: 60rem;
	img	{height: 100%;object-fit: contain;}
}
</style>