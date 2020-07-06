<template>
<Layout>
  <div class="wrapper">
    <h1 class="title">Our ghosts</h1>
    <p class="paragraph">Like your everlasting anxieties, our ghosts are there to keep you company through the good times and bad times alike.</p>
    <Cards />
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
  margin-top: 42px;
  margin-bottom: 81px;
  width: 60%;
}

.wrapper {
    display: flex;
    flex-direction: column;
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