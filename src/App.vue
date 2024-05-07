<template>
	<div class="wrapper">
		<Loading v-if="isLoading === true" />
		<div v-else>
			<Header />
			<AppSearch @cambiaStatus="callBackCambiaStatus" />
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
import AppSearch from "./components/AppSearch.vue";
import { store } from "./store";

export default {
	components: {
		Header,
		CardList,
		AppCard,
		Loading,
		AppSearch,
	},
	data() {
		return {
			cardsArray: [],
			isLoading: false,
			store,
			URL: "https://rickandmortyapi.com/api/character",
		};
	},
	created() {
		this.isLoading = true;
		axios.get(this.URL).then((resp) => {
			setTimeout(() => {
				this.cardsArray = resp.data.results;
				this.isLoading = false;
			}, 500);
		});
	},
	methods: {
		callBackCambiaStatus() {
			this.isLoading = true;
			let changedURL = `https://rickandmortyapi.com/api/character?status=${store.selectedStatus}`;
			if (this.store.selectedStatus === "all") {
				changedURL = this.URL;
			}
			console.log(changedURL);
			axios.get(changedURL).then((resp) => {
				setTimeout(() => {
					this.cardsArray = resp.data.results;
					this.isLoading = false;
				}, 500);
			});
		},
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
