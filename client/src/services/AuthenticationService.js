
import Api from '@/services/Api'
export default {
  register (Credential) {
    return Api().post('register', Credential)
  }
}
