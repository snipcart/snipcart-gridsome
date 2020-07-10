<template>
  <Layout>
    <div class="bubble">
      <h1 class="title bubble-title-layout">Never sleep again</h1>
      <h2 class="subtitle">With our custom-made digital ghost replicas</h2>
    </div>
    <div class="row">
      <div class="featured-product-layout">
        <g-image
          class="featured-product-image-layout"
          src="~/assets/ghosts/medium/blinky-medium.png"
        />
      </div>
      <g-link class="index-layout cta-button-theme" to="/products/">See our products</g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Ghost Store"
  }
};
</script>

<style lang="scss" scoped>
@import "~/theme/_main.scss";

.bubble {
  border: 1px solid $custom-white;
  border-radius: 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: 242px;
  margin: 32px auto 72px auto;
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

.bubble-title-layout {
  margin-top: 28px;
}

.cta-button-theme.index-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  margin-bottom: 40px;
  height: 73px;
  width: 331px;
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
  content: "";
  flex: 1;
}
</style>