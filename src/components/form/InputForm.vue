<template>
  <div id="signup" class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <img :src="'/img/'+imgUrl" alt="logo" class="img-logo" />
        <div class="card">
          <h2 class="card-header">{{title}}</h2>
          <div class="card-body">
            <ValidationObserver ref="observer">
              <form @submit.prevent="onSubmit()">
                <ValidationProvider
                  v-for="field in fields"
                  :key="field.name"
                  :name="field.name"
                  :rules="field.rules"
                  v-slot="{ classes, errors }"
                  :persist="true"
                >
                  <div class="control" :class="classes">
                    <!-- <span class="input-group-addon"><i class=field.icon></span> -->
                    <label>{{ field.lable }}</label>
                    <input
                      v-model.trim="field.value"
                      :type="field.type"
                      :placeholder="field.placeholder"
                      class="form-control"
                    />
                    <span> {{ field.value }}</span>
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <br/>
                <div v-if="errorMessage" class="alert alert-warning">{{ errorMessage }}</div>
                <div class="form-group buttons">
                  <button type="submit" class="btn btn-info btn-block">{{ title }}</button>
                  <button
                    type="button"
                    @click="onRedirectTo()"
                    class="btn btn-secondary btn-block"
                  >{{ secondButton }}</button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

//vee-validation setup
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize
} from "vee-validate";

import * as rules from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

// import custome validate (extend)
import "./../../services/validation";

// import default validate (vee-validate rules build-in)
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize("en", en);

// install rules and localization
export default {
  name: "signupForm",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  props: ["imgUrl", "title", "fields", "secondButton", "urlEndPoint", "icon", "redirect"],
  methods: {
    onSubmit() {
      console.log(this.$refs.observer.fields)
      console.log(this.$refs.observer)
      this.$refs.observer
        .validate()
        .then(result => {
          console.log(`result -> ${result}`)
          if (!result) {
            return false;
          }

          const allowed = ['password', 'passwordConfirm']
          this.fields.forEach(el => {
            if (allowed.includes(el.key)) {
              // password, passwordConfirm บันทึกตาม user กรอกมา เก็บ ใน elements Object ที่เป็น Object เปล่า ใน Data()
              this.elements[el.key] = el.value
              // console.log(`elements(pass) : ${el.key} ${this.elements[el.key]}`)
            } else {
              // fields อื่นๆ บันทึกตาม user กรอกมาแต่ทำให้เป็นตัวเล็กก่อน
              this.elements[el.key] = el.value.toLowerCase()
              // console.log(`elements(else) : ${el.key} ${this.elements[el.key]}`)
            }
             
          })
          // this.fields.forEach( el => console.log(`${el.key}--->${el.value}`))

          axios
            .post( this.urlEndPoint, this.elements )
            .then( response => {
              console.log(response)
              this.onformReset()
              this.$router.push({name: this.redirect})
              }) 
            .catch( err => console.log(err) )
        })
        .catch(err => {
          this.errorMessage = err
        })

        //  this.onformReset() //ไปเรียกใน axios แทน
    },
    onformReset() {
      // this.$refs.observer.reset() ถ้าไม่มี จะทำให้ fields สุดท้ายแสดง validate ไม่ผ่าน(ซึ่งเราสั่งให้ clear data)
      this.$refs.observer.reset()
      this.fields.forEach(el => el.value = '')
    },
    onRedirectTo() {
      this.$router.go(-1);
    }
  },

  data() {
    return {
      elements: {},
      errorMessage: ""
    };
  }
};
</script>

<style scoped>
.control {
  width: 100%;
}
.control span {
  display: block;
}
.control input {
  padding: 5px 10px;
}
.control.invalid input .control.invalid input span {
  color: #eb0600;
}
.control.invalid input {
  border: 1px #eb0600 solid;
}
.control.valid input .control.valid input span {
  color: #68d749;
}
.control.valid input {
  border: 1px #68d749 solid;
}
h2.card-header{
  text-align: center
}
</style>