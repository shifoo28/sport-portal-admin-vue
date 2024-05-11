<script>
export default {
    data: () => ({
        selectItem: null,
        drawer: null,
        items: [
            { icon: 'mdi-view-dashboard-outline', text: 'Dashboard', to: '/dashboard' },
            { icon: 'mdi-account-group-outline', text: 'Users', to: '/users' },
            { icon: 'mdi-web', text: 'News', to: '/news'},
            { icon: 'mdi-video-box', text: 'Video', to: '/video' },
            { icon: 'mdi-shape-outline', text: 'Base category', to: '/base-category'},
            { icon: 'mdi-shape-plus-outline', text: 'Sport category', to: '/sport-category'},
            { icon: 'mdi-flag-variant-outline', text: 'Federations', to: '/federation'},
            { icon: 'mdi-alpha-s-circle-outline', text: 'Sports', to: '/federation-sports'},
            { icon: 'mdi-account-tie', text: 'Trainers', to: '/federation-trainers'},
            { icon: 'mdi-weight-lifter', text: 'Athletes', to: '/federation-athletes'},
            { icon: 'mdi-dumbbell', text: 'Gyms & Clubs', to: '/federation-gyms-clubs'},
            { icon: 'mdi-alpha-d-circle-outline', text: 'Health Care Department', to: '/health-care-department'},
            { icon: 'mdi-card-account-details-outline', text: 'Health Care Employees', to: '/health-care-employees'},
            { icon: 'mdi-whistle-outline', text: 'Competition Types', to: '/competition-types'},
            { icon: 'mdi-trophy-award', text: 'Competitions', to: '/competitions'},
            { icon: 'mdi-logout', text: 'Logout', to: '/login'}
        ]

    }),
    props: {},
    components: {
    },
}   
</script>

<template>
    <v-navigation-drawer v-model="drawer" app color="white" width="250" style="padding: 10px">
        <div style="padding: 20px">
          <v-img src="@/assets/logo.png"/>
        </div>
        <v-list flat>
            <v-list-item-group v-model="selectItem" mandatory>
                <v-list-item 
                    v-for="(item, i) in items" 
                    :key="i"
                    v-slot="{active}"
                    :to="item.to"
                    active-class="active-class"
                    style="height: 20px !important;"
                >
                    <v-list-item-icon style="height: 15px !important;">
                        <!-- <div :class="active ? 'a' : ''"></div> -->
                        <v-icon
                            class=""
                            :color="active ? '' : ''"
                        >
                            {{ item.icon }}
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="ml-n4">
                        <v-list-item-title
                        >
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>

</template>



<style scoped>

.a {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translate(-50%, -50%);
    height: 18px;
    width: 12px;
    border-radius: 0px 150px 150px 0px;
    background-color: #7FBA5E
}

.border_img {
    border: 1px solid #778290;
}

.border {
    text-decoration: none;
}

.v-list-item-group .v-list-item--active {
    color: #0088FF !important;
}

.theme-light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item
.v-list-item_action-text {
    color: white !important;
}

.active-class {
    border: 1px solid #0088FF;
    border-radius: 5px;
}
</style>