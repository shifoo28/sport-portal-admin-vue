<template>
  <v-card style="padding: 20px !important">
    <!-- Close dialog -->
    <v-row no-gutters style="margin-bottom: 20px">
      <div style="font-weight: 500; font-size: 25px">Full information</div>
      <v-spacer />
      <v-btn icon @click="$emit('close-dialog')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-row>

    <v-text-field outlined readonly dense label="nameTm" :value="info.nameTm" />
    <v-text-field outlined readonly dense label="nameRu" :value="info.nameRu" />
    <v-textarea outlined readonly label="textTm" :value="info.textTm" />
    <v-textarea outlined readonly label="textRu" :value="info.textRu" />
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="locationTm"
          :value="info.locationTm"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" xs="6">
        <v-text-field
          outlined
          readonly
          dense
          label="locationRu"
          :value="info.locationRu"
          class="ml-1"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="3" sm="3" xs="3">
        <v-text-field
          outlined
          readonly
          dense
          label="categoryTm"
          :value="info.category.nameTm"
          class="mr-1"
        />
      </v-col>
      <v-col cols="12" md="3" sm="3" xs="3">
        <v-text-field
          outlined
          readonly
          dense
          label="categoryRu"
          :value="info.category.nameRu"
          class="mx-1"
        />
      </v-col>
      <v-col cols="12" md="3" sm="3" xs="3">
        <v-text-field
          outlined
          readonly
          dense
          label="section"
          :value="info.category.section"
          class="mx-1"
        />
      </v-col>
      <v-col cols="12" md="3" sm="3" xs="3">
        <v-text-field
          outlined
          readonly
          dense
          label="views"
          :value="info.views"
          class="ml-1"
        />
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex justify-center">
      <v-img :src="`${url}/${info.imagePath}`" max-width="500" />
      <!-- max-height="250" -->
    </v-row>
  </v-card>
</template>

<script>
import BASE_URL from "@/utils/url";
export default {
  data: () => ({
    url: BASE_URL,
  }),
  created() {},
  methods: {},
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>
