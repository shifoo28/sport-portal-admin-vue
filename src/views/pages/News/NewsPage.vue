<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div style="margin: 20px">
      <nav-button
          icon="mdi-web"
          :showType="true"
          @change-type="getNews"
          @open-nav-drawer="drawer = !drawer"
      />

      <news-table
          :news="news"
          :headers="headers"
          @show-full-info="openDialog"
          @delete-success="closeNavDrawer"
          @open-dialog="updateNews"
      />

      <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="35%"
      >
        <news-dialog
            :info="info"
            @close-dialog="dialog = false"
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
        <news-drawer
          @close-nav-drawer="closeNavDrawer"
        />
      </v-navigation-drawer>

      
      
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="800"
        max-height="1000"
        v-model='updateDialog'
      >
          <v-card
            style="padding: 20px"
          >
            <v-text-field
              outlined
              dense
              label="nameTm"
              v-model="newUpdateObj.nameTm"
            />
            <v-text-field
                outlined
                dense
                label="nameRu"
                v-model="newUpdateObj.nameRu"
            />
            <v-textarea
              outlined
              dense
              label="textTm"
              v-model="newUpdateObj.textTm"
            />
            <v-textarea
                outlined
                dense
                label="textRu"
                v-model="newUpdateObj.textRu"
            />
            <v-text-field
                outlined
                dense
                label="locationTm"
                v-model="newUpdateObj.locationTm"
            />
            <v-text-field
                outlined
                dense
                label="locationRu"
                v-model="newUpdateObj.locationRu"
            />
            
            
            <v-btn outlined width="100%" @click="updateNew" >Save</v-btn>
          </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>

<script src="./NewsPage.js"/>

<style scoped src="./NewsPage.css"/>