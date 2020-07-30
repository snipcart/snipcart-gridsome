// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueNumerals from "vue-numerals";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueNumerals);

  Vue.filter("formatMoney", function(number) {
    const formattedNumber = number
      .toFixed(2)
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return "$" + formattedNumber;
  });
}
