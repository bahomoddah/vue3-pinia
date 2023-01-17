import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return {
      user: {
        name: "mohammed",
        token: null
      },
      auther: "bahomoddah",
      count: 0
    }
  },

  getters: {
    autherName(state) {
      return state.auther;
    },
    doubleCount: (state) => state.count * 2,
  },

  actions: {
    increment() {
      this.count++
    }
  }
})