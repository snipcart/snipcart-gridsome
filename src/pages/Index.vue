<template>
  <Layout>
    <div class="bubble">
      <h1 class="title">Never sleep again</h1>
      <h2 class="subtitle">With our custom-made digital ghost replicas</h2>
    </div>
    <div class="row">
      <div class="featured-product-layout">
      <g-image class="featured-product-image-layout" src="~/assets/ghosts/blinky.png" />
      </div>
      <button class="cta-button-layout cta-button-theme">See our products</button>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style lang="scss">
@import "~/_theme.scss";

.bubble {
  border: 1px solid $custom-white;
  border-radius: 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: 242px;
  margin: 0 auto 72px auto;
  width: 75%;
}

.bubble::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 66px solid $custom-white;
  border-right: 66px solid transparent;
  margin-right: 500px;
  margin-top: 49px;
}


.featured-product-image-layout {
  margin-left: 172px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.featured-product-layout {
  flex: 1;
}

.row::after {
  content: '';
  flex: 1;
}
</style>