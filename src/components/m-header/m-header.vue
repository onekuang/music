<template>
	 <div class="m-header">
	 	<div class="icon"></div>
	 	<h1 class="text">Music</h1>
	 </div>
</template>

<script>
	export default {}
</script>

<style scoped lang="stylus" rel='stylesheet/stylus'>
	@import "../../common/stylus/variable.styl"
	@import "../../common/stylus/mixin.styl"

	.m-header
		background: #000;
		position: relative;
		height: 44px;
		text-align: center;
		font-size: 0;
		.icon
			display: inline-block;
			vertical-align: top;
			margin-top: 6px;
			width: 30px;
			height: 32px;
			// bg-image('logo')
			background-image: url(logo.png);
			background-size: 30px 32px;
		.text
			display: inline-block;
			vertical-align: top;
			line-height: 44px;
			font-size: $font-size-large;
		.mine
			position: absolute;
			top: 0;
			right: 0;
			.icon-mine
				display: block;
				padding: 12px;
				font-size: 20px;
				color: $color-theme;
</style>
