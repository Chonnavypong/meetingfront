import {
  extend
} from 'vee-validate'

extend('positive', {
  validate: value => {
    return value % 2 !== 0
  },
  message: '{_field_} field should be odd number only'
})
extend('password', {
  params: ['target'],
  validate(value, {
    target
  }) {
    return value === target
  },
  message: 'Password confirmation does not match'
})

extend('min', {
  validate(value, {length}) {
    return value.length >= args.length
  },
  params: ['length'],
  message: 'Password must have at least {length} characteristics'
})