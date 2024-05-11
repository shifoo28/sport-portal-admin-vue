import SideBar from '@/components/sidebar/SideBar';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    data: () => ({
        drawer: false,
        headers: ['id', 'name TM', 'name RU', 'logo', 'action'],
        federations: [],
        federation: {},
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
        photo: null,
    }),
    created() {
        this.getFederations()
    },
    methods: {
        async getFederations() {
            await axios.get('/federations/', { params: { take: 100 } })
            .then((res) => {
                this.federations = res.data.data
            })
            .catch((err) => {
                console.log(err)
            })
        },

        async updateFederation(item) {
            this.federation.id = item.id
            this.federation.nameTm = item.nameTm
            this.federation.nameRu = item.nameRu
            this.drawer = !this.drawer
        },

        async saveFederation() {
            let formData = new FormData()

            formData.append('nameTm', this.federation.nameTm)
            formData.append('nameRu', this.federation.nameRu)
            formData.append('photo', this.photo)

            // if (this.federation.id == undefined) {
            //     await axios.post('/federations/', this.federation)
            //     .then(() => {
            //         this.getFederations()
            //         this.drawer = !this.drawer
            //         this.Toast.fire({
            //             icon:'success',
            //             title: 'Successfully saved'
            //         })
            //         this.federation = {}
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //         this.drawer = !this.drawer
            //         this.Toast.fire({
            //             icon:'error',
            //             title: 'Something went wrong'
            //         })
            //         this.federation = {}
            //     })
            // } else {
            //     await axios.patch('/federations/' + this.federation.id + '/', {
            //         nameTm: this.federation.nameTm,
            //         nameRu: this.federation.nameRu
            //     })
            //     .then(() => {
            //         this.getFederations()
            //         this.drawer = !this.drawer
            //         this.Toast.fire({
            //             icon:'success',
            //             title: 'Successfully updated'
            //         })
            //         this.federation = {}
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //         this.drawer = !this.drawer
            //         this.Toast.fire({
            //             icon:'error',
            //             title: 'Something went wrong'
            //         })
            //         this.federation = {}
            //     })
            // }

            await axios.post('/federations/', formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            })
                .then(() => {
                    this.Toast.fire({
                        icon:'success',
                        title: 'Successfully saved'
                    })
                    this.federation = {}
                    this.getFederations()
                    this.drawer = !this.drawer
                })
                .catch((err) => {
                    console.log(err)
                    this.federation = {}
                    this.Toast.fire({
                        icon:'error',
                        title: 'Something went wrong'
                    })
                })

        },


        async deleteFederation(id) {
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
                    axios.delete('/federations/' + id + '/')
                    .then(() => {
                        this.getFederations()
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