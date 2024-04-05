<template>
  <div class="signUp Page">
    <div class="fillUp">
      <form  @submit.prevent="handleCreate">
      <div class="signupTitle">
        <h1>Create an Account</h1>
      </div>
        <div class="form-row">
          <div class="fname">
            <label>First Name</label>
            <input type="text" placeholder="Charles Brian" required v-model="firstname ">
          </div>
          <div class="lname">
            <label>Last Name</label>
            <input type="text" placeholder="Partosa" required pattern="[A-Za-z]+"  v-model="lastname">
          </div>
        </div>

        <div class="form-row">
          <div class="mname">
            <label>Middle Name</label>
            <input type="text" placeholder="Bernal (put N/A if none)" pattern="[A-Za-z]+"  v-model="middlename">
          </div>
          <div class="suffix">
            <label>Suffix</label>
            <select v-model="suffix">
              <option value="Sr">Sr</option>
              <option value="Jr">Jr</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
            </select>
          </div>
        </div>
        
        <div class="form-row">
          <div class="contact">
            <label>Contact Number</label>
            <input type="text" placeholder="09123456789" required pattern="[0-9]*" maxlength="11" v-model="contactnumber">
          </div>
          <div class="gender">
              <label>Gender</label>
              <select v-model="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="x">Prefer not to say</option>
              </select>
          </div>
        </div>
        <div class="form-row">
          <div class="birthdate">
            <label>Date of Birth</label>
            <input type="date" @change="validateDate" required v-model="birthdate">
          </div>
          <div class="agediv">
            <label>Age</label>
              <div class="age">
                <p class="agevalue" v-if="age !== null">{{ age }}</p>
              </div>
          </div>
  
        </div>

        <div class="form-row">
          <div class="emailCreate">
            <label>Email:</label>
            <input type="email" placeholder="codehub@code.com" required v-model="email">
          </div>

          <div class="passCreate">
            <label>Password:</label>
            <input type="password" placeholder="password" required v-model="password">
          </div>
        </div>
        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept Terms and Conditions</label>
        </div>
        <div class="signUP">
          <button class="createAcc">Sign Up</button>
        </div>

      </form> 
      <router-view/>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return{
      email: '',
      password: '',
      passwordError: '',
      firstname: '',
      lastname: '',
      middlename:'',
      suffix:'',
      contactnumber: '',
      gender: '',
      birthdate: null,
      age: null,
      maxDate: this.getMaxDate(),
      terms: false
    }
  },
  methods: {
    handleCreate(){
      this.passwordError = this.password.length > 5 ? 
      '': 'Password must be at least 5 characters long'
      console.log("Form Submitted")
      console.log('email: ', this.email)
      console.log('password: ', this.password)
      console.log('firstname: ', this.firstname)
      console.log('lastname: ', this.lastname)
      console.log('middlename: ', this.middlename)
      console.log('suffix: ', this.suffix)
      console.log('contactnumber: ', this.contactnumber)
      console.log('birthdate: ', this.birthdate)
      console.log('age: ', this.age)
      console.log('gender: ', this.gender)
      console.log('terms ',this.terms)

      this.email= ''
      this.password= ''
      this.firstname= ''
      this.lastname= ''
      this.middlename= ''
      this.suffix= ''
      this.contactnumber= ''
      this.birthdate= ''
      this.age= ''
      this.gender= ''
      this.terms=''
      

    },
    validateDate() {
      if (this.birthdate && new Date(this.birthdate) > new Date()) {
        this.birthdate = null;
        this.age = null;
      } else {
        this.calculateAge();
      }
    },
    calculateAge() {
      if (this.birthdate) {
        const birthdate = new Date(this.birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
          age--;
        }
        this.age = age;
      } else {
        this.age = null;
      }
    },
    getMaxDate() {
      const today = new Date();
      const year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();

      if (month < 10) {
        month = '0' + month;
      }
      if (day < 10) {
        day = '0' + day;
      }
      return `${year}-${month}-${day}`;
    }
  }
}
</script>

<style>
  .signupTitle {
    size: 50px;
    color: white;
  }

  .agevalue {
    color: #ffa31a;
    font-size: 30px;
    margin:0;
    padding: 0 5px 0 5px;
  }
  .form-row , .signUP{
    display: flex;
    gap: 10px;
  }
 .createAcc{
  background: #ffa31a;
  width: 100%;
  border: 0;
  text-align: center;
  padding: 10px 20px;
  margin:40px 0 0 100px; 
  color: #1b1b1b;
  border-radius: 3px;
  border-bottom: 2px solid #1b1b1b;
 }
</style>


