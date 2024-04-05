<template>
  <Header />
  <div class="division">
    <img src="@/assets/CodeHub_V.png" class="homepageLogo" alt="logo" >
    <div class="logInPage">
      <router-link :to="{ name : 'login'}"></router-link> 
      <router-view/>
      <div v-if="isVisible" class="toSignUp">
        <p class="messageCreate"> Don't have an account yet? </p>
        <router-link :to="{ name : 'signup' }" class="create" @click="toggleDiv">Sign Up</router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: { Header },
  data() {
    return {
      isVisible: true,
      originalVisibleState: true
    }
  },
  methods: {
    toggleDiv() {
      this.isVisible = !this.isVisible
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background: #292929;
  margin: 0;
}

.division {
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-top: 150px;
  padding: 0px;
}

.toSignUp {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.messageCreate{
  color: #ffa31a;
}
</style>

