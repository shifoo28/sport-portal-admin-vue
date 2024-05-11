import SideBar from "@/components/sidebar/SideBar.vue";
import NavButton from "@/components/example/NavButton.vue";
import VideoTable from "@/components/example/Tables/VideoTable.vue";
import VideoDialog from "@/components/example/Dialogs/VideoDialog.vue";
import VideoDrawer from "@/components/example/Drawers/VideoDrawer.vue";
import axios from "axios";

export default {
    data: () => ({
        headers: ['id', 'nameTm', 'nameRu', 'action'],
        videos: [],
        dialog: false,
        info: {},
        drawer: false
    }),
    created() {
        this.getVideos()
    },
    methods: {
        async openDialog(item) {
            await axios.get('/videos/' + item.id + '/')
                .then((res) => {
                    this.info = res.data.data
                    this.dialog = !this.dialog
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        async getVideos() {
            await axios.get('/videos/')
                .then((res) => {
                    this.videos = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        closeNavDrawer() {
            this.drawer = false
            this.getVideos()
        }
    },
    components: {
        SideBar,
        NavButton,
        VideoTable,
        VideoDialog,
        VideoDrawer
    }
}