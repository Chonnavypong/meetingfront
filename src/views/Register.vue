<template>
    <div class="register container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <img src="/img/logo.svg" alt="Logo" class="img-logo">
                <div class="card">
                    <h1 class="card-header">
                        REGISTER
                    </h1>
                    <div class="card-body">
                        <!-- ValidationObserver และ ValidationProvider มาจาก vee-validate -->
                        <ValidationObserver ref="observer" v-slot="{ invalid }">
                            <form @submit.prevent="onSubmit()">
                                <ValidationProvider
                                    v-for = "field in fields"
                                    :key = "field.name"
                                    :name = "field.name"
                                    :rules = "field.rules"
                                    v-slot = "{ errors }"
                                    persist
                                >
                                    <label> {{ field.lable }}</label>
                                    <input 
                                        v-model.trim = "field.value" 
                                        :type="field.type" 
                                        :placeholder = "field.name"
                                        class = "form-control">
                                    <span>{{ errors[0] }}</span>    
                                   
                                </ValidationProvider>
                                
                                <div v-if = "errorMessage" class="alert alert-warning">
                                    {{errorMessage}}
                                </div>

                                <div class="form-group buttons">
                                    <button :disabled="invalid" type="submit" class="btn btn-info btn-block">
                                        ลงทะเบียน
                                    </button>

                                    <button type="button" @click="onRedirectToLogin" class="btn btn-secondary btn-block">
                                        เข้าสู่ระบบ
                                    </button>
                                </div>
                                
                            </form>
                        </ValidationObserver>     
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import axios from 'axios'

export default {
    name: 'register',
    data() {
       return{
        elements: {},
        errorMessage: '',
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
                type: "text",
                key: 'email',
                name: "email",
                lable: "Email",
                rules: "required",
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
                type: "text",
                key: 'password',
                name: "Password",
                lable: "รหัสผ่าน",
                rules: "required",
                value: ""
            },
            {
                type: "text",
                key: 'passwordConfirm',
                name: "Password Confirm",
                lable: "ยืนยันรหัสผ่าน",
                rules: "required",
                value: ""
            }
        ]
       }
    },
    computed: {
        validateFeedback() {
        Object.keys(rules).forEach(rule => {
            extend(rule, {
                ...rules[rule], // copies rule configuration
                message: messages[rule] // assign message
                })
            })
            console.log(rule)
        }
    },
    methods: {
        onSubmit() {
                /** Send login form data to server */
            this.$refs.observer.validate()
            .then(results => {
                if (!results) {
                    return false
                }
                for(let i = 0; i < this.fields.length; i++){

                    this.elements[this.fields[i].key] = this.fields[i].value
                }
                axios
                    .post( 'api/v1/users/signup', this.elements)
                    .then( response => this.onFormReset() ) 
                    .catch( err => {this.errorMessage = err.response.data.message} )
            })
            .catch(err => { this.errorMessage = err.response.data.message} )
        },
        // ล้างค่า form
        onFormReset() {
            this.$refs.observer.reset()
            for(let i = 0; i < this.fields.length; i++) {
                this.fields[i].value = ''
            }
        },
        onRedirectToLogin() {
            this.$router.push({name: 'login'})
        }
    }
}
   
</script>

<style scoped>
.img-logo {
  width: 80%;
  display: block;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 30px;
}
h1 {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 5px;
}
.card {
  margin-bottom: 15%;
}
.card-body {
  padding-left: 15%;
  padding-right: 15%;
}
.buttons .btn-secondary {
    margin-top: 20px;
}
.buttons {
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>
