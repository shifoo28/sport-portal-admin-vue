import NavButton from "@/components/example/NavButton.vue";
import DepartmentTable from "@/components/example/Tables/DepartmentTable.vue";
import DepartmentDrawer from "@/components/example/Drawers/DepartmentDrawer.vue";
import axios from "axios";


export default {
    data: () => ({
        departments: [],
        headers: ['id', 'nameTm', 'nameRu', 'action'],
        drawer: false
    }),
    created() {
        this.getDepartment().then(() => {})
    },
    methods: {
      async getDepartment() {
          await axios.get('/health-care-departments/')
              .then((res) => {
                  this.departments = res.data.data
              })
              .catch((err) => {
                  console.log(err)
              })
      },

        deleteSuccess() {
          this.getDepartment().then(() =>{})
        },

        openNavDrawer() {
          this.drawer = true
        },

        closeNavDrawer() {
          this.drawer = false
            this.getDepartment().then(() => {})
        }
    },
    components: {
        NavButton,
        DepartmentTable,
        DepartmentDrawer
    }
}