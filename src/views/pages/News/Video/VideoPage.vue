<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div style="margin: 20px">
      <nav-button
          icon="mdi-video-box"
          @open-nav-drawer="drawer = !drawer"
      />

      <video-table
        :headers="headers"
        :videos="videos"
        @show-full-info="openDialog"
        @delete-success="closeNavDrawer"
      />

      <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="50%"
      >
        <video-dialog
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
        <video-drawer
          @close-nav-drawer="closeNavDrawer"
        />
      </v-navigation-drawer>
    </div>
  </v-app>
</template>

<script src="./VideoPage.js"/>

<style scoped src="./VideoPage.css"/>