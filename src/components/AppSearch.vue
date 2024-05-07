<template>
	<div class="w-50 mx-auto mb-4">
		<select
			v-model="store.selectedStatus"
			@change="changeStatus"
			class="form-select"
		>
			<option value="all">All</option>
			<option value="alive">alive</option>
			<option value="dead">dead</option>
			<option value="unknown">unknown</option>
			<!-- <option
				v-for="status in statuses"
				:value="status"
			>
				{{ status }}
			</option> -->
		</select>
	</div>
</template>

<script>
import { store } from '../store';
export default {
	data() {
		return {
			statuses: ["alive", "dead", "unknown"],
			store: store,
		};
	},
	methods: {
		changeStatus(){
			this.$emit("cambiaStatus")
		}
	},
};
</script>

<style lang="scss" scoped></style>
