import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import colors from 'vuetify/es5/util/colors';

// Theme builder - https://lobotuerto.com/thingies/vuetify-color-theme-builder/
Vue.use(Vuetify, {
    theme: {
        primary: colors.deepPurple.base,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        // color for "surface", more info: http://tinyurl.com/y9l2oedo
        surface: colors.blueGrey.lighten1,
    }
});