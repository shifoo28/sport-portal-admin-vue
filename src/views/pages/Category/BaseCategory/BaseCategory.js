import SideBar from '@/components/sidebar/SideBar';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    data: () => ({
        headers: ['id', 'name TM', 'name RU', 'action'],
        categories: [],
        drawer: false,
        category: {},
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
    }),
    created() {
        this.getCategory()
    },
    methods: {
        async getCategory() {
            await axios.get('/base-category/')
            .then((res) => {
                this.categories = res.data.data
            })
            .catch((err) => {
                console.log(err)
            })
        },

        async updateCategory(item) {
            this.category.id = item.id
            this.category.nameTm = item.nameTm
            this.category.nameRu = item.nameRu
            this.drawer = !this.drawer
        },

        async saveCategory() {
            if (this.category.id == undefined) {
                await axios.post('/base-category/', this.category)
                .then(() => {
                    this.getCategory()
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'success',
                        title: 'Successfully saved'
                    })
                    this.category = {}
                })
                .catch((err) => {
                    console.log(err)
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'error',
                        title: 'Something went wrong'
                    })
                    this.category = {}
                })
            } else {
                await axios.patch('base-category/' + this.category.id + '/', {
                    nameTm: this.category.nameTm,
                    nameRu: this.category.nameRu
                })
                .then(() => {
                    this.getCategory()
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'success',
                        title: 'Successfully updated'
                    })
                    this.category = {}
                })
                .catch((err) => {
                    console.log(err)
                    this.drawer = !this.drawer
                    this.Toast.fire({
                        icon:'error',
                        title: 'Something went wrong'
                    })
                    this.category = {}
                })
            }
        },

        async deleteCategory(id) {
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
                    axios.delete('/base-category/' + id + '/')
                    .then(() => {
                        this.getCategory()
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

        }
    },
    components: {
        SideBar
    }
}