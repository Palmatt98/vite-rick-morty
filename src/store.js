import { reactive } from "vue";

//lo store serve per esporre delle variabili a livello globale, quindi tutti i componenti vue posso accedere, all'occorrenza, a queste varabili
export const store = reactive({
	selectedStatus: null,
});
