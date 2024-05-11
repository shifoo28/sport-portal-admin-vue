<template>
  <div>
    <v-text-field
        outlined
        dense
        label="nameTm"
        v-model="employee.nameTm"
        class="mt-1"
    />
    <v-text-field
        outlined
        dense
        label="nameRu"
        v-model="employee.nameRu"
    />
    <v-text-field
        outlined
        dense
        label="jobTm"
        v-model="employee.jobTm"
    />
    <v-text-field
        outlined
        dense
        label="jobRu"
        v-model="employee.jobRu"
    />
    <v-text-field
        outlined
        dense
        label="workAtTm"
        v-model="employee.workAtTm"
    />
    <v-text-field
        outlined
        dense
        label="workAtRu"
        v-model="employee.workAtRu"
    />

    <v-row no-gutters>
      <v-col cols="12" md="4" sm="4">
        <v-text-field
            outlined
            dense
            label="age"
            v-model="employee.age"
            class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="4" sm="4">
        <v-text-field
            outlined
            dense
            label="experience"
            v-model="employee.experience"
            class="mx-1"
        />
      </v-col>
      <v-col cols="12" md="4" sm="4">
        <v-text-field
            outlined
            dense
            label="rating"
            v-model="employee.rating"
            class="ml-1"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-combobox
        dense
        outlined
        label="deaprtment"
        v-model="employee.department"
        :items="departments"
        item-text="nameTm"
      />
    </v-row>
    <v-file-input
      v-model="employee.file"
      color="deep-purple accent-4"
      label="photo"
      prepend-icon="mdi-paperclip"
      outlined
      hide-details
      dense
      class="mb-5"
    /> 
    <v-btn outlined width="100%" @click="saveInfo">Save</v-btn>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  data: () => ({
    employee: {},
    departments: [],
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
  props: {

  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      await axios.get('/health-care-departments/')
      .then((res) => {
        this.departments = res.data.data
      })
      .catch((err) => {
        console.log(err)
      })
    },

    async saveInfo() {
      let formData = new FormData()

      formData.append('nameTm', this.employee.nameTm)
      formData.append('nameRu', this.employee.nameRu)
      formData.append('jobTm', this.employee.jobTm)
      formData.append('jobRu', this.employee.jobRu)
      formData.append('workAtTm', this.employee.workAtTm)
      formData.append('workAtRu', this.employee.workAtRu)
      formData.append('age', Number(this.employee.age))
      formData.append('departmentId', this.employee.department.id)
      formData.append('experience', Number(this.employee.experience))
      formData.append('rating', Number(this.employee.rating))
      formData.append('links', {})
      formData.append('photo', this.employee.file)


      await axios.post('/federation-health-care-employees/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(() => {
        this.Toast.fire({
          icon:'success',
          title: 'Successfully saved'
        })
        this.employee = {}
        this.$emit('close-nav-drawer')
      })
      .catch((err) => {
        this.Toast.fire({
          icon:'error',
          title: 'Something went wrong'
        })
        console.log(err)
        this.$emit('close-nav-drawer')
      })
    }
  }
}
</script>

<style scoped>


</style>