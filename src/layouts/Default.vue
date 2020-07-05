<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="nav-link underlined" to="/">Home</g-link>
        <g-link class="nav-link" to="/about/">Products</g-link>
      </nav>
      <nav class="nav">
        <g-link class="nav-link" to="/"><ProfileLogo class="hovered"/></g-link>
        <g-link class="nav-link" to="/about/"><CartLogo class="hovered"/></g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import '~/_theme.scss';

html, body {
  background: $primary-color;
  background: $background-gradient;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  height: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
}

.nav {
  margin: 26px 0;
}

.nav-link {
  color: $custom-white;
  font-family: $primary-font;
  font-style: normal;
  font-size: 20px;
  font-weight: $normal-font-weight;
  line-height: 36px;
  margin: 34px;
  text-decoration: none;
}

.underlined {
  border-bottom: 4px solid $accent-color;
}
</style>

<script>
import CartLogo from '~/assets/cart.svg';
import ProfileLogo from '~/assets/profile.svg';

export default {
  components: {
    CartLogo,
    ProfileLogo
  },
}
</script>