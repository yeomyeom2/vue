<template>
	<div class="wrap-slide">
		<Swiper
			v-bind="slideOptions"
			:modules="[SwiperNavigation]"
			:navigation = "true"

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
const swiper = useSwiper();

const slidesFubao = [
	'_nuxt/assets/img/fubao_1.jpeg',
	'_nuxt/assets/img/fubao_2.jpeg',
	'_nuxt/assets/img/fubao_3.jpeg',
	'_nuxt/assets/img/fubao_4.jpeg',
	'_nuxt/assets/img/fubao_5.jpeg',
	'_nuxt/assets/img/fubao_6.jpeg'
];

const slideOptions	= {
	spaceBetween: 40,
	loop: true,
	centeredSlides: true,
	loopedSlides: 2,
}

</script>

<style lang="scss" scoped>
.wrap-slide	{overflow: hidden;}
.swiper	{
	overflow-x: visible;
	width: 50%;
	&>div	{background-color: #000;}
	img	{height: 100%;object-fit: contain;}
}

</style>
<style lang="scss">
.wrap-slide .swiper-wrapper	{align-items:center;}
</style>