import NavButton from "@/components/example/NavButton.vue";
import NewsTable from "@/components/example/Tables/NewsTable.vue";
import NewsDialog from "@/components/example/Dialogs/NewsDialog.vue";
import NewsDrawer from "@/components/example/Drawers/NewsDrawer.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
    data: () => ({
        news: [],
        headers: ['id', 'category', 'nameTm', 'nameRu', 'action'],
        dialog: false,
        updateDialog: false,
        drawer: false,
        info: {},
        newUpdateObj: {},
        category: [],
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
        this.getNews().then(() => {}),
        this.getFilteredCategory().then(() => {})
    },
    methods: {
        async getNews(item) {
            await axios.get('/news/', { params: { 'section': item } })
                .then((res) => {
                    this.news = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        openDialog(item) {
            this.info = item
            this.dialog = !this.dialog
        },

        closeNavDrawer(item) {
            this.drawer = false
            this.getNews(item).then(() => {})
        },

        updateNews(data) {
            console.log(data)
            this.newUpdateObj = data
            this.updateDialog = true
        },

        updateNew() {
            let formData = new FormData()

            formData.append('nameTm', this.newUpdateObj.nameTm)
            formData.append('nameRu', this.newUpdateObj.nameRu)
            formData.append('textTm', this.newUpdateObj.textTm)
            formData.append('textRu', this.newUpdateObj.textRu)
            formData.append('locationTm', this.newUpdateObj.locationTm)
            formData.append('locationRu', this.newUpdateObj.locationRu)
            formData.append("categoryId", this.newUpdateObj.category.id);

            axios.patch(`/news/${this.newUpdateObj.id}/`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              })
              .then(() => {
                this.Toast.fire({
                    icon:'success',
                    title: 'Successfully updated'
                  })
                this.updateDialog = false
              })
              .catch((err) => {
                console.log(err)
                this.Toast.fire({
                    icon:'error',
                    title: 'Something went wrong'
                  })
                this.updateDialog = false
              })
        },

        async getFilteredCategory() {
          await axios
            .get("/news-page/filters/", {
              params: { lang: "Tm", section: this.typeModel },
            })
            .then((res) => {
              this.category = res.data.data.filters;
            })
            .catch((err) => {
              console.log(err);
            });
        },
    },
    components: {
        NavButton,
        NewsTable,
        NewsDialog,
        NewsDrawer
    }
}