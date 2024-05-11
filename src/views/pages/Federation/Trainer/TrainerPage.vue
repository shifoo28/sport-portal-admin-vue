<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">

        <div style="margin: 20px">
            <nav-button
                @open-nav-drawer="openNavDrawer"
                icon="mdi-account-tie"
            />

            <trainer-table
                :headers="headers"
                :trainers="trainers"
                @show-full-info="openDialog"
                @delete-success="closeNavDrawer"
            />

            <v-dialog
                v-model="dialog"
                transition="dialog-bottom-transition"
                max-width="50%"
            >
                <v-card
                    style="padding: 20px !important"
                >
                    <!-- Close dialog -->
                    <v-row no-gutters style="margin-bottom: 20px">
                        <div style="font-weight: 500; font-size: 25px">Full information</div>
                        <v-spacer/>
                        <v-btn
                            icon
                            @click="dialog = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>      
                    </v-row>
                    <trainer-dialog
                        :info="info"
                    />
                </v-card>
            </v-dialog>

            <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
                width="800"
                class="pa-8"
            >
                <trainer-drawer
                    @close-nav-drawer="closeNavDrawer"
                />
            </v-navigation-drawer>
        </div>
    </v-app>
</template>

<script src="./TrainerPage.js"/>

<style scoped src="./TrainerPage.css"/>