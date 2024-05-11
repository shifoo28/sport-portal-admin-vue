<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div style="margin: 20px">
      <nav-button
          icon="mdi-card-account-details-outline"
          @open-nav-drawer="drawer = !drawer"
      />

      <employee-table
          :employees="employees"
          :headers="headers"
          @delete-success="closeNavDrawer"
          @show-full-info="openDialog"
      />

      <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="50%"
      >
        <employee-dialog
            :info="info"
            @close-dialog="dialog = !dialog"
        />
      </v-dialog>

      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
          right
          width="400"
          class="pa-8"
      >
        <employee-drawer
          @close-nav-drawer="closeNavDrawer"
        />
      </v-navigation-drawer>
    </div>
  </v-app>
</template>


<script src="./EmployeePage.js"/>

<style scoped src="./EmployeePage.css"/>