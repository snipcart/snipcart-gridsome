<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">Products</g-link>
      </nav>
      <nav class="nav">
        <g-link class="nav__link" to="/"><ProfileLogo /></g-link>
        <g-link class="nav__link" to="/about/"><CartLogo /></g-link>
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

html, body {
  background: linear-gradient(180deg, #090B10 0%, #090B10 35.94%, #3B3F51 100%);
  height: 100%;
  margin:0;
  padding:0;
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
  margin-bottom: 20px;
}

.nav {
  margin: 26px 34px;
}

.nav__link {
  color: #c9d4fa;
  font-family: "Jost";
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  font-weight: 800;
  margin-left: 66px;
  text-decoration: none;
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