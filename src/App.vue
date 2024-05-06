<template>
	<div class="wrapper">
		<Loading v-if="isLoading === true" />
		<div v-else>
			<Header />
			<CardList :cardsArray="cardsArray" />
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import AppCard from "./components/AppCard.vue";
import Loading from "./components/Loading.vue";

export default {
	components: {
		Header,
		CardList,
		AppCard,
		Loading,
	},
	data() {
		return {
			cardsArray: [],
			isLoading: false,
		};
	},
	created() {
		this.isLoading = true;
		axios.get("https://rickandmortyapi.com/api/character").then((resp) => {
			setTimeout(() => {
				this.cardsArray = resp.data.results;
				this.isLoading = false;
			}, 2000);
		});
	},
};
</script>

<style lang="scss">
.wrapper {
	background-image: url("./assets/img/bg.jpg");
	background-size: 15%;
	background-color: rgba(#fff, 0.2);
	min-height: 100vh;
}
</style>
