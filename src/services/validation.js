import {
  extend
} from 'vee-validate'

// ตัวอย่างทดลองทำ 
extend('positive', {
  validate: value => {
    return value % 2 !== 0
  },
  message: '{_field_} field should be odd number only'
})

// password === password confirm
extend('password', {
  validate(value, {
    target
  }) {
    return value === target
  },
  params: ['target'],
  message: 'Password confirmation does not match'
})

// min length -> ex. min:8
extend('min', {
  validate(value, {
    length
  }) {
    return value.length >= args.length
  },
  params: ['length'],
  message: 'Password must have at least {length} characteristics'
})