<template>
  <div id="test">
    <InputForm 
      :imgUrl="form.imgUrl" 
      :title="form.title" 
      :fields="fields" 
      :redirect="form.redirect"
      :urlEndPoint="form.axiosPost"  
    />
  </div>
</template>

<script>
import InputForm from "./../components/form/InputForm";
import { Validator, extend } from "vee-validate";

export default {
  data() {
    return {
      form: {
        imgUrl: "logo.svg",
        title: "REGISTER",
        redirect: "เข้าสู่ระบบ",
        axiosPost: "users/signup"
      },
      fields: [
        // {
        //     type: "text",
        //     key: 'userName',
        //     name: "User Name",
        //     lable: "ชื่อผู้ใช้งาน",
        //     rules: "required",
        //     value: ''
        // },
        {
          type: "email",
          key: "email",
          name: "email",
          lable: "Email",
          placeholder: "Email",
          rules: "required|email",
          value: ""
        },
        // {
        //     type: "text",
        //     key: 'firstName',
        //     name: "First Name",
        //     lable: "ชื่อ",
        //     rules: "required",
        //     value: ""
        // },
        // {
        //     type: "text",
        //     key: 'lastName',
        //     name: "Last Name",
        //     lable: "นามสกุล",
        //     rules: "",
        //     value: ""
        // },
        {
          type: "password",
          key: "password",
          name: "password",
          lable: "รหัสผ่าน",
          placeholder: "Password",
          rules: "required|min:8",
          value: "",
          vid: ""
        },
        {
          type: "password",
          key: "confirm",
          name: "confirm",
          lable: "ยืนยันรหัสผ่าน",
          placeholder: "Password Confirm",
          rules: "required|password:@password",
          value: "",
          vid: "confirm"
        },
        {
          type: "text",
          key: "positive",
          name: "positive",
          lable: "ทดสอบ extend",
          placeholder: "เลขคี่ ทดสอบ extend custom validation",
          rules: "positive",
          value: ""
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