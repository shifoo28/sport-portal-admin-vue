<template>
  <div>
    <v-row no-gutters class="mt-1">
      <v-text-field
          outlined
          dense
          label="nameTm"
          v-model="athlete.nameTm"
          class="mr-1"
      />
      <v-text-field
          outlined
          dense
          label="nameRu"
          v-model="athlete.nameRu"
          class="ml-1"
      />
    </v-row>
    <v-row no-gutters class="mt-1">
      <v-text-field
          outlined
          dense
          label="birthPlaceTm"
          v-model="athlete.birthPlaceTm"
          class="mr-1"
      />
      <v-text-field
          outlined
          dense
          label="birthPlaceRu"
          v-model="athlete.birthPlaceRu"
          class="ml-1"
      />
    </v-row>
    <v-row no-gutters class="mt-1">
      <v-text-field
          outlined
          dense
          label="sportLevelTm"
          v-model="athlete.sportLevelTm"
          class="mr-1"
      />
      <v-text-field
          outlined
          dense
          label="sportLevelRu"
          v-model="athlete.sportLevelRu"
          class="ml-1"
      />
    </v-row>
    <v-row no-gutters class="mt-1">
      <v-text-field
          outlined
          dense
          label="madeTm"
          v-model="athlete.madeTm"
          class="mr-1"
      />
      <v-text-field
          outlined
          dense
          label="madeRu"
          v-model="athlete.madeRu"
          class="ml-1"
      />
    </v-row>
    <v-row no-gutters class="mt-1">
      <v-text-field
          outlined
          dense
          label="positionTm"
          v-model="athlete.positionTm"
          class="mr-1"
      />
      <v-text-field
          outlined
          dense
          label="positionRu"
          v-model="athlete.positionRu"
          class="ml-1"
      />
    </v-row>
    <v-row no-gutters class="mt-1">
      <v-text-field
          outlined
          dense
          label="jobTm"
          v-model="athlete.jobTm"
          class="mr-1"
      />
      <v-text-field
          outlined
          dense
          label="jobRu"
          v-model="athlete.jobRu"
          class="ml-1"
      />
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6" xs="6">
        <v-text-field outlined dense label="club" v-model="athlete.club" class="mr-1"/>
      </v-col>
      <v-col cols="12" md="2" sm="2" xs="2">
        <v-text-field outlined dense label="age" v-model="athlete.age" class="mx-1"/>
      </v-col>
      <v-col cols="12" md="2" sm="2" xs="2">
        <v-text-field outlined dense label="experience" v-model="athlete.experience" class="mx-1"/>
      </v-col>
      <v-col cols="12" md="2" sm="2" xs="2">
        <v-text-field outlined dense label="rating" v-model="athlete.rating" class="ml-1"/>
      </v-col>
    </v-row>

<!-- Worked at view -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <div
            style="font-weight: 700;
                margin-bottom: 10px"
        >
          workedAtTm:
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <div
            style="font-weight: 700;
                margin-bottom: 10px"
        >
          workedAtRu:
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters
           v-for="(item, i) in workedAtTm"
           :key="i"
           class="mb-3"
    >
      <v-text-field
          v-model="workedAtTm[i].value"
          outlined
          dense
          hide-details
          style="width: 25px !important;"
          class="mr-1"
      />
      <v-text-field
          v-model="workedAtRu[i].value"
          outlined
          dense
          hide-details
          style="width: 25px !important;"
          class="ml-1"
      />
      <v-btn icon>
        <v-icon @click="removeItem('work', i)">mdi-close</v-icon>
      </v-btn>
    </v-row>
    <v-btn height="25" outlined @click="addItem('work')">add work</v-btn>

<!-- Badge view -->
    <v-row no-gutters class="mt-3">
      <v-col cols="12" md="6" sm="6">
        <div
            style="font-weight: 700;
                margin-bottom: 10px"
        >
          badgesTm:
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <div
            style="font-weight: 700;
                margin-bottom: 10px"
        >
          badgesRu:
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters
           v-for="(item, i) in badgesTm"
           :key="i"
           class="mb-3"
    >
      <v-text-field
          v-model="badgesTm[i].value"
          outlined
          dense
          hide-details
          style="width: 25px !important;"
          class="mr-1"
      />
      <v-text-field
          v-model="badgesRu[i].value"
          outlined
          dense
          hide-details
          style="width: 25px !important;"
          class="ml-1"
      />
      <v-btn icon>
        <v-icon @click="removeItem('badge', i)">mdi-close</v-icon>
      </v-btn>
    </v-row>
    <v-btn height="25" outlined @click="addItem('badge')">add badge</v-btn>

    <v-combobox
        dense
        outlined
        label="federation"
        v-model="federation"
        :items="federations"
        item-text="nameTm"
        class="mt-5"
    />

    <v-file-input
        v-model="file"
        color="deep-purple accent-4"
        label="photo"
        prepend-icon="mdi-paperclip"
        outlined
        hide-details
        dense
        class="mb-3"
    />
    <v-btn outlined width="100%" class="mt-3" @click="saveInfo">Save</v-btn>

  </div>
</template>


<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data: () => ({
    athlete: {},
    workedAtTm: [],
    workedAtRu: [],
    badgesTm: [],
    badgesRu: [],
    federations: [],
    federation: null,
    file: null,
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
    this.getFederations()
  },
  methods: {
    addItem(type) {
      if (type === 'work') {
        this.workedAtTm.push({ value: '' })
        this.workedAtRu.push({ value: '' })
      }
      if (type === 'badge') {
        this.badgesTm.push({ value: '' })
        this.badgesRu.push({ value: '' })
      }
    },
    removeItem(type, id) {
      if(type === 'work') {
        this.workedAtTm.splice(id, 1)
        this.workedAtRu.splice(id, 1)
      }
      if (type === 'badge') {
        this.badgesTm.splice(id, 1)
        this.badgesRu.splice(id, 1)
      }
    },

    async getFederations() {
      await axios.get('/federations/')
          .then((res) => {
            this.federations = res.data.data
          })
          .catch((err) => {
            console.log(err)
          })
    },

    async saveInfo() {

      let workedAtTm = []
      let workedAtRu = []
      let badgesTm = []
      let badgesRu = []
      for (let i = 0; i < this.workedAtTm.length;i++) {
          workedAtTm.push(this.workedAtTm[i].value)
          workedAtRu.push(this.workedAtRu[i].value)
      }
      for (let i = 0; i < this.badgesTm.length;i++) {
          badgesTm.push(this.badgesTm[i].value)
          badgesRu.push(this.badgesRu[i].value)
      }

      let formData = new FormData();

      formData.append('nameTm', this.athlete.nameTm)
      formData.append('nameRu', this.athlete.nameRu)
      formData.append('age', Number(this.athlete.age))
      formData.append('madeTm', this.athlete.madeTm)
      formData.append('madeRu', this.athlete.madeRu)
      formData.append('birthPlaceTm', this.athlete.birthPlaceTm)
      formData.append('birthPlaceRu', this.athlete.birthPlaceRu)
      formData.append('club', this.athlete.club)
      formData.append('rating', Number(this.athlete.rating))
      formData.append('jobTm', this.athlete.jobTm)
      formData.append('jobRu', this.athlete.jobRu)
      formData.append('positionTm', this.athlete.positionTm)
      formData.append('positionRu', this.athlete.positionRu)
      formData.append('sportLevelTm', this.athlete.sportLevelTm)
      formData.append('sportLevelRu', this.athlete.sportLevelRu)
      formData.append('workedAtTm', workedAtTm)
      formData.append('workedAtRu', workedAtRu)
      formData.append('badgesTm', badgesTm)
      formData.append('badgesRu', badgesRu)
      formData.append('experience', Number(this.athlete.experience))
      formData.append('links', {})
      formData.append('federationId', this.federation.id)
      formData.append('photo', this.file)



      await axios.post('/federation-athlete/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(() => {
            this.Toast.fire({
              icon:'success',
              title: 'Successfully saved'
            })
            this.athlete = {}
            this.workedAtTm = []
            this.workedAtRu = []
            this.badgesTm = []
            this.badgesRu = []
            this.federation = {}
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