import { defineStore } from 'pinia'

export const useCounterStore = defineStore('storeCounter', {
  id: 'counter',
  state: () => ({
    count: 0,
    title: "Pinia Example Counter",
  }),

  actions: {
    increaseCount() {
      this.count++;
    },

    decreaseCount(){
      this.count--;
    }

  },
  
  getters: {
    oddOrEven:(state) => {
      if (state.count % 2 === 0) return "Even";
      return "Odd"
    }
  },
})