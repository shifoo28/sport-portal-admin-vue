<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div style="margin: 20px">
      <nav-button
          icon="mdi-trophy-award"
          @open-nav-drawer="drawer = !drawer"
      />

      <competition-table
          :competitions="competitions"
          :headers="headers"
          @show-full-info="openDialog"
          @delete-success="getCompetitions"
      />

      <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="50%"
      >
        <competition-dialog
            :info="info"
            @close-dialog="dialog = !dialog"
        />
      </v-dialog>

      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          right
          width="500"
          class="pa-8"
      >
        <competition-drawer
          @close-nav-drawer="closeNavDrawer"
        />
      </v-navigation-drawer>
    </div>
  </v-app>
</template>


<script src="./CompetitionPage.js"/>

<style scoped src="./CompetitionPage.css"/>