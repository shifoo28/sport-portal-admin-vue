<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
        <div style="margin: 20px">
            <nav-button
                @open-nav-drawer="openNavDrawer"
                icon="mdi-dumbbell"
            />

            <gym-table
                :headers="headers"
                :gyms="gyms"
                @show-full-info="openDialog"
            />

            <!-- Full information -->
            <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
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
                    
                    <!-- Data -->
                    <v-row no-gutters>
                        <!-- Text -->
                        <v-col cols="12" md="6" sm="12" xs="12">
                            <!-- nameTm nameRu locationTm locationRu -->
                            <v-row 
                                no-gutters
                                v-for="(value, key) in info"
                                :key="key"
                            >
                                <v-text-field
                                    outlined
                                    readonly
                                    dense
                                    :label="key"
                                    :value="info[key]"
                                    v-if="key == 'nameTm' || key == 'nameRu'
                                    || key == 'locationTm' || key == 'locationRu'"
                                />
                            </v-row>
                            <!-- email link -->
                            <v-row no-gutters>
                                <v-col cols="12" md="6" sm="6" class="pr-1">
                                    <v-text-field
                                        outlined
                                        readonly
                                        dense
                                        label="email"
                                        :value="info.email"
                                    />
                                </v-col>
                                <v-col cols="12" md="6" sm="6" class="pl-1">
                                    <v-text-field
                                        outlined
                                        readonly
                                        dense
                                        label="link"
                                        :value="info.link"
                                    />
                                </v-col>
                            </v-row>
                            <!-- latitude longitude views -->
                            <v-row no-gutters>
                                <v-col cols="12" md="4" sm="4" class="pr-1">
                                    <v-text-field
                                        outlined
                                        readonly
                                        dense
                                        label="latitude"
                                        :value="info.latitude"
                                    />
                                </v-col>
                                <v-col cols="12" md="4" sm="4" class="px-1">
                                    <v-text-field
                                        outlined
                                        readonly
                                        dense
                                        label="longitude"
                                        :value="info.longitude"
                                    />
                                </v-col>
                                <v-col cols="12" md="4" sm="4" class="pl-1">
                                    <v-text-field
                                        outlined
                                        readonly
                                        dense
                                        label="views"
                                        :value="info.views"
                                    />
                                </v-col>
                            </v-row>
                            <!-- tel sportsTm sportsRu -->
                            <v-row no-gutters>
                                <v-col cols="12" md="4" sm="4" class="pr-1">
                                    <div style="font-weight: 700; margin-bottom: 10px">Phone numbers:</div>
                                    <v-text-field
                                        outlined
                                        readonly
                                        dense
                                        hide-details=""
                                        v-for="(item, i) in info.tel"
                                        :key="i"
                                        :value="item"
                                        class="mb-3"
                                    />
                                </v-col>
                                <v-col cols="12" md="4" sm="4" class="px-1">
                                    <div style="font-weight: 700; margin-bottom: 10px">Sports TM:</div>
                                    <v-text-field
                                        outlined
                                        readonly
                                        dense
                                        hide-details
                                        v-for="(item, i) in info.sportsTm"
                                        :key="i"
                                        :value="item"
                                        class="mb-3"
                                    />
                                </v-col>
                                <v-col cols="12" md="4" sm="4" class="pl-1">
                                    <div style="font-weight: 700; margin-bottom: 10px">Sports RU:</div>
                                    <v-text-field
                                        outlined
                                        readonly
                                        dense
                                        hide-details
                                        v-for="(item, i) in info.sportsRu"
                                        :key="i"
                                        :value="item"
                                        class="mb-3"
                                    />
                                </v-col>
                            </v-row>
                            <!-- openAtTm openAtRu -->
                            <v-row no-gutters class="my-10">
                                <v-col cols="12" md="3" sm="3">
                                    <div
                                        v-for="(item, i) in info.openAtTm"
                                        :key="i"
                                        style="font-weight: 500"
                                    >
                                        {{ item }}
                                    </div>
                                </v-col>
                                <v-col cols="12" md="3" sm="3">
                                    <div
                                        v-for="(item, i) in info.openAtRu"
                                        :key="i"
                                        style="font-weight: 500"
                                    >
                                        {{ item }}
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                        
                        <!-- Images -->
                        <v-col cols="12" md="6" sm="12" xs="12">
                            <!-- image1 image2 -->
                            <v-row no-gutters>
                                <v-col cols="12" md="6" sm="6" class="pl-10 pr-5">
                                    <v-img 
                                        :src="url + '/' + info.imagePath1"
                                        max-height="250"
                                    />
                                </v-col>
                                <v-col cols="12" md="6" sm="6" class="pr-10 pl-5">
                                    <v-img 
                                        :src="url + '/' + info.imagePath2"
                                        max-height="250"    
                                    />
                                </v-col>
                            </v-row>
                            <!-- image3 image4 -->
                            <v-row no-gutters class="mt-10">
                                <v-col cols="12" md="6" sm="6" class="pl-10 pr-5">
                                    <v-img 
                                        :src="url + '/' + info.imagePath3"
                                        max-height="250"
                                    />
                                </v-col>
                                <v-col cols="12" md="6" sm="6" class="pr-10 pl-5">
                                    <v-img 
                                        :src="url + '/' + info.imagePath4"
                                        max-height="250"    
                                    />
                                </v-col>
                            </v-row>
                            <!-- image5 -->
                            <v-row no-gutters justify="center" class="mt-10">
                                <v-img 
                                    style="position: absolute"
                                    :src="url + '/' + info.imagePath5"
                                    width="450"
                                    height="250"    
                                />
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-dialog>


            <!-- Add Data -->
            <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
                width="800"
                class="pa-8"
            >
                <v-text-field outlined dense label="nameTm" class="mt-1" v-model="gym.nameTm"/>
                <v-text-field outlined dense label="nameRu" v-model="gym.nameRu"/>
                <v-textarea outlined dense auto-grow label="locationTm" v-model="gym.locationTm"/>
                <v-textarea outlined dense auto-grow label="locationRu" v-model="gym.locationRu"/>
                <v-row no-gutters>
                    <v-col cols="12" md="6" sm="6">
                        <v-text-field outlined dense label="email" v-model="gym.email" class="mr-1"/>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                        <v-text-field outlined dense label="link" v-model="gym.link" class="ml-1"/>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="12" md="4" sm="4">
                        <v-text-field outlined dense label="latitude" v-model="gym.latitude" class="mr-1"/>
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-text-field outlined dense label="longitude" v-model="gym.longitude" class="mx-1"/>
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-text-field outlined dense label="views" v-model="gym.views" class="ml-1"/>
                    </v-col>
                </v-row>

                <v-row no-gutters>
                    <!-- phone numbers -->
                    <v-col cols="12" md="4" sm="4">
                        <div style="font-weight: 700; margin-bottom: 10px">Phone numbers:</div>
                        <v-row 
                            no-gutters 
                            v-for="(item, i) in phone_numbers"
                            :key="i"
                            class="mb-3"
                        >
                            <v-text-field
                                v-model="item.value"
                                outlined
                                dense
                                hide-details
                                style="width: 25px !important;"
                            />
                            <v-btn icon>
                                <v-icon @click="removeItem('tel', i)">mdi-close</v-icon>
                            </v-btn>
                        </v-row>
                        <v-btn height="25" outlined @click="addItem('tel')">Add phone number</v-btn>
                    </v-col>

                    <!-- sports Tm -->
                    <v-col cols="12" md="4" sm="4">
                        <div style="font-weight: 700; margin-bottom: 10px">Sports TM:</div>
                        <v-row 
                            no-gutters 
                            v-for="(item, i) in sports"
                            :key="i"
                            class="mb-3"
                        >
                            <v-text-field
                                v-model="item.sportTm"
                                outlined
                                dense
                                hide-details
                                style="width: 25px !important;"
                                class="mr-6"
                            />
                        </v-row>
                        <v-btn height="25" outlined @click="addItem('sport')">Add Sport</v-btn>
                    </v-col>
                    
                    <!-- sports Ru -->
                    <v-col cols="12" md="4" sm="4">
                        <div style="font-weight: 700; margin-bottom: 10px">Sports RU:</div>
                        <v-row 
                            no-gutters 
                            v-for="(item, i) in sports"
                            :key="i"
                            class="mb-3"
                        >
                            <v-text-field
                                v-model="item.sportRu"
                                outlined
                                dense
                                hide-details
                                style="width: 25px !important;"
                            />
                            <v-btn icon>
                                <v-icon @click="removeItem('sport', i)">mdi-close</v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>

                <!-- openAtTm openAtRu -->
                <v-row no-gutters class="mt-8">
                    <v-col cols="12" md="4" sm="4">
                        <div style="font-weight: 700; margin-bottom: 10px">openAt Tm:</div>
                        <v-row 
                            no-gutters 
                            v-for="(item, i) in openAt"
                            :key="i"
                            class="mb-3"
                        >
                            <v-text-field
                                v-model="item.openAtTm"
                                outlined
                                dense
                                hide-details
                                style="width: 25px !important;"
                                class="mr-6"
                            />
                        </v-row>
                        <v-btn height="25" outlined @click="addItem('openAt')">Add Work Time</v-btn>
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <div style="font-weight: 700; margin-bottom: 10px">openAt Ru:</div>
                        <v-row 
                            no-gutters 
                            v-for="(item, i) in openAt"
                            :key="i"
                            class="mb-3"
                        >
                            <v-text-field
                                v-model="item.openAtRu"
                                outlined
                                dense
                                hide-details
                                style="width: 25px !important;"
                            />
                            <v-btn icon>
                                <v-icon @click="removeItem('openAt', i)">mdi-close</v-icon>
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>

                <!-- file upload -->
                <v-row no-gutters class="d-flex align-center mt-10">
                    <v-col cols="12" md="4" sm="4">
                        <v-file-input
                            v-model="file1"
                            counter
                            show-size
                            color="deep-purple accent-4"
                            label="photo1"
                            multiple
                            prepend-icon="mdi-paperclip"
                            outlined
                            hide-details
                            dense
                        /> 
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-file-input
                            v-model="file1"
                            color="deep-purple accent-4"
                            label="photo2"
                            multiple
                            prepend-icon="mdi-paperclip"
                            outlined
                            hide-details
                            dense
                        /> 
                    </v-col>
                    <v-col cols="12" md="4" sm="4">
                        <v-file-input
                            v-model="file1"
                            color="deep-purple accent-4"
                            label="photo3"
                            multiple
                            prepend-icon="mdi-paperclip"
                            outlined
                            hide-details
                            dense
                        /> 
                    </v-col>
                </v-row>

                <v-row no-gutters class="my-5">
                    <v-col cols="12" md="6" sm="6">
                        <v-file-input
                            v-model="file1"
                            color="deep-purple accent-4"
                            label="photo4"
                            multiple
                            prepend-icon="mdi-paperclip"
                            outlined
                            hide-details
                            dense
                        /> 
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                        <v-file-input
                            v-model="file1"
                            color="deep-purple accent-4"
                            label="photo5"
                            multiple
                            prepend-icon="mdi-paperclip"
                            outlined
                            hide-details
                            dense
                        /> 
                    </v-col>
                </v-row>
                <v-btn outlined width="100%" class="mt-3" @click="saveInfo">Save</v-btn>
            </v-navigation-drawer>
        </div>
    </v-app>
</template>

<script src="./GymClub.js"/>

<style scoped src="./GymClub.css"/>