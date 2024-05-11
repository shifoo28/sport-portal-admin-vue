<template>
    <v-card
        elevation="0"
        color="white"
        width="100%"
        style="border-radius: 10px; padding: 15px"
    >
        <v-row no-gutters>
            <v-col cols="12" md="2" sm="2">
              <v-combobox
                  v-if="showType"
                  dense
                  outlined
                  hide-details
                  :items="types"
                  v-model="typeModel"
                  clearable
                  @change="$emit('change-type', typeModel)"
              />
            </v-col>
            <v-spacer/>
            <v-btn
                elevation="0"
                style="color: #0088FF; border: 1px solid #0088FF; background-color: transparent"
                @click="$emit('open-nav-drawer')"
            >
                <v-icon color="#0088FF"> {{ icon }} </v-icon>
                +
            </v-btn>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
          types: ['Local', 'World'],
          typeModel: ''
        }),
        props: {
            icon: {
                type: String,
                required: true,
            },
            showType: {
              type: Boolean,
              default: false
            }
        },
        methods: {
            emitOpenNavDrawer() {
                this.$emit('open-nav-drawer');
            }
        }
    }
</script>
    