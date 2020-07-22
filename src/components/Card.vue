<template>
  <g-link :to="this.linkToProductPage">
    <div class="card">
      <g-image :src="getImageUrl(this.imageUrl)" />
      <h3 class="card-title">{{this.title}}</h3>
      <p class="card-description">{{ this.description }}</p>
      <p class="card-price">${{ this.price }}</p>
      <button
        class="cta-button-theme card-cta-button-layout snipcart-add-item"
        :data-item-id="this.id"
        :data-item-description="this.description"
        :data-item-image="getImageUrl(this.imageUrl)"
        :data-item-price="this.price"
        :data-item-name="this.title"
        :data-item-url="this.url"
      >Add to cart</button>
    </div>
  </g-link>
</template> 
<style lang="scss" scoped>
@import "~/theme/_main.scss";

.card {
  background-color: $primary-color;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(103, 100, 100, 0.25);
  /* layout rules */
  height: 280px;
  width: 184px;
  /* flex rules */
  @include flex-align-and-justify-center;
  flex-direction: column;
}

.card-title {
  color: $custom-white;
  font-family: $primary-font;
  font-size: 28px;
  font-weight: $header-font-weight;
  line-height: 33px;
}

.card-description {
  color: $custom-white;
  font-family: $secondary-font;
  font-size: 16px;
  font-weight: $normal-font-weight;
  line-height: 26px;
}

.card-price {
  color: $custom-white;
  font-family: $secondary-font;
  font-size: 20px;
  font-weight: $normal-font-weight;
  line-height: 29px;
  margin-bottom: 8px;
}

.cta-button-theme.card-cta-button-layout {
  font-size: 20px;
  height: 31px;
  width: 143px;
}
</style>
<script>
export default {
  methods: {
    getImageUrl(url) {
      // circumvents webpack issue with calling require in html
      const imageFolderContext = require.context(
        "@/assets/ghosts/small",
        false
      );
      return imageFolderContext("./" + url);
    }
  },
  props: {
    id: String,
    imageUrl: String,
    title: String,
    description: String,
    price: Number,
    linkToProductPage: String,
    url: String
  }
};
</script>