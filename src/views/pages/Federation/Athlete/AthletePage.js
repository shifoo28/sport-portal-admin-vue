import SideBar from "@/components/sidebar/SideBar.vue";
import NavButton from "@/components/example/NavButton.vue";
import AthleteTable from "@/components/example/Tables/AthleteTable.vue";
import AthleteDialog from "@/components/example/Dialogs/AthleteDialog.vue";
import AthleteDrawer from "@/components/example/Drawers/AthleteDrawer.vue";
import axios from "axios";

export default {
    data: () => ({
        headers: ['id', 'federation', 'nameTm', 'nameRu', 'action'],
        athletes: [],
        dialog: false,
        info: {},
        drawer: false,
    }),
    created: function () {
        this.getAthletes()
    },
    methods: {
        openNavDrawer() {
          this.drawer = true
        },

        closeNavDrawer() {
            this.drawer = false
            this.getAthletes()
        },
        async getAthletes() {
            await axios.get('/federation-athlete')
                .then((res) => {
                    this.athletes = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        openDialog(item) {
            this.info=item
            this.dialog = !this.dialog
        }
    },
    components: {
        SideBar,
        NavButton,
        AthleteTable,
        AthleteDialog,
        AthleteDrawer
    }
}