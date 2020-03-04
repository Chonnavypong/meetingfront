import axios from 'axios'
import { server, apiUrl, NOT_CONNECT_NETWORK, NETWORK_CONNECTION_MESSAGE } from '@service/comments'

const isAbsoluteURLRegex = /^(?:\w+:)\/\//

axios.interceptors.request.use( async config => {
  if ( !isAbsoluteURLRegex.test(config.url ) ) {

  }
})