<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div style="margin: 20px">
      <nav-button
          icon="mdi-whistle-outline"
          @open-nav-drawer="drawer = !drawer"
      />

      <competition-type-table
          :types="types"
          :headers="headers"
          @delete-success="getTypes"
      />

      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          right
          width="400"
          class="pa-8"
      >
        <v-text-field
            outlined
            dense
            label="nameTm"
            v-model="name.nameTm"
            class="mt-1"
        />
        <v-text-field
            outlined
            dense
            label="nameRu"
            v-model="name.nameRu"
        />
        <v-btn outlined width="100%" @click="saveInfo">Save</v-btn>
      </v-navigation-drawer>
    </div>
  </v-app>
</template>


<script src="./CompetitionType.js"/>

<style scoped src="./CompetitionType.css"/>