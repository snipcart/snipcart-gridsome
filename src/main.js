// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  //add Snipcart assets
  head.link.push({
    rel: 'preconnect',
    href: 'https://app.snipcart.com'
  })

  head.link.push({
    rel: 'preconnect',
    href: 'https://cdn.snipcart.com'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css'
  })

  head.script.push({
    src: 'https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js',
    body: false
  })
}