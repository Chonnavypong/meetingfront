<template>
  <div id="signup">
    <InputForm 
      :imgUrl="form.imgUrl" 
      :title="form.title" 
      :fields="fields" 
      :onRedirectTo="form.onRedirectTo"
      :secondButton="form.secondButton"
      :urlEndPoint="form.axiosPost"  
    />
  </div>
</template>

<script>
import InputForm from "./../components/form/InputForm";

export default {
  data() {
    return {
      form: {
        imgUrl: "logo.svg",
        title: "REGISTER",
        secondButton: "Cancle",
        redirect: "เข้าสู่ระบบ",
        onRedirectTo:"",
        redirect:"home",
        axiosPost: "/api/v1/users/signup"
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
            type: "text",
            key: 'firstName',
            name: "First Name",
            lable: "First Name",
            placeholder: "First Name",
            rules: "required",
            value: ""
        },
        {
            type: "text",
            key: 'lastName',
            name: "Last Name",
            lable: "Last Name",
            placeholder: "Last Name",
            rules: "",
            value: ""
        },
        {
          type: "password",
          key: "password",
          name: "password",
          lable: "รหัสผ่าน",
          placeholder: "Password",
          rules: "required|min:8",
          value: "11111111"
        },
        {
          type: "password",
          key: "passwordConfirm",
          name: "passwordConfirm",
          lable: "ยืนยันรหัสผ่าน",
          placeholder: "Password Confirm",
          rules: "required|password:@password",
          value: "11111111"
        }
      ]
    };
  },
  components: {
    InputForm
  }
};
</script>

<style>
</style>