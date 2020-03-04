<template>
  <div id="signup">
    <InputForm 
      :imgUrl="form.imgUrl" 
      :title="form.title" 
      :fields="fields" 
      :redirect="form.redirect"
      :secondButton="form.secondButton"
      :urlEndPoint="form.axiosPost"  
    />
  </div>
</template>

<script>
import axios from 'axios'
import InputForm from "./../components/form/InputForm";

export default {
  data() {
    return {
      form: {
        imgUrl: "logo.svg",
        title: "Login",
        secondButton: "Cancle",
        redirect:"test",
        axiosPost: "/api/v1/users/login"
      },
      fields: [
        {
          type: "email",
          key: "email",
          name: "email",
          lable: "Email",
          placeholder: "Email",
          rules: "required|email",
          value: ""
        },
        {
          type: "password",
          key: "password",
          name: "password",
          lable: "รหัสผ่าน",
          placeholder: "Password",
          rules: "required",
          value: ""
        }
      ]
    };
  },
  components: {
    InputForm
  },
  methods: {
    getUser() {
      console.log(res.cookies)
    },
    onSubmit() {
      console.log('submit in login')
    }
  },
};
</script>

<style>
</style>