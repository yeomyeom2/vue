<template>
	<div class="wrap-slide">
		<Swiper
			v-bind="slideOptions"
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
console.log(swiper, 1111);

const slidesFubao = [
	'_nuxt/assets/img/fubao_1.jpeg',
	'_nuxt/assets/img/fubao_2.jpeg',
	'_nuxt/assets/img/fubao_3.jpeg',
	'_nuxt/assets/img/fubao_4.jpeg',
	'_nuxt/assets/img/fubao_5.jpeg',
	'_nuxt/assets/img/fubao_6.jpeg'
];

const slideOptions	= {
	modules: [SwiperNavigation],
	navigation: true,
	slidesPerView: 'auto',
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
	&>div	{background-color: #000;}
	img	{height: 100%;object-fit: contain;}

	.swiper-slide	{
		width: 50%;
	}
}

</style>
<style lang="scss">
.wrap-slide	{
	.swiper-wrapper	{align-items:center;}
	[class^="swiper-button-"]	{
		width: 48px;
		height:48px;
		border-radius: 50%;
		background:rgba(255,255,255,0.6) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3Cpath fill='%231A2B3B' fill-rule='evenodd' d='M7.268 0 0 8l7.268 8L9 14.096 3.461 8 9 1.904z'/%3E%3C/svg%3E") 50% 50% no-repeat;background-size: 14% auto;
		&::after	{content:none;}
	}
	.swiper-button-next	{transform:rotate(180deg);}
}
</style>