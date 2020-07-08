<template>
  <g-image :src="getImageUrl(this.$page.product.images.big)" />
</template>
<page-query>
query ($id: ID!) {
  product(id: $id) {
    name
    images {
        big
    }
    description {
        long
    }
    price
  }
}
</page-query>
<script>
export default {
  methods: {
    getImageUrl(url) {
      // circumvents webpack issue with calling require in html
      const imageFolderContext = require.context(
        "@/assets/ghosts/big",
        false
      );
      return imageFolderContext("./" + url);
    }
  }
}
</script>