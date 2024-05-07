<template>
	<div class="myCard text-center mb-5">
		<img :src="cardObject.image" alt="" />
		<p class="fs-4">{{ cardObject.name }}</p>
		<p class="m-0 text-secondary">{{ cardObject.status }}</p>
		<p class="m-0 text-secondary">{{ cardObject.species }}</p>
	</div>
</template>

<script>
export default {
	props: {
		cardObject: Object,
	},
};
</script>

<style lang="scss" scoped>
.myCard {
	img {
		width: 100%;
		border-radius: 50%;
		-webkit-box-shadow: 0px 0px 14px -4px #000000;
		box-shadow: 0px 0px 14px -4px #000000;
		cursor: pointer;
	}
}
</style>
