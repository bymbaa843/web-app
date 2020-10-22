<template>
<div>
    <h1>Бүртгүүлэх</h1>
    <input
    type="email"
    name="email"
    v-model="email"
    placeholder="email" />
<br><br>
 <input
    type="password"
    name="password"
    v-model="password"
    placeholder="password" />
    <br><br>
    <button
    @click="register">
    Бүртгүүлэх
    </button>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
<style scoped>
</style>
