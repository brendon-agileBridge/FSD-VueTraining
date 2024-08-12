import {defineStore} from "pinia";

export const useTotalsStore = defineStore('totals', {
    state: () => ({ total: 0}),
    getters: {
        totalCount: (state) => state.total,
    },
    actions: {
        incrementBy(val) {
            this.total = (this.total??0)+val;
            
        },
    },
})