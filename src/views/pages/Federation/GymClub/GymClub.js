import SideBar from '@/components/sidebar/SideBar';
import NavButton from '@/components/example/NavButton'
import GymTable from '@/components/example/Tables/GymTable'
import BASE_URL from '@/utils/url';
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
    data: () => ({
        drawer: false,
        dialog: false,
        headers: ['id', 'nameTm', 'nameRu', 'locationTm', 'locationRu', 'action'],
        gyms: [],
        gym: {},
        info: {},
        url: BASE_URL,
        phone_numbers: [],
        sports: [],
        openAt: [],
        file1: null,
        file2: null,
        file3: null,
        file4: null,
        file5: null,
        Toast: Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
        }),

    }),
    created() {
        this.getGyms()
    },
    methods: {
        openNavDrawer() {
            this.drawer = !this.drawer
        },

        openDialog(item) {
            this.info = item
            this.dialog = !this.dialog
        },

        addItem(type) {
            if (type == 'sport') {
                this.sports.push({ sportTm: '', sportRu: ''})
            }
            if (type == 'tel') {
                this.phone_numbers.push({ value: '' })
            }
            if (type == 'openAt') {
                this.openAt.push({ openAtTm: '', openAtRu: '' })
            }
        },

        removeItem(type, id) {
            if(type == 'tel') {
                this.phone_numbers.splice(id, 1)
            }
            if (type == 'sport') {
                this.sports.splice(id, 1)
            }
            if (type == 'openAt') {
                this.openAt.splice(id, 1)
            }
        },

        async getGyms() {
            await axios.get('/federation-gyms-and-clubs/')
            .then((res) => {
                this.gyms = res.data.data   
            })
            .catch((err) => {
                console.log(err)
            })
        },

        async saveInfo() {
            let sportsTm = []
            let sportsRu = []
            let openAtTm = []
            let openAtRu = []
            let phone_numbers = []
            for (let i = 0; i < this.sports.length; i++) {
                sportsTm.push(this.sports[i].sportTm)
                sportsRu.push(this.sports[i].sportRu)
            }
            for (let i = 0; i < this.openAt.length; i++) {
                openAtTm.push(this.openAt[i].openAtTm)
                openAtRu.push(this.openAt[i].openAtRu)
            }
            for (let i = 0; i < this.phone_numbers.length; i++) {
                phone_numbers.push(this.phone_numbers[i].value)
            }
            

            let formData = new FormData()

            formData.append('nameTm', this.gym.nameTm)
            formData.append('nameRu', this.gym.nameRu)
            formData.append('locationTm', this.gym.locationTm)
            formData.append('locationRu', this.gym.locationRu)
            formData.append('email', this.gym.email)
            formData.append('link', this.gym.link)
            formData.append('latitude', parseFloat(this.gym.latitude))
            formData.append('longitude', parseFloat(this.gym.longitude))
            formData.append('tel', phone_numbers)
            formData.append('sportsTm', sportsTm)
            formData.append('sportsRu', sportsRu)
            formData.append('openAtTm', openAtTm)
            formData.append('openAtRu', openAtRu)
            formData.append('photo1', this.file1)
            formData.append('photo2', this.file1)
            formData.append('photo3', this.file1)
            formData.append('photo4', this.file1)
            formData.append('photo5', this.file1)

            for (const [key, value] of formData.entries()) {
                console.log(key, '=>>', value, '==>', typeof value)
            }
            await axios.post('/federation-gyms-and-clubs/', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(() => {
                this.Toast.fire({
                    icon:'success',
                    title: 'Successfully saved'
                })
                this.gym = {}
                this.drawer = !this.drawer
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    computed: {
    },
    components: {
        SideBar,
        NavButton,
        GymTable
    }
}