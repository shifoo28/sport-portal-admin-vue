import NavButton from "@/components/example/NavButton.vue"
import EmployeeTable from "@/components/example/Tables/EmployeeTable.vue";
import EmployeeDialog from "@/components/example/Dialogs/EmployeeDialog.vue"
import EmployeeDrawer from "@/components/example/Drawers/EmployeeDrawer.vue";
import axios from "axios";
export default {
    data: () => ({
        employees: [],
        headers: ['id', 'department', 'nameTm', 'nameRu', 'age', 'experience', 'action'],
        info: {},
        dialog: false,
        drawer: false,
    }),
    created() {
        this.getEmployee().then(() => {})
    },
    methods: {
        async getEmployee() {
            await axios.get('/federation-health-care-employees/')
                .then((res) => {
                    this.employees = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        closeNavDrawer() {
            this.drawer = false
            this.getEmployee()
        },

        openDialog(item) {
            this.info = item
            this.dialog = true
        }
    },
    components: {
        NavButton,
        EmployeeTable,
        EmployeeDialog,
        EmployeeDrawer
    }
}