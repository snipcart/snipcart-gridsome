<template>
  <Layout>
    <div class="product-grid">
      <ClientOnly>
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
            <img class="product-img-layout" :src="getImageUrl(this.$page.product.images.big)" />
          </slide>
          <slide>
            <img class="product-img-layout" src="../assets/ghosts/big/vulnerable-big.png" />
          </slide>
        </carousel>
      </ClientOnly>
      <div class="product-info-layout">
        <h1 class="title">{{this.$page.product.name}}</h1>
        <p class="paragraph product-layout">{{this.$page.product.descriptions.long}}</p>
        <p class="price">${{this.$page.product.price}}</p>
        <button
          class="cta-button-theme cta-button product-layout snipcart-add-item"
          :data-item-id="this.$page.product.id"
          :data-item-description="this.$page.product.descriptions.long"
          :data-item-image="getImageUrl(this.$page.product.images.big)"
          :data-item-price="this.$page.product.price"
          :data-item-name="this.$page.product.name"
          :data-item-url="this.$page.product.url"
        >Add to cart</button>
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
  @include flex-align-and-justify-center;
  flex-direction: column;
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

.product-grid {
  grid-template-columns: 50% 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  margin: 5% auto auto auto;
  height: 40%;
  width: 60%;
}

@media only screen and (max-width: 768px) {
  .product-grid {
    grid-template-columns: 90%;
    margin: 2% auto;
    width: 100%;
  }

  .carousel-layout {
    height: auto;
    width: 162px;
  }

  .product-img-layout {
    width: 162px;
  }

  .product-layout.paragraph {
    margin: 16px 0 2px 20%;
    width: 100%;
  }
}
</style>
<page-query>
query ($id: ID!) {
  product(id: $id) {
    id
    name
    images {
        big
    }
    descriptions {
        long
    }
    price
    url
  }
}
</page-query>
<script>
export default {
  components: {
    Carousel: () =>
      import("vue-carousel")
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then(m => m.Slide)
        .catch()
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