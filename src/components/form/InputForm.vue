<template>
  <div id="signup" class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <img :src="'/img/'+imgUrl" alt="logo" class="img-logo" />
        <div class="card">
          <h1 class="card-header">{{title}}</h1>
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
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <div v-if="errorMessage" class="alert alert-warning">{{ errorMessage }}</div>
                <div class="form-group buttons">
                  <button type="submit" class="btn btn-info btn-block">{{ title }}</button>
                  <button
                    type="button"
                    @click="onRedirectToLogin"
                    class="btn btn-secondary btn-block"
                  >{{ redirect }}</button>
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
  props: ["imgUrl", "title", "fields", "redirect", "urlEndPoint", "icon"],
  methods: {
    onSubmit() {
      this.$refs.observer
        .validate()
        .then(result => {
          if (!result) {
            return false;
          }
          for (let i = 0; i < this.fields.length; i++) {
            this.elements[this.fields[i].key] = this.fields[i].value;
          }
          console.log('api/v1/'+this.urlEndPoint)
          this.onformReset()
          // axios
          //   .post( 'api/v1/'+this.urlEndPoint, this.elements )
        })
        .catch(err => {
          this.errorMessage = err.response.data.message;
        })
    },
    onformReset() {
      this.$refs.observer.reset()
      for( let i = 0; i < this.fields.length; i++ ) {
        this.fields[i].value = ''
      }
    },
    onRedirectToLogin() {
      this.$router.push({ name: "login" });
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
</style>