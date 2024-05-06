<template>
	<div class="container">
		<div class="row">
			<div class="col-3 border-danger" v-for="card in cardsArray">
				<AppCard :cardObject="card"/>
			</div>
		</div>
	</div>
</template>

<script>
import AppCard from './AppCard.vue';
export default {
	components:{
		AppCard,
	},
	props:{
		cardsArray: Array
	}
}
</script>

<style lang="scss" scoped></style>
