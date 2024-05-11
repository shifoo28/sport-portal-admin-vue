<template>
  <div>
<!--    nameTm nameRu    -->
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="nameTm"
          :value="info.nameTm"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="nameRu"
          :value="info.nameRu"
          class="ml-1"
        />
      </v-col>
    </v-row>  

<!--    madeTm madeRu    -->
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="madeTm"
          :value="info.madeTm"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="madeRu"
          :value="info.madeRu"
          class="ml-1"
        />
      </v-col>
    </v-row>

<!--    positionTm positionRu    -->
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="positionTm"
          :value="info.positionTm"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="positionRu"
          :value="info.positionRu"
          class="ml-1"
        />
      </v-col>
    </v-row>

<!--    birthPlaceTm birthPlaceRu    -->
<v-row no-gutters>
      <v-col cols="12" sm="6" md="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="birthPlaceTm"
          :value="info.birthPlaceTm"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="birthPlaceRu"
          :value="info.birthPlaceRu"
          class="ml-1"
        />
      </v-col>
    </v-row>

  <!--    sportLevelTm sportLevelRu    -->
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="sportLevelTm"
          :value="info.sportLevelTm"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="sportLevelRu"
          :value="info.sportLevelRu"
          class="ml-1"
        />
      </v-col>
    </v-row>
    

<v-row no-gutters>
  <v-col cols="12" md="3" sm="3" xs="3" class="mr-3">
    <v-text-field
        outlined
        readonly
        dense
        label="club"
        :value="info.club"
    />
  </v-col>
  <v-col cols="12" md="2" sm="2" xs="2" class="mr-3">
    <v-text-field
        outlined
        readonly
        dense
        label="age"
        :value="info.age"
    />
  </v-col>
  <v-col cols="12" md="2" sm="2" xs="2" class="mr-3">
    <v-text-field
        outlined
        readonly
        dense
        label="rating"
        :value="info.rating"
    />
  </v-col>
  <v-col cols="12" md="2" sm="2" xs="2" class="mr-2">
    <v-text-field
        outlined
        readonly
        dense
        label="experience"
        :value="info.experience"
    />
  </v-col>
  <v-col cols="12" md="2" sm="2" xs="2" class="mr-2">
    <v-text-field
        outlined
        readonly
        dense
        label="views"
        :value="info.views"
    />
  </v-col>
</v-row>

<!-- Worked at view -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <div style="font-weight: 700; margin-top: 10px">workedAtTm:</div>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <div style="font-weight: 700; margin-top: 10px">workedAtRu:</div>
      </v-col>
    </v-row>
    
    <v-row no-gutters
      v-for="(item, id) in info.workedAtTm"
      :key="id"
      class="mt-3"
    >
      <v-col cols="12" md="6" sm="6" xs="6" class="">
        <v-text-field
          outlined
          readonly
          dense
          hide-details
          :value="info.workedAtTm[id]"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          hide-details
          :value="info.workedAtRu[id]"
          class="ml-1"
        />
      </v-col>
    </v-row>

<!-- Badges view -->
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6">
        <div style="font-weight: 700; margin-top: 10px">badgesTm:</div>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <div style="font-weight: 700;margin-top: 10px">badgesRu:</div>
      </v-col>
    </v-row>
    
    <v-row no-gutters
      v-for="(item, id) in info.badgesTm"
      :key="id"
      class="mt-3"
    >
      <v-col cols="12" md="6" sm="6" xs="6" class="">
        <v-text-field
          outlined
          readonly
          dense
          hide-details
          :value="info.badgesTm[id]"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          hide-details
          :value="info.badgesRu[id]"
          class="ml-1"
        />
      </v-col>
    </v-row>


<!-- Image -->
    <v-row no-gutters
      class="d-flex justify-center"
    >
      <v-img
        :src="url + '/' + info.imagePath"
        max-width="500"
        max-height="250"
      />
    </v-row>
  </div>
</template>

<script>
import BASE_URL from "@/utils/url";

export default {
  data: () => ({
    url: BASE_URL
  }),
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
@media (min-width: 1264px) and (max-width: 1903px) {
    .flex.lg5-custom {
        width: 20%;
        max-width: 20%;
        flex-basis: 20%;
    }
}
</style>