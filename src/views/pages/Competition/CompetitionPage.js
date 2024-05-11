import NavButton from "@/components/example/NavButton.vue";
import CompetitionTable from "@/components/example/Tables/CompetitionTable.vue";
import CompetitionDialog from "@/components/example/Dialogs/CompetitionDialog.vue";
import CompetitionDrawer from "@/components/example/Drawers/CompetitionDrawer.vue";
import axios from "axios";
export default {
    data: () =>({
        headers: ['id', 'category', 'nameTm', 'nameRu', 'actions'],
        competitions: [],
        dialog: false,
        info: {},
        drawer: false
    }),
    created() {
        this.getCompetitions().then(() => {})
    },
    methods: {
        async getCompetitions() {
            await axios.get('/competitions/')
                .then((res) => {
                    this.competitions = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        openDialog(item) {
            this.info = item
            this.dialog = !this.dialog
        },

        closeNavDrawer() {
            this.drawer = !this.drawer
            this.getCompetitions().then(() => {})
        }
    },
    components: {
        NavButton,
        CompetitionTable,
        CompetitionDialog,
        CompetitionDrawer
    }
}