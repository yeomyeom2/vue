<template>
  <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
export default {
	mounted() {
		const data = {
			datasets: [{
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				data: [65, 59, 80, 81, 56, 55, 40],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1
			}]
		};

		new this.$_Chart(this.$refs.lineChart, {
			type: 'line',
			data: data,
		});
	}
}
</script>

<style>

</style>