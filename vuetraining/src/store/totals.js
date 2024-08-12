import {defineStore} from "pinia";

export const useTotalsStore = defineStore('totals', {
    state: () => ({ total: 0}),
    getters: {
        totalCount: (state) => state.count,
    },
    actions: {
        incrementBy(val) {
            this.count = this.count+val;
        },
    },
})