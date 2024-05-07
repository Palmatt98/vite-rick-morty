<template>
	<div class="w-50 mx-auto mb-4">
		<select v-model="selectedStatus" @change="onChangeStatus" class="form-select">
			<option value="all">All</option>
			<option v-for="status in statuses" :value="status">{{ status }}</option>
			<!-- <option value="1">One</option>
			<option value="2">Two</option>
			<option value="3">Three</option> -->
		</select>
	</div>
</template>

<script>
export default {
	data() {
		return {
			statuses: ["alive", "dead", "unknown"],
			selectedStatus: "all",
		};
	},
	methods: {
		onChangeStatus() {
			this.$emit("cambioStato", this.selectedStatus);
		},
	},
};
</script>

<style lang="scss" scoped></style>
