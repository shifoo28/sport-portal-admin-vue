import axios from "axios"
import Swal from "sweetalert2"

export default {
    data: () => ({
        show1: false,
        password: 'admin',
        email: 'admin@gmail.com',
        emailRules: [
            v => !!v || 'Email is required',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length <= 10 || 'Password must be less than 10 characters',
        ],
        Toast: Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
    }),
    created() {
      this.deleteToken();
    },
    methods: {
      
      async deleteToken() {
        localStorage.removeItem('token')
      },
      async login() {
        await axios.post('/auth/signin/', {
          email: this.email,
          plainPassword: this.password
        })
        .then((res) => {
            localStorage.setItem('token', res.data.data.token)
            this.Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            })
            this.$router.push('/dashboard')
        })
        .catch((err) =>{
          console.log(err.response.data.message)
          this.email = ''
          this.password = ''
          this.Toast.fire({
            icon: 'error',
            title: err.response.data.message
          })
        })
      }
    }
  }