<template>
    <div>
        {{ user.auther }}
        
    </div>
    <div>
        count: {{ user.count }}
        <br>
        <button @click="user.increment">increase</button>        
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { userStore } from '../stores/user'

export default defineComponent({
  setup() {
    const user = userStore()
    return {
      user
    }
  },
})
</script>

<style scoped>
</style>
