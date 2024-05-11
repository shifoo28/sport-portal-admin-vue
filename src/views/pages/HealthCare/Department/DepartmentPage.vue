<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div style="margin: 20px">
      <nav-button
          icon="mdi-alpha-d-circle-outline"
          @open-nav-drawer="openNavDrawer"
      />

      <department-table
          :headers="headers"
          :departments="departments"
          @delete-success="deleteSuccess"
      />

      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          right
          width="400"
          class="pa-8"
      >

        <department-drawer
          @close-nav-drawer="closeNavDrawer"
        />
      </v-navigation-drawer>

    </div>
  </v-app>
</template>

<script src="./DepartmentPage.js"/>

<style scoped src="./DepartmentPage.css"/>