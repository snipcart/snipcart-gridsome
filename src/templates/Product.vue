<template>
  <Layout>
    <div class="wrapper">
      <g-image :src="getImageUrl(this.$page.product.images.big)" />
      <div class="product-info-layout">
        <h1 class="title">{{this.$page.product.name}}</h1>
        <p class="paragraph product-layout">{{this.$page.product.description.long}}</p>
        <p class="price">{{this.$page.product.price}}</p>
        <button class="cta-button-theme cta-button-product-layout">Add to cart</button>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss" scoped>
.cta-button-product-layout {
  height: 78px;
  width: 257px;
}

.product-layout.paragraph {
  display: inline-block;
  width: 329px;
}

.product-info-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  grid-template-columns: 50% 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: auto;
  height: 40%;
  width: 60%;
}
</style>
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
      const imageFolderContext = require.context("@/assets/ghosts/big", false);
      return imageFolderContext("./" + url);
    }
  }
};
</script>