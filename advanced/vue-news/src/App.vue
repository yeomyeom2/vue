<template>
	<div id="app">
		<tool-bar></tool-bar>
		<transition name="page">
			<router-view></router-view>
		</transition>
		<SpinnerBar :loading="loadingStatus"></SpinnerBar>
	</div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import SpinnerBar from './components/SpinnerBar.vue';
import bus from './utils/bus.js';

export default {
	components: {
		ToolBar,
		SpinnerBar,
	},
	data() {
		return {
			loadingStatus: false,
		};
	},
	methods: {
		startSpinner() {
			this.loadingStatus = true;
		},
		endSpinner() {
			this.loadingStatus = false;
		}
	},
	created() {
		bus.$on('start:spinner',  this.startSpinner);
		bus.$on('end:spinner', this.endSpinner);

		console.log(process.env.VUE_APP_TITLE);
	},
	beforeDestroy() {
		bus.$off('start:spinner', this.startSpinner);
		bus.$off('end:spinner', this.endSpinner);
	}
}
</script>

<style>
body	{
	margin: 0;
	padding: 0;
}
ul a	{text-decoration: none;}
ul a.router-link-exact-active	{text-decoration: underline;}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
