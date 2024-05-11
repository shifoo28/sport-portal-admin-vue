import SideBar from '@/components/sidebar/SideBar';
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
    data: () => ({
        drawer: false,
        headers: ['id', 'name', 'surname', 'email', 'action'],
        users: [],
        user: {},
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
        }),
        rules: [
            v => !!v || 'Password is required',
        ],
    }),
    created() {
        this.getUsers()
    },
    methods: {
        async getUsers() {
            await axios.get('/users')
            .then((res) => {
                this.users = res.data.data
            })
            .catch((err) => {
                console.log(err)
            })
        },

        async saveUser() {
            if (this.user.id == undefined) {
                await axios.post('/users/', this.user)
                .then(() => {
                    this.getUsers()
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'success',
                        title: 'Successfully saved'
                    })
                    this.user = {}
                })
                .catch((err) => {
                    console.log(err)
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'error',
                        title: 'Something went wrong'
                    })
                    this.user = {}
                })
            } else {
                await axios.patch('/users/' + this.user.id + '/', {
                    name: this.user.name,
                    surname: this.user.surname,
                    email: this.user.email,
                    password: this.user.password,
                })
                .then(() => {
                    this.getUsers()
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'success',
                        title: 'Successfully updated'
                    })
                    this.user = {}
                })
                .catch((err) => {
                    console.log(err)
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'error',
                        title: 'Something went wrong'
                    })
                    this.user = {}
                })
            }
        },

        async deleteUser(id) {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#7FBA5E',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((res) => {
                if (res.isConfirmed) {
                    axios.delete('/users/' + id + '/')
                    .then(() => {
                        this.getUsers()
                        this.Toast.fire({
                            icon:'success',
                            title: 'Successfully deleted'
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                        this.Toast.fire({
                            icon:'error',
                            title: 'Something went wrong'
                        })
                    })
                }
            })
            
        },

        async updateUser(item) {
            this.user.id = item.id
            this.user.name = item.name
            this.user.surname = item.surname
            this.user.email = item.email
            this.user.password = item.password
            this.drawer = !this.drawer
        }
    },
    computed: {
    },
    components: {
        SideBar
    }
}