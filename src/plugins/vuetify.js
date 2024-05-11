import '@fortawesome/fontawesome-free/css//all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa' || 'md'
    },
    theme: {
        themes: {
            dark: {
                background: '#F2F2F7'
            },
            light: {
                background: '#0088FF'
            }
        }
    },
    color: {
        main: '#7FBA5E'
    }
});
