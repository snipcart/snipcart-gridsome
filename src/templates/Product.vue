<template>
  <Layout>
    <div class="product-wrapper">
      <carousel
        class="carousel-layout"
        :autoplay="true"
        :autoPlayHoverPause="true"
        :autoplayTimeout="5000"
        :centerMode="true"
        :loop="true"
        :padding="200"
        :paginationEnabled="true"
        paginationColor="#090b10"
        paginationActiveColor="#c9d4fA"
        :paginationSize="18"
        :perPage="1"
      >
        <slide>
          <img :src="getImageUrl(this.$page.product.images.big)" />
        </slide>
        <slide>
          <img src="../assets/ghosts/big/vulnerable-big.png" />
        </slide>
      </carousel>
      <div class="product-info-layout">
        <h1 class="title">{{this.$page.product.name}}</h1>
        <p class="paragraph product-layout">{{this.$page.product.description.long}}</p>
        <p class="price">${{this.$page.product.price}}</p>
        <button class="cta-button-theme cta-button product-layout">Add to cart</button>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss" scoped>
@import "~/theme/_main.scss";

.carousel-layout {
  height: auto;
  width: 216px;
}

.product-layout.cta-button {
  font-size: 24px;
  height: 56px;
  width: 180px;
}

.product-layout.paragraph {
  margin: 29px 0 2px 30px;
  width: 343px;
}

.product-info-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.price {
  color: $custom-white;
  font-family: $secondary-font;
  font-size: 30px;
  font-weight: $normal-font-weight;
  line-height: 40px;
  margin-bottom: 41px;
}

.product-wrapper {
  grid-template-columns: 50% 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 5% auto auto auto;
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
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  },
  methods: {
    getImageUrl(url) {
      // circumvents webpack issue with calling require in html
      const imageFolderContext = require.context("@/assets/ghosts/big", false);
      return imageFolderContext("./" + url);
    }
  },
  metaInfo: {
    title: "Ghost"
  }
};
</script>