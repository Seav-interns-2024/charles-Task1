<template>
    <div class="fillUp">
      <form  @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" placeholder="codehub@code.com" required v-model="email">

        <label>Password:</label>
        <input type="password" placeholder="password" required v-model="password">
        <div v-if="passwordError" class="error"> {{ passwordError }} </div>
        <div class="login">
          <button class="log">Log In</button>
        </div>
      </form>      
    </div>
    <div class="options">
      <a href="#">Send OTP</a>
      <a href="#">Forgot Password?</a>
    </div>
</template>

<script >
export default {
  data() {
    return{
      email: '',
      password: '',
      passwordError: '',
      confirm: true
    }
  },
  methods: {
    handleSubmit(){
      this.passwordError = this.password.length > 5 ? 
      '': 'Password must be at least 5 characters long'
      console.log("Logged In")
    }
  }

}
</script>


<style>
.loginPage {
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin-top: 150px;
}
.signup{
  padding-left: 80px;
}

form {
    max-width: 500px;
    margin: 10px auto;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #ffa31a;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
}
input, select{
    display: block;
    padding: 10px 100px 10px 6px;
    width: 300px;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    border-bottom: 2px solid #ffa31a;
}

.create {
  font-size: 17px;
  text-decoration: none;
  color: #ffa31a	;
  margin-left: 5px;
}

.log {
  background: #ffa31a;
  width: 100%;
  border: 0;
  text-align: center;
  padding: 10px 20px;
  margin-top:40px; 
  color: #1b1b1b;
  border-radius: 3px;
  border-bottom: 2px solid #1b1b1b;
}

input::placeholder{
   opacity: 70%;
}

.signup {
  display: flex;
  align-items: baseline;
  margin-top: 1px;
}
.signStatement {
  color: #ffa31a;
}
.error{
  color: #ffa31a;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

a {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #ffa31a;
  text-decoration: none;
}
</style>