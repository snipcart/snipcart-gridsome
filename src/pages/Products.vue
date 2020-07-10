<template>
  <Layout>
    <div class="product-listing-wrapper">
      <h1 class="title">Our ghosts</h1>
      <p
        class="paragraph products-layout"
      >Like your everlasting anxieties, our ghosts are there to keep you company through the good times and bad times alike.</p>
      <Cards class="cards-wrapper" />
    </div>
  </Layout>
</template>
<style lang="scss"scoped>
@import "~/theme/_main.scss";

.cards-wrapper {
  width: 67%;
}

.products-layout.paragraph {
  margin: 29px auto 42px;
  width: 60%;
}

.product-listing-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
<script>
import Cards from "~/components/Cards.vue";

export default {
  components: {
    Cards
  }
};
</script>