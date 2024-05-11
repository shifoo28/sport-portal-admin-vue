import SideBar from '@/components/sidebar/SideBar';
import NavButton from '@/components/example/NavButton';
import TrainerTable from '@/components/example/Tables/TrainerTable';
import TrainerDialog from '@/components/example/Dialogs/TrainerDialog';
import TrainerDrawer from '@/components/example/Drawers/TrainerDrawer'
import axios from 'axios';

export default {
    data: () => ({
        drawer: false,
        headers: ['id', 'federation', 'nameTm', 'nameRu', 'experience', 'action'],

        trainers: [],
        dialog: false,
        info: {}
    }),
    created() {
        this.getTrainers()
    },
    methods: {
        openNavDrawer() {
            this.drawer = true;
        },

        closeNavDrawer() {
            this.drawer = false
            this.getTrainers()
        },

        openDialog(item) {
            this.info = item
            this.dialog = !this.dialog
        },

        async getTrainers() {
            await axios.get('/federation-trainers', { params: { take: 100 } })
            .then((res) => {
                this.trainers = res.data.data
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    components: {
        SideBar,
        NavButton,
        TrainerTable,
        TrainerDialog,
        TrainerDrawer
    }
}