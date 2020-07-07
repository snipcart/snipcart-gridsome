<template>
<Layout>
  <div class="product-listing-wrapper">
    <h1 class="title">Our ghosts</h1>
    <p class="paragraph">Like your everlasting anxieties, our ghosts are there to keep you company through the good times and bad times alike.</p>
    <Cards class="grid-wrapper"/>
  </div>
</Layout>
</template>
<style lang="scss"scoped>
@import "~/_theme.scss";


.paragraph {
  color: $custom-white;
  font-family: $secondary-font;
  font-weight: $normal-font-weight;
  font-size: 22px;
  line-height: 48px;
  margin-top: 29px;
  margin-bottom: 42px;
  width: 60%;
}

.grid-wrapper {
    width: 67%;
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