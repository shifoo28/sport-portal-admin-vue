import NavButton from "@/components/example/NavButton.vue";
import CompetitionTypeTable from "@/components/example/Tables/CompetitionTypeTable.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
    data: () => ({
        types: [],
        headers: ['id', 'nameTm', 'nameRu', 'action'],
        drawer: false,
        name: {},
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
        this.getTypes().then(() => {})
    },
    methods: {
        async getTypes() {
            await axios.get('/competition-types/')
                .then((res) => {
                    this.types = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async saveInfo() {
            await axios.post('/competition-types/', this.name)
                .then(() => {
                    this.Toast.fire({
                        icon:'success',
                        title: 'Successfully saved'
                    })
                    this.getTypes()
                    this.drawer = !this.drawer
                    this.name = {}
                })
                .catch((err) => {
                    console.log(err)
                    this.Toast.fire({
                        icon:'error',
                        title: 'Something went wrong'
                    })
                    this.drawer = !this.drawer
                    this.name = {}
                })
        },
    },
    components: {
        NavButton,
        CompetitionTypeTable
    }
}